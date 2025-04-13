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
    const [selectedCategory, setSelectedCategory] = useState<GalleryCategory | null>(null)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const getGalleryData = async () => {
            const data = await fetchImageGallery()
            setGalleryData(data[0])
        }
        getGalleryData()
    }, [])

    const handleCategoryClick = (category: GalleryCategory) => {
        setSelectedCategory(category)
        setIsOpen(true)
    }

    if (!galleryData) return null

    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">{galleryData.title}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* First Column - 2 items */}
                    <div className="space-y-4">
                        {galleryData.categories.slice(0, 2).map((category) => (
                            <motion.div
                                key={category.categoryTitle}
                                whileHover={{ scale: 1.02 }}
                                className="relative cursor-pointer group"
                                onClick={() => handleCategoryClick(category)}
                            >
                                <div className="relative aspect-video rounded-lg overflow-hidden">
                                    <Image
                                        src={category.images[0].image.asset.url}
                                        alt={category.images[0].alt}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white">
                                        <h3 className="text-2xl font-bold mb-2">{category.categoryTitle}</h3>
                                    </div>
                                    <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/80 rounded-full px-2 py-1">
                                        <p className="text-xs">{category.images.length}</p>
                                        <FaImage className="text-xs" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Middle Column - 1 item */}
                    <div>
                        {galleryData.categories.slice(2, 3).map((category) => (
                            <motion.div
                                key={category.categoryTitle}
                                whileHover={{ scale: 1.02 }}
                                className="relative cursor-pointer group h-full"
                                onClick={() => handleCategoryClick(category)}
                            >
                                <div className="relative h-full rounded-lg overflow-hidden">
                                    <Image
                                        src={category.images[0].image.asset.url}
                                        alt={category.images[0].alt}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white">
                                        <h3 className="text-2xl font-bold mb-2">{category.categoryTitle}</h3>
                                    </div>
                                    <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/80 rounded-full px-2 py-1">
                                        <p className="text-xs">{category.images.length}</p>
                                        <FaImage className="text-xs" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Last Column - 2 items */}
                    <div className="space-y-4">
                        {galleryData.categories.slice(3, 5).map((category) => (
                            <motion.div
                                key={category.categoryTitle}
                                whileHover={{ scale: 1.02 }}
                                className="relative cursor-pointer group"
                                onClick={() => handleCategoryClick(category)}
                            >
                                <div className="relative aspect-video rounded-lg overflow-hidden">
                                    <Image
                                        src={category.images[0].image.asset.url}
                                        alt={category.images[0].alt}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white">
                                        <h3 className="text-2xl font-bold mb-2">{category.categoryTitle}</h3>
                                    </div>
                                    <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/80 rounded-full px-2 py-1">
                                        <p className="text-xs">{category.images.length}</p>
                                        <FaImage className="text-xs" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Image Gallery Dialog */}
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogContent className="max-w-[90vw] h-[85vh] w-full bg-black/95 border-0 p-0 rounded-xl overflow-hidden">
                        <div className="relative h-full flex flex-col">
                            <div className="flex-1 flex items-center justify-center">
                                {selectedCategory && (
                                    <ImageCarousel
                                        images={selectedCategory.images}
                                        title={selectedCategory.categoryTitle}
                                    />
                                )}
                            </div>

                            <div className="bg-black/50 p-4 hidden md:block">
                                <h3 className="text-white text-center">
                                    {selectedCategory?.categoryTitle} - {selectedCategory?.images.length} images
                                </h3>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </section>
    )
}
