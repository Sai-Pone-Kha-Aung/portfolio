"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { BriefcaseBusiness, Calendar } from "lucide-react"
import { experiencesData } from "@/constant/data"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import Image from "next/image"

const Experiences = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.1 })
    const [openPopover, setOpenPopover] = useState<number | null>(null)


    return (
        <section id="experience" className="py-20 md:py-28">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"

                >
                    <h2 className="text-3xl font-bold mb-4 inline-flex items-center">
                        Experiences
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        My professional journey and the companies I&apos;ve had the pleasure to work with. Each role has contributed to
                        my growth as a developer.
                    </p>
                </motion.div>
                <div ref={ref} className="relative">

                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-border"></div>
                    <div className="space-y-12">
                        {experiencesData.map((experience, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative grid md:grid-cols-2 gap-8 ${index % 2 === 0 ? "md:rtl" : ""}`}>

                                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-primary border-4 border-background z-10"></div>
                                <Popover open={openPopover === index} onOpenChange={(open) => setOpenPopover(open ? index : null)}>
                                    <PopoverTrigger asChild>
                                        <div
                                            className={`bg-card rounded-lg p-6 shadow-sm border border-border hover:border-primary/50 transition-colors md:text-left ${index % 2 === 0 ? "md:ltr md:mr-auto" : "md:ml-auto"}`}
                                            onMouseEnter={() => setOpenPopover(index)}
                                            onMouseLeave={() => setOpenPopover(null)}
                                        >

                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className="text-xl font-bold">{experience.title}</h3>
                                                <Badge variant="outline" className="ml-2">
                                                    <Calendar className="mr-1 h-3 w-3" /> {experience.date}
                                                </Badge>
                                            </div>

                                            <div className="flex items-center mb-4">
                                                <BriefcaseBusiness className="h-4 w-4 text-primary mr-2" />
                                                <span className="font-medium">{experience.company}</span>
                                                <span className="mx-2">.</span>
                                                <span className="text-muted-foreground">{experience.location}</span>
                                            </div>
                                            <p className="text-gray-700 dark:text-gray-100 mb-4">{experience.description}</p>
                                            <div className="flex flex-wrap gap-2 mb-4"> {experience.skills.map((skill) => (
                                                <Badge key={skill} variant="secondary" >
                                                    {skill}
                                                </Badge>
                                            ))}
                                            </div>
                                            <div className="flex items-center">
                                                <span className="text-sm text-muted-foreground">Click for more details</span>
                                            </div>
                                        </div>

                                    </PopoverTrigger>
                                    <PopoverContent
                                        className="max-w-xl w-100 p-0 bg-card/95 backdrop-blur-sm border-primary/20"
                                        side="right"
                                        sideOffset={5}
                                    >
                                        <div className="p-4">
                                            <h4 className="font-semibold text-lg border-b pb-2 mb-2">{experience.title} at {experience.company}</h4>
                                            <div className="space-y-3">
                                                {experience.achievements && (
                                                    <div>
                                                        <h5 className="font-medium text-primary mb-1">Key Achievements</h5>
                                                        <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-100 leading-relaxed">
                                                            {experience.achievements.map((achievement, i) => (
                                                                <li key={i}>{achievement}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}

                                                {experience.projects && (
                                                    <div>
                                                        <h5 className="font-medium text-primary mb-1">Notable Projects</h5>
                                                        <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-100 leading-relaxed">
                                                            {experience.projects.map((project, i) => (
                                                                <li key={i}>{project}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </PopoverContent>
                                </Popover>
                                <div>
                                    <Image
                                        src={experience.images[0]}
                                        alt={experience.company}
                                        width={650}
                                        height={400}
                                        className="w-full h-full object-cover rounded-lg shadow-md border border-border"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

        </section >
    )
}

export default Experiences