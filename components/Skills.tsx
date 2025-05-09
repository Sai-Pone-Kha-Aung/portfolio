"use client"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { skills } from "@/constant/data"
const Skills = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.1 })

    return (
        <section id="skills" className="py-20 md:py-28 bg-muted/50">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold mb-4 inline-flex items-center">

                        Skills
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        I&apos;ve worked with a variety of technologies and methodologies throughout my career. Here&apos;s a snapshot of my
                        technical expertise and what I bring to the table.
                    </p>
                </motion.div>
                <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-card rounded-lg p-6 shadow-md border border-border hover:border-primary/50 transition-colors"
                        >
                            <div className="text-primary mb-4">{skill.icon}</div>
                            <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                            <p className="text-muted-foreground mb-4">{skill.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {skill.technologies.map((tech) => (
                                    <span key={tech} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">

                                        {tech}
                                    </span>
                                ))}
                            </div>

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills