import React, { useState } from 'react'
import Image from 'next/image'
import { ArrowLeft, X } from 'lucide-react'

interface ImageGalleryModalProps {
    images: string[]
    title?: string
    isOpen?: boolean
    onClose?: () => void
    initialImageIndex?: number
}

const ImageGalleryModal = ({
    images,
    title = "Image",
    isOpen = false,
    onClose = () => { },
    initialImageIndex = 0
}: ImageGalleryModalProps) => {
    const [activeImage, setActiveImage] = useState(initialImageIndex);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center" onClick={onClose}>
            <div className="relative max-w-7xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
                <Image
                    src={images[activeImage] || "/placeholder.svg"}
                    alt={`${title} screenshot`}
                    width={1920}
                    height={1080}
                    className="object-contain w-full max-h-[90vh]"
                />
                <button
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                    onClick={(e) => {
                        e.stopPropagation();
                        setActiveImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
                    }}
                >
                    <ArrowLeft className="h-6 w-6 text-white" />
                </button>
                <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                    onClick={(e) => {
                        e.stopPropagation();
                        setActiveImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
                    }}
                >
                    <ArrowLeft className="h-6 w-6 text-white transform rotate-180" />
                </button>
                <button
                    className="absolute top-4 right-4 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                    onClick={onClose}
                >
                    <X className="h-6 w-6 text-white" />
                </button>
            </div>
        </div>
    )
}

export default ImageGalleryModal