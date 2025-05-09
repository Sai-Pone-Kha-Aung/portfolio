'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import ThemeToggle from './theme/Theme-Toggle'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/#about" },
    { name: "Skills", path: "/#skills" },
    { name: "Experience", path: "/#experience" },
    { name: "Projects", path: "/#projects" },
    { name: "Contact", path: "/#contact" },
]



export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={cn("fixed top-0 w-full z-50 transition-all duration-300", scrolled ? "bg-background/80 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6")}>
            <div className='container mx-auto flex items-center justify-between'>
                <Link href="/" className='text-2xl font-bold'>
                    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <span className='text-primary'>Sai </span>Pone Kha Aung
                    </motion.div>
                </Link>

                <nav className='hidden md:flex items-center space-x-8'>
                    <ul className='flex space-x-6'>
                        {navItems.map((item, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Link
                                    href={item.path}
                                    className={cn("text-sm font-medium transition-colors hover:text-primary", pathname === item.path ? "text-primary" : "text-muted-foreground")}
                                >
                                    {item.name}
                                </Link>
                            </motion.li>
                        ))}
                    </ul>
                    <ThemeToggle />
                </nav>
                {/* Mobile Menu Button */}
                <div className='flex items-center md:hidden'>
                    <ThemeToggle />
                    <Button
                        variant={"ghost"}
                        size={"icon"}
                        className='ml-2'
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {mobileMenuOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
                    </Button>
                </div>
            </div>


            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='md:hidden bg-background/95 backdrop-blur-md'
                >
                    <div className='container py-4'>
                        <ul className='flex flex-col space-y-4'>
                            {navItems.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        href={item.path}
                                        className={cn("block py-2 text-sm font-medium transition-colors hover:text-primary", pathname === item.path ? "text-primary" : "text-muted-foreground")}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            )}
        </header>
    )
}