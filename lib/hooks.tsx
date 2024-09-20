import { useActiveSectionContext } from "@/context/Action-Section-Context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "@/constant/types";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
    const { ref, inView } = useInView({
        threshold
    });
    const { activeSection, setActiveSection } = useActiveSectionContext();
    useEffect(() => {
        if (inView && activeSection !== sectionName) {
            setActiveSection(sectionName);
        }
    }, [inView, sectionName, activeSection, setActiveSection]);

    return { ref };
}