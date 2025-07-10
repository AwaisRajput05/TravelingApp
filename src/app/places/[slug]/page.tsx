
import { notFound } from "next/navigation"

const places = [
  { slug: "new-york-city", title: "New York City", text: "175,000 Travelers", img: "/images/d1.jpg" },
  { slug: "manhattan", title: "Manhattan", text: "180,000 Travelers", img: "/images/d2.jpg" },
  { slug: "toronto", title: "Toronto", text: "200,000 Travelers", img: "/images/d3.jpg" },
  { slug: "chicago", title: "Chicago", text: "250,000 Travelers", img: "/images/d4.jpg" },
  { slug: "empire-state", title: "Empire State", text: "300,000 Travelers", img: "/images/d5.jpg" },
]

export default function PlacePage({ params }: { params: { slug: string } }) {
  const place = places.find((p) => p.slug === params.slug)

  if (!place) return notFound()

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-4">{place.title}</h1>
      <img src={place.img} alt={place.title} className="w-full h-[400px] object-cover rounded-xl mb-4" />
      <p className="text-gray-700 text-lg">{place.text}</p>
      <p className="mt-4 text-gray-600">
       Traveling opens the door to new experiences, cultures,
        and perspectives. It allows you to step out of your comfort zone
         and discover the beauty of the world. Whether you're exploring 
         ancient cities, relaxing on a beach, or hiking through mountains,
          each journey brings unforgettable memories. Traveling teaches
           adaptability, patience, and appreciation for diversity. It’s not
            just about seeing new places but also about meeting new people and
             trying new things. Every trip becomes a story, a lesson, and a 
             part of your personal growth. Whether alone or with loved ones, 
             traveling refreshes the mind and soul.
      </p>
    </div>
  )
}
