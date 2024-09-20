'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks';
import SectionHeader from './Section-Header';
export default function About() {
    const { ref } = useSectionInView("About", 0.5);
    return (
        <motion.section
            ref={ref}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.175,
            }}
            id="about"
        >
            <SectionHeader>About Me</SectionHeader>

            <p className='mb-3'>
                After covid, I had no idea what to do. My brother told me about{" "}
                <span className='font-medium'>software engineering</span>,
                So I decided to enroll at <span className='font-medium'>Assumption University, Thailand.</span>{" "}
                {" "}
                <span className='italic'>My favorite part of programming </span>
                is the
                problem-solving aspect. I <span className="underline">love</span> the
                feeling of finally figuring out a solution to a problem. My core stack
                is{" "}
                <span className="font-medium">
                    React, Next.js, Node.js, MongoDB , TypeScript and Python
                </span>
                . I am also familiar with TypeScript and Prisma. I am always looking to
                learn new technologies. I am currently looking for a{" "}
                <span className="font-medium">full-time position</span> as a software
                engineer.
            </p>

            <p>
                <span className="italic">When I&apos;m not coding</span>, I enjoy playing
                video games, watching movies, and playing with my dog. I also enjoy{" "}
                <span className="font-medium">learning new things</span>. I am currently
                learning about{" "}
                <span className="font-medium">thai language</span>.
            </p>

        </motion.section>
    )
}
