"use client"

import * as React from "react"
import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const places = [
  { src: "/images/d1.jpg", label: "New York City", text: "175,000 Travelers", slug: "new-york-city" },
  { src: "/images/d2.jpg", label: "Manhattan", text: "180,000 Travelers", slug: "manhattan" },
  { src: "/images/d3.jpg", label: "Toronto", text: "200,000 Travelers", slug: "toronto" },
  { src: "/images/d4.jpg", label: "Chicago", text: "250,000 Travelers", slug: "chicago" },
  { src: "/images/d5.jpg", label: "Empire State", text: "300,000 Travelers", slug: "empire-state" },
]


export function Places() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      const nextButton = carouselRef.current?.querySelector('[data-carousel-next]') as HTMLElement
      nextButton?.click()
    }, 3000) // scroll every 3 seconds

    intervalRef.current = interval
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center py-10">
      <Carousel
        ref={carouselRef}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-6xl"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {places.map((place, index) => (
            <CarouselItem
              key={index}
              className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 pl-2 md:pl-4"
            >
              {/* Ab sirf Card render karein: */}
              <Card className="overflow-hidden rounded-2xl shadow-md hover:scale-105 transition-transform duration-300 bg-transparent border-0">
                <CardContent className="p-0">
                  <div className="w-full h-[400px]">
                    <img
                      src={place.src}
                      alt={`Place ${index + 1}`}
                      className="w-full h-full object-cover"
                      style={{ display: "block" }}
                    />
                  </div>
                  <div>
                    <p className="text-center text-2xl font-bold text-gray-800 py-3">{place.label}</p>
                    <p className="text-sm text-gray-800">{place.text}</p>
                  </div>
                </CardContent>
              </Card>

            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          data-carousel-prev
          className="-left-6 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg"
        />
        <CarouselNext
          data-carousel-next
          className="-right-6 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg"
        />
      </Carousel>
    </div>
  )
}

export default Places
