'use client'
import React from 'react'
import { useSectionInView } from '@/lib/hooks';
import SectionHeader from '@/components/Section-Header';
import { projectsData } from '@/constant/data';
import Project from '@/components/Project';

export default function Projects() {
    const { ref } = useSectionInView("Projects", 0.5);
    return (
        <section ref={ref} id='projects' className='scroll-mt-28 mb-28'>
            <SectionHeader>My Projects</SectionHeader>
            <div>
                {projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project}/>
                    </React.Fragment>
                ))}
            </div>
        </section>
    )
}
