'use client'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import Image from 'next/image'
import GetYouTubeVideo from '@/actions/Get-YouTube-Video'
import Link from 'next/link'

const About = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.3 })
    const videoId = GetYouTubeVideo()

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
    }

    return (
        <section id="about" className="py-20 md:py-28">
            <div className='container'>
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className='grid md:grid-cols-2 gap-12 items-center'
                >
                    <motion.div
                        variants={itemVariants}
                        className='relative'
                    >
                        <div className='relative w-full aspect-square max-w-md mx-auto'>
                            <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/0 -z-10 transform rotate-3'>
                            </div>

                            <Image
                                src="/github.jpg"
                                alt="Profile"
                                width={500}
                                height={500}
                                className='rounded-2xl object-cover shadow-xl' />
                        </div>
                    </motion.div>

                    <div>
                        <motion.div variants={itemVariants}>
                            <h2 className='text-3xl font-bold mb-6 flex items-center'>
                                About Me
                            </h2>
                        </motion.div>
                        <motion.p variants={itemVariants} className="text-muted-foreground mb-4">
                            Hello! I&apos;m a passionate software engineer specializing in building exceptional digital experiences. With a
                            strong foundation in frontend and backend technologies, I enjoy creating efficient, scalable, and
                            user-friendly solutions to complex problems.
                        </motion.p>

                        <motion.p variants={itemVariants} className="text-muted-foreground mb-4">
                            My journey in software development began at MEW Int Ldt, where I honed my skills in modern web
                            technologies. Since then, I&apos;ve worked on a diverse range of projects, from interactive web applications to
                            complex enterprise systems.
                        </motion.p>

                        <motion.p variants={itemVariants} className="text-muted-foreground mb-6">
                            When I&apos;m not coding, you can find me exploring new technologies, or
                            sharing my knowledge through technical writing and mentoring. And you might also catch me on <span className="text-red-700 font-semibold">YouTube</span>, where I
                            share insights and tutorials on web development topics.
                        </motion.p>
                        <motion.div variants={itemVariants}>
                            <h3 className="font-medium mb-3">Technologies I&apos;ve been working with:</h3>
                            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                                <li className="flex items-center">
                                    <span className="text-primary mr-2">▹</span> JavaScript
                                </li>
                                <li className="flex items-center">
                                    <span className="text-primary mr-2">▹</span> TypeScript
                                </li>
                                <li className="flex items-center">
                                    <span className="text-primary mr-2">▹</span> React
                                </li>
                                <li className="flex items-center">
                                    <span className="text-primary mr-2">▹</span> Next.js
                                </li>
                                <li className="flex items-center">
                                    <span className="text-primary mr-2">▹</span> Node.js
                                </li>
                                <li className="flex items-center">
                                    <span className="text-primary mr-2">▹</span> Tailwind CSS, SCSS
                                </li>
                                <li className="flex items-center">
                                    <span className="text-primary mr-2">▹</span>
                                    Unity, Unreal Engine
                                </li>
                                <li className="flex items-center">
                                    <span className="text-primary mr-2">▹</span> Agile, Scrum
                                </li>
                            </ul>
                        </motion.div>
                        <motion.div variants={itemVariants} className=" grid grid-cols-1 gap-5 mt-8">
                            <h3 className='font-semibold text-xl'>Check out my latest video!</h3>
                            {videoId ? (
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={`https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0`}
                                    title="Latest YouTube Video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-[345px]"
                                ></iframe>
                            ) : (
                                <p className="text-muted-foreground">
                                    Loading video... If it doesn&apos;t appear, please check out my channel directly.
                                    <Link href="https://youtube.com/@y2kDevHub?sub_confirmation=1" target="_blank" rel="noopener noreferrer" className="text-primary ml-1">
                                        Visit my YouTube channel
                                    </Link>
                                </p>
                            )}
                        </motion.div>
                    </div>

                </motion.div>

            </div>

        </section>
    )
}

export default About