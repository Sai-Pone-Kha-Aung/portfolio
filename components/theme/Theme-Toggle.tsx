'use client'
import React, { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <Button>
                <Sun className='h-[1.2rem] w-[1.2rem]' />
            </Button>
        )
    }

    return (
        <Button
            variant={"ghost"}
            size={"icon"}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label='Toggle theme'
        >
            {mounted && (
                <motion.div>
                    {theme === 'dark' ? (
                        <Moon className='h-[1.2rem] w-[1.2rem]' />
                    ) : (
                        <Sun className='h-[1.2rem] w-[1.2rem]' />
                    )}
                </motion.div>
            )}
        </Button>
    )
}
export default ThemeToggle