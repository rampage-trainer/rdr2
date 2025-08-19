"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ImageCarouselProps {
  images: {
    src: string
    alt: string
  }[]
  className?: string
  priority?: boolean
}

export function ImageCarousel({ images, className, priority = false }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  if (!images || images.length === 0) {
    return null
  }

  return (
    <div className={cn("relative group", className)}>
      <div className="relative overflow-hidden rounded-[6px]">
        <div 
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0 flex flex-col">
              <Image
                src={image.src}
                alt={image.alt}
                width={520}
                height={520}
                className="opacity-90 w-[360px] h-auto sm:w-[440px] md:w-[420px] rounded-[6px] ml-13"
                priority={priority && index === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows - only show if more than one image */}
      {images.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-full"
            onClick={goToPrevious}
            aria-label="Previous image"
          >
            <ChevronLeft className="size-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-full"
            onClick={goToNext}
            aria-label="Next image"
          >
            <ChevronRight className="size-5" />
          </Button>
        </>
      )}

      {/* Image indicators - only show if more than one image */}
      {images.length > 1 && (
        <div className="mt-3 flex gap-2 justify-center mr-1">
          {images.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-200",
                index === currentIndex 
                  ? "bg-white/90 scale-110" 
                  : "bg-white/50 hover:bg-white/70"
              )}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
