'use client'
import React, { useRef, Suspense } from 'react'
import { ContactShadows, Environment, OrbitControls, Plane } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { motion } from 'framer-motion'
import { Button } from './ui/button'
import Link from 'next/link'
import { ArrowRight, Download, Linkedin, Youtube } from 'lucide-react'
import { Avatar } from './Avatar'

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null)

    return (
        <section className='relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden'>
            <div className='container grid lg:grid-cols-2 gap-8 items-center pt-24 lg:pt-0'>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className='z-10'
                >
                    <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4'>
                        <span className='block'>Hi, I&apos;m</span>
                        <span className='text-primary'>Sai</span>
                        <span className='block'>Software Engineer</span>
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8 max-w-md">
                        I build exceptional and accessible digital experiences for the web.
                    </p>
                    <div className='flex flex-wrap gap-4'>
                        <Button asChild size="lg">
                            <Link href={"#projects"}>
                                View Projects <ArrowRight className='ml-2 h-4 w-4' />
                            </Link>
                        </Button>
                        <Button variant="outline" size="lg">
                            <Link href="/Sai Pone Kha Aung - CV.pdf" target="_blank" download className='flex items-center'>
                                <Download className='mr-2 h-4 w-4' /> Download CV
                            </Link>
                        </Button>
                    </div>
                    <div className='flex flex-wrap gap-4 mt-4'>

                        <Button variant="ghost" size="lg">
                            <Link href="https://github.com/Sai-Pone-Kha-Aung" target="_blank">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="26"
                                    height="26"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-6 w-6"
                                >
                                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                    <path d="M9 18c-4.51 2-5-2-7-2" />
                                </svg>
                            </Link>
                        </Button>
                        <Button variant="ghost" size="lg" asChild>
                            <Link href="https://linkedin.com/in/sai-pone-kha-aung" target="_blank">
                                <Linkedin className='w-5 h-5' />
                            </Link>
                        </Button>
                        <Button variant="ghost" size="lg" asChild>
                            <Link href="https://youtube.com/@y2kDevHub?sub_confirmation=1" target="_blank">
                                <Youtube className='w-5 h-5' />
                            </Link>
                        </Button>
                    </div>
                </motion.div>

                <motion.div
                    ref={containerRef}
                    initial={{ opacity: 0, y: 0.8 }}
                    animate={{ opacity: 1, y: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className='w-full h-[500px] lg:h-[600px] relative'
                >
                    <div className='absolute inset-0 z-0'>
                        <Canvas camera={{ position: [0, 25, 27], fov: 30 }} className='rounded-xl' shadows>
                            <Environment preset='sunset' />
                            <Suspense fallback={null}>
                                <ContactShadows
                                    frames={1}
                                    opacity={0.5}
                                    scale={10}
                                    position={[0, -5.5, 0]}
                                />
                                <Avatar
                                    position={[0, -5.5, 0]}
                                    scale={6.5}
                                />
                            </Suspense>
                            <mesh>
                                <Plane
                                    args={[100, 100]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    position={[0, -5.501, 0]}
                                    receiveShadow
                                >
                                    <meshStandardMaterial color="#ffffff" />
                                </Plane>
                            </mesh>
                            <OrbitControls
                                enableZoom={false}
                                enablePan={false}
                                minPolarAngle={Math.PI / 2.2}
                                maxPolarAngle={Math.PI / 1.8}
                                rotateSpeed={0.5}
                            />
                        </Canvas>
                    </div>
                </motion.div>
            </div>

            <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1, ease: "easeOut", delay: 1,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                        repeatDelay: 0.2,
                    }}
                >
                    <Button variant="ghost" size="sm" asChild>
                        <Link href="#about">
                            Scroll Down
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="ml-2 h-4 w-4"
                            >
                                <path d="M12 5v14M5 12l7 7 7-7" />
                            </svg>
                        </Link>
                    </Button>
                </motion.div>
            </div>

        </section>
    )
}

export default Hero