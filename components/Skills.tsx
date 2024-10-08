'use client'
import React from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '@/components/Section-Header'
import { skillsData } from '@/constant/data'
import { useSectionInView } from '@/lib/hooks'

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },

    animate: (index:number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        }
    })
}

export default function Skills() {
    const { ref } = useSectionInView("Skills");
    return (
        <section
            id="skills"
            ref={ref}
            className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'
        >
            <SectionHeader>Skills</SectionHeader>
            <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
                {skillsData.map((skill, index) => (
                    <motion.li 
                        key={index}
                        className='bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80'
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true,
                        }}
                        custom={index}
                    >
                        {skill}
                    </motion.li>
                ))}
            </ul>
        </section>
    )
}
