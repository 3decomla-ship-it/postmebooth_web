#!/usr/bin/env node

/**
 * generate-events.mjs
 *
 * Scans postmebooth_website_archive/ and:
 *   1. Copies assets into public/events/{slug}/
 *   2. Generates lib/events.generated.ts with typed event data
 *
 * Usage:  node scripts/generate-events.mjs
 * Flags:  --symlink   Use symlinks instead of copies (local dev only)
 */

import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, "..")
const SOURCE = path.join(ROOT, "postmebooth_website_archive")
const PUBLIC_DEST = path.join(ROOT, "public", "events")
const OUTPUT_TS = path.join(ROOT, "lib", "events.generated.ts")

const USE_SYMLINK = process.argv.includes("--symlink")

/* ── Category mapping (handles typos + casing) ─────────────────────── */
const CATEGORY_MAP = {
    corporate: "corporate",
    corprate: "corporate", // typo in source folder
    nightlife: "nightlife",
    weddings: "weddings",
}

/* ── Helpers ────────────────────────────────────────────────────────── */

/** Slugify folder name: lowercase, underscores → hyphens, trim */
function toSlug(name) {
    return name.trim().toLowerCase().replace(/[_\s]+/g, "-").replace(/[^a-z0-9-]/g, "")
}

/**
 * Professional title from folder name:
 * - Replace underscores/hyphens with spaces
 * - Title-case each word
 * - Keep short/cryptic names (≤3 chars) uppercase
 * - Remove filler words that cheapen the name
 * - Elevate tone where needed
 */
const FILLER_WORDS = new Set(["party", "photoshoot", "photoshootparty"])
const KEEP_UPPER = new Set(["la", "dj", "nyc", "ea", "wya", "dsrpt", "nfl", "ny"])

function toTitle(name) {
    const words = name
        .trim()
        .replace(/[_-]/g, " ")
        .split(/\s+/)
        .filter((w) => !FILLER_WORDS.has(w.toLowerCase()))

    return words
        .map((w) => {
            const lower = w.toLowerCase()
            if (KEEP_UPPER.has(lower) || w.length <= 3) return w.toUpperCase()
            return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
        })
        .join(" ")
}

/** Case-insensitive subfolder finder */
function findSubfolder(parent, targetName) {
    try {
        const entries = fs.readdirSync(parent)
        const match = entries.find((e) => e.trim().toLowerCase() === targetName.toLowerCase())
        if (match) {
            const full = path.join(parent, match)
            if (fs.statSync(full).isDirectory()) return full
        }
    } catch {
        /* ignore */
    }
    return null
}

/** List image/video files in a directory */
function listMediaFiles(dir) {
    if (!dir) return []
    const EXTS = new Set([".jpg", ".jpeg", ".png", ".webp", ".mp4", ".webm", ".mov", ".gif"])
    try {
        return fs
            .readdirSync(dir)
            .filter((f) => EXTS.has(path.extname(f).toLowerCase()) && !f.startsWith("."))
            .sort()
    } catch {
        return []
    }
}

/** Copy or symlink a file */
function copyAsset(src, dest) {
    fs.mkdirSync(path.dirname(dest), { recursive: true })
    if (fs.existsSync(dest)) return // skip if already exists
    if (USE_SYMLINK) {
        fs.symlinkSync(src, dest)
    } else {
        fs.copyFileSync(src, dest)
    }
}

/* ── Main ───────────────────────────────────────────────────────────── */

function main() {
    const events = []

    // Clean destination
    if (fs.existsSync(PUBLIC_DEST)) {
        fs.rmSync(PUBLIC_DEST, { recursive: true })
    }
    fs.mkdirSync(PUBLIC_DEST, { recursive: true })

    // Read category directories
    const categoryDirs = fs.readdirSync(SOURCE).filter((d) => {
        const full = path.join(SOURCE, d)
        return fs.statSync(full).isDirectory() && !d.startsWith(".")
    })

    for (const catDir of categoryDirs) {
        const normalizedCat = CATEGORY_MAP[catDir.trim().toLowerCase()]
        if (!normalizedCat) {
            console.warn(`⚠  Skipping unknown category: "${catDir}"`)
            continue
        }

        const catPath = path.join(SOURCE, catDir)
        const eventDirs = fs.readdirSync(catPath).filter((d) => {
            const full = path.join(catPath, d)
            return fs.statSync(full).isDirectory() && !d.startsWith(".")
        })

        for (const eventDir of eventDirs) {
            const eventPath = path.join(catPath, eventDir)
            const slug = toSlug(eventDir)

            // ── Check for event.json override ──
            let override = {}
            const overridePath = path.join(eventPath, "event.json")
            if (fs.existsSync(overridePath)) {
                try {
                    override = JSON.parse(fs.readFileSync(overridePath, "utf-8"))
                } catch (e) {
                    console.warn(`⚠  Bad event.json in ${eventDir}: ${e.message}`)
                }
            }

            // ── Privacy check ──
            if (override.private === true) {
                console.log(`🔒 Skipping private event: ${eventDir}`)
                continue
            }

            // ── Find subfolders (case-insensitive) ──
            const frontDir = findSubfolder(eventPath, "front")
            const gifDir = findSubfolder(eventPath, "gif")
            const templateDir = findSubfolder(eventPath, "template")
            const rawDir = findSubfolder(eventPath, "raw")

            // ── List files ──
            const frontFiles = listMediaFiles(frontDir)

            // Deduplicate motion files by exact file size to prevent identical clips appearing side-by-side
            let gifFiles = listMediaFiles(gifDir)
            if (gifDir) {
                const uniqueGifFiles = []
                const seenSizes = new Set()
                for (const f of gifFiles) {
                    const stat = fs.statSync(path.join(gifDir, f))
                    if (!seenSizes.has(stat.size)) {
                        seenSizes.add(stat.size)
                        uniqueGifFiles.push(f)
                    }
                }
                gifFiles = uniqueGifFiles
            }

            const templateFiles = listMediaFiles(templateDir)
            const rawFiles = listMediaFiles(rawDir)

            // Skip events with no content at all
            if (frontFiles.length === 0 && templateFiles.length === 0 && rawFiles.length === 0) {
                console.warn(`⚠  Skipping empty event: ${eventDir}`)
                continue
            }

            // ── Copy assets to public/events/{slug}/ ──
            const destBase = path.join(PUBLIC_DEST, slug)

            const copyAndMap = (files, srcDir, subDir) => {
                return files.map((f) => {
                    const dest = path.join(destBase, subDir, f)
                    copyAsset(path.join(srcDir, f), dest)
                    return `/events/${slug}/${subDir}/${f}`
                })
            }

            const coverPaths = frontDir ? copyAndMap(frontFiles, frontDir, "front") : []
            const motionPaths = gifDir ? copyAndMap(gifFiles, gifDir, "gif") : []
            const templatePaths = templateDir ? copyAndMap(templateFiles, templateDir, "template") : []
            const rawPaths = rawDir ? copyAndMap(rawFiles, rawDir, "raw") : []

            // ── Build event object ──
            const event = {
                id: slug,
                type: normalizedCat,
                title: override.title || toTitle(eventDir),
                venue: override.venue || null,
                city: override.city || null,
                tags: override.tags || [],
                featured: override.featured === true,
                cover: coverPaths[0] || templatePaths[0] || rawPaths[0] || null,
                motion: motionPaths,
                templateImages: templatePaths,
                rawImages: rawPaths,
                totalImageCount: templatePaths.length + rawPaths.length,
            }

            events.push(event)
        }
    }

    // ── Sort: featured first, then alphabetical by title ──
    events.sort((a, b) => {
        if (a.featured !== b.featured) return a.featured ? -1 : 1
        return a.title.localeCompare(b.title)
    })

    // ── Generate TypeScript ──
    const ts = `// AUTO-GENERATED by scripts/generate-events.mjs — do not edit manually
// Last generated: ${new Date().toISOString()}

export interface ArchiveEvent {
  id: string
  type: "corporate" | "nightlife" | "weddings"
  title: string
  venue: string | null
  city: string | null
  tags: string[]
  featured: boolean
  cover: string | null
  motion: string[]
  templateImages: string[]
  rawImages: string[]
  totalImageCount: number
}

export const EVENTS: ArchiveEvent[] = ${JSON.stringify(events, null, 2)} as const

export function getEventBySlug(slug: string): ArchiveEvent | undefined {
  return EVENTS.find((e) => e.id === slug)
}

export function getEventsByType(type: ArchiveEvent["type"]): ArchiveEvent[] {
  return EVENTS.filter((e) => e.type === type)
}

export function getFeaturedEvents(): ArchiveEvent[] {
  return EVENTS.filter((e) => e.featured)
}
`

    fs.mkdirSync(path.dirname(OUTPUT_TS), { recursive: true })
    fs.writeFileSync(OUTPUT_TS, ts, "utf-8")

    console.log(`\n✅ Generated ${events.length} events → ${OUTPUT_TS}`)
    console.log(`📁 Assets copied to ${PUBLIC_DEST}`)
    console.log(`   Corporate: ${events.filter((e) => e.type === "corporate").length}`)
    console.log(`   Nightlife: ${events.filter((e) => e.type === "nightlife").length}`)
    console.log(`   Weddings:  ${events.filter((e) => e.type === "weddings").length}`)
    console.log(`   Featured:  ${events.filter((e) => e.featured).length}`)
}

main()
