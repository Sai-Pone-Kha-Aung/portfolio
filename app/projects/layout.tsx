import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Projects | Modern Developer Portfolio",
    description: "Detailed information about my projects and case studies",
}

export default function ProjectsLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return children
}
