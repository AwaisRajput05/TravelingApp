"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCards } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-cards"
import Image from "next/image"
import { Star } from "lucide-react"

const reviews = [
  {
    name: "Michael Brown",
    role: "Web Developer",
    image: "/images/u1.jpg",
    rating: 5,
    text: "Exceptional quality and fantastic customer service! The project was delivered on time and exactly as I wanted. I will definitely use their services again.",
  },
  {
    name: "Sophia White",
    role: "Web Designer",
    image: "/images/u2.jpg",
    rating: 5,
    text: "The dedication and skill of the team made all the difference. Truly an exceptional experience I won’t forget.",
  },
  {
    name: "James Brown",
    role: "Project Manager",
    image: "/images/u3.jpg",
    rating: 5,
    text: "Very satisfied with the service! Professional and friendly staff. Highly recommended.",
  },
    {
    name: "Michael Brown",
    role: "Web Developer",
    image: "/images/u1.jpg",
    rating: 5,
    text: "Exceptional quality and fantastic customer service! The project was delivered on time and exactly as I wanted. I will definitely use their services again.",
  },
    {
    name: "Sophia White",
    role: "Web Designer",
    image: "/images/u2.jpg",
    rating: 5,
    text: "The dedication and skill of the team made all the difference. Truly an exceptional experience I won’t forget.",
  },
]

export default function CustomerReview() {
  return (
    <section className="bg-blue-900 text-white py-16 px-2 sm:px-4 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE STATIC CONTENT */}
        <div className="space-y-4 w-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">What our customers are saying us?</h2>
          <p className="text-gray-200 text-sm sm:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nesciunt fugiat praesentium dolores facilis.
          </p>
          <div className="pt-4">
            <p className="text-3xl sm:text-4xl font-semibold">4.88</p>
            <p className="text-gray-300 text-xs sm:text-base">Overall Rating</p>
            <div className="flex mt-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE SWIPER CARDS */}
        <div className="w-full flex justify-center">
          <Swiper
            effect="cards"
            grabCursor={true}
            modules={[EffectCards]}
            className="max-w-xs sm:max-w-sm md:max-w-md w-full h-[220px] sm:h-[280px] md:h-[340px] flex items-center justify-center"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white text-gray-900 rounded-2xl shadow-2xl p-4 sm:p-6 w-full h-[180px] sm:h-[220px] md:h-[320px] flex flex-col justify-center items-center mx-auto">
                  <p className="text-sm sm:text-base font-medium text-center">{review.text}</p>
                  <div>
                    <div className="flex mt-3 justify-center">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <div className="flex items-center gap-3 pt-4 justify-center">
                      <Image
                        src={review.image}
                        alt={review.name}
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                      <div>
                        <p className="font-semibold text-xs sm:text-base">{review.name}</p>
                        <p className="text-xs sm:text-sm text-gray-500">{review.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
