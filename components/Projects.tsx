"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Info } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { projects } from "@/constant/data"

const Projects = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.1 })

    return (
        <section id="projects" className="py-20 md:py-28 bg-muted/50">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >

                    <h2 className="text-3xl font-bold mb-4 inline-flex items-center">
                        Projects
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                        Here are some of my recent projects. Each one was carefully crafted to solve specific problems and showcase
                        different aspects of my technical skills.
                    </p>

                </motion.div>

                <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-card rounded-lg p-6 shadow-sm border border-border hover:border-primary/50 transition-all hover:shadow-md group">
                            <div className="relative aspect-video overflow-hidden">

                                <Image src={project.image} alt={project.title} width={800} height={600}
                                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                    <Button size="sm" variant="secondary" asChild>
                                        <Link href={project.liveLink} target="_blank">
                                            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                                        </Link>
                                    </Button>
                                    <Button size="sm" variant="secondary" asChild>
                                        <Link href={project.githubLink} target="_blank">
                                            <Github className="mr-2 h-4 w-4" /> Code
                                        </Link>
                                    </Button>

                                </div>
                            </div>

                            <div className="p-4">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <Badge key={tag} variant="outline" className="text-xs">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                                <div className="flex justify-between">
                                    <Button size="sm" variant="default" asChild>
                                        <Link href={`/projects/${project.slug}`}>
                                            <Info className="mr-2 h-4 w-4" /> View Details
                                        </Link>
                                    </Button>
                                    <div className="flex gap-2">
                                        <Button size="sm" variant="ghost" asChild>
                                            <Link href="/" target="_blank">
                                                <ExternalLink className="h-4 w-4" />
                                                <span className="sr-only">Live Demo</span>
                                            </Link>
                                        </Button>
                                        <Button size="sm" variant="ghost" asChild>
                                            <Link href="/" target="_blank">
                                                <Github className="h-4 w-4" />
                                                <span className="sr-only">GitHub</span>
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>


                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects