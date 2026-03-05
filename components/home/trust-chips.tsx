
import { cn } from "@/lib/utils"

export function TrustChips() {
    const items = [
        "Studio-quality DSLR",
        "Instant SMS or email delivery",
        "Brand-safe overlays",
        "Los Angeles"
    ]

    return (
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-[#B8B8B8] font-medium">
            {items.map((item, index) => (
                <div key={item} className="flex items-center">
                    {index > 0 && (
                        <span className="mr-3 h-1 w-1 rounded-full bg-[#C8B08A]/40" aria-hidden="true" />
                    )}
                    <span className="whitespace-nowrap">{item}</span>
                </div>
            ))}
        </div>
    )
}
