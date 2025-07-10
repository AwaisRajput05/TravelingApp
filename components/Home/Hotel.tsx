// app/components/HotelCard.tsx
"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Heart } from "lucide-react"
import { useState } from "react"

interface Hotel {
  src: string
  title: string
  location: string
  rating: number
  reviews: number
  price: number
}

const hotels: Hotel[] = [
  {
    src: "/images/h1.jpg",
    title: "The Grand London Resort and Spa",
    location: "Westminster, London",
    rating: 4.6,
    reviews: 2345,
    price: 72,
  },
  {
    src: "/images/h2.jpg",
    title: "Barcelona City Suites Deluxe Hotel",
    location: "Ciutat Vella, Barcelona",
    rating: 4.7,
    reviews: 1912,
    price: 85,
  },
  {
    src: "/images/h3.jpg",
    title: "Times Square Premium Stay Hotel",
    location: "Manhattan, New York",
    rating: 4.9,
    reviews: 3420,
    price: 95,
  },
  {
    src: "/images/h4.jpg",
    title: "Hilton Roma Luxury Hotel Palace",
    location: "Vaticano Prati, Rome",
    rating: 4.5,
    reviews: 2876,
    price: 68,
  },
]

export default function HotelGrid() {
  // Track liked state for each hotel
  const [liked, setLiked] = useState<boolean[]>(Array(hotels.length).fill(false))

  const handleLike = (index: number) => {
    setLiked(prev => {
      const updated = [...prev]
      updated[index] = !updated[index]
      return updated
    })
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-8 md:px-12 lg:px-24 py-6">
      {hotels.map((hotel, index) => (
        <Card
          key={index}
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay={index * 100}
          className="relative overflow-hidden shadow-md transition-shadow duration-300 hover:shadow-xl bg-transparent border-0"
        >
          <div className="relative h-48 w-full group">
            <Image
              src={hotel.src}
              alt={hotel.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              style={{ objectFit: 'cover' }}
            />
            <button
              className="absolute top-2 right-2 bg-white p-1 rounded-full shadow"
              onClick={() => handleLike(index)}
              type="button"
            >
              <Heart
                className={`w-5 h-5 ${liked[index] ? "text-red-500 fill-red-500" : "text-gray-700"}`}
                fill={liked[index] ? "red" : "none"}
              />
            </button>
          </div>
          <CardContent className="pt-2 px-4 pb-4 space-y-1">
            <h3 className="font-semibold">{hotel.title}</h3>
            <p className="text-sm text-gray-500">{hotel.location}</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="bg-blue-700 text-white text-xs font-medium px-2 py-0.5 rounded">
                {hotel.rating}
              </span>
              <span className="text-sm text-gray-600">
                Exceptional {hotel.reviews.toLocaleString()} Reviews
              </span>
            </div>
            <p className="text-sm text-gray-700">
              Starting from <span className="text-blue-600 font-semibold">US${hotel.price}</span>
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
