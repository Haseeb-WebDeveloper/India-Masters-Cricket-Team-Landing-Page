"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import useEmblaCarousel from 'embla-carousel-react'
import { FaImage } from "react-icons/fa6"
import { fetchImageGallery } from "@/lib/sanity/client"

interface GalleryImage {
  image: {
    asset: {
      url: string
    }
  }
  title: string
  alt: string
}

interface GalleryCategory {
  categoryTitle: string
  images: GalleryImage[]
}

interface ImageGalleryData {
  title: string
  categories: GalleryCategory[]
}

function ImageCarousel({ images, title }: { images: GalleryImage[], title: string }) {
    const [emblaRef, emblaApi] = useEmblaCarousel()
    const [currentIndex, setCurrentIndex] = useState(0)

    const scrollPrev = () => {
        if (emblaApi) emblaApi.scrollPrev()
    }

    const scrollNext = () => {
        if (emblaApi) emblaApi.scrollNext()
    }

    const onSelect = () => {
        if (!emblaApi) return
        setCurrentIndex(emblaApi.selectedScrollSnap())
    }

    useEffect(() => {
        if (emblaApi) {
            emblaApi.on('select', onSelect)
        }
    }, [emblaApi])

    return (
        <div className="relative w-full">
            <div className="absolute top-4 left-4 right-4 z-50 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <span className="bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                        {currentIndex + 1} / {images.length}
                    </span>
                    <h3 className="text-white text-lg font-medium hidden md:block">{title}</h3>
                </div>
            </div>

            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {images.map((image, index) => (
                        <div key={index} className="relative flex-[0_0_100%]">
                            <div className="relative aspect-[16/9] w-full">
                                <Image
                                    src={image.image.asset.url}
                                    alt={image.alt}
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button
                onClick={scrollPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-colors"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>

            <button
                onClick={scrollNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-colors"
            >
                <ChevronRight className="w-6 h-6" />
            </button>
        </div>
    )
}

export function ImageGallery() {
    const [galleryData, setGalleryData] = useState<ImageGalleryData | null>(null)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const getGalleryData = async () => {
            const data = await fetchImageGallery()
            setGalleryData(data[0])
        }
        getGalleryData()
    }, [])

    // Flatten all images from all categories into a single array
    const allImages = galleryData?.categories.reduce<GalleryImage[]>((acc, category) => {
        return [...acc, ...category.images]
    }, []) || []

    const totalImageCount = allImages.length

    if (!galleryData) return null

    return (
        <section className="py-24 bg-background">
            <div className="max-w-[1100px]  mx-auto px-4">
                <div className="mb-8">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">{galleryData.title}</h2>
                </div>

                <div className="max-w-[1100px] mx-auto">
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="relative cursor-pointer group"
                        onClick={() => setIsOpen(true)}
                    >
                        <div className="relative aspect-video rounded-lg overflow-hidden">
                            <Image
                                src={allImages[0].image.asset.url}
                                alt={allImages[0].alt}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white">
                                <h3 className="text-2xl font-bold mb-2">View Gallery</h3>
                            </div>
                            <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/80 rounded-full px-2 py-1">
                                <p className="text-xs">{totalImageCount}</p>
                                <FaImage className="text-xs" />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Image Gallery Dialog */}
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogContent className="max-w-[90vw] h-[85vh] w-full bg-black/95 border-0 p-0 rounded-xl overflow-hidden">
                        <div className="relative h-full flex flex-col">
                            <div className="flex-1 flex items-center justify-center">
                                <ImageCarousel
                                    images={allImages}
                                    title="IML Season 1"
                                />
                            </div>

                            <div className="bg-black/50 p-4 hidden md:block">
                                <h3 className="text-white text-center">
                                    Gallery - {totalImageCount} images
                                </h3>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </section>
    )
}
