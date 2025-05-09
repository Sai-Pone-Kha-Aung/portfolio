import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='border-t py-8'>
            <div className='container mx-auto flex flex-col items-center justify-between'>
                <div className='mb-4 md:mb-0'>
                    <p className='text-sm text-muted-foreground'>
                        &copy; {new Date().getFullYear()} Sai Pone Kha Aung. All rights reserved.
                    </p>
                </div>
                <div className='flex space-x-6'>
                    <Link href="#" className='text-sm text-muted-foreground hover:text-foreground transition-colors'>
                        Privacy Policy
                    </Link>
                    <Link href="#" className='text-sm text-muted-foreground hover:text-foreground transition-colors'>
                        Terms of Service
                    </Link>
                    <Link href="#" className='text-sm text-muted-foreground hover:text-foreground transition-colors'>
                        Sitemap
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer