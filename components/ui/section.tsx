import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    container?: boolean
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
    ({ className, container = true, children, ...props }, ref) => {
        return (
            <section
                ref={ref}
                className={cn(
                    "py-16 md:py-24 lg:py-32",
                    className
                )}
                {...props}
            >
                {container ? (
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        {children}
                    </div>
                ) : (
                    children
                )}
            </section>
        )
    }
)
Section.displayName = "Section"

export { Section }
