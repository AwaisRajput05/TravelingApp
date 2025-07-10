"use client"

import Image from "next/image"

const travelPosts = [
	{
		title: "Top 10 place to visit in Australia",
		date: "15 November 2025",
		image: "/images/n1.jpg",
	},
	{
		title: "Top 10 place to visit in Bangladesh",
		date: "25 November 2025",
		image: "/images/n2.jpg",
	},
	{
		title: "Top 10 place to visit in Pakistan",
		date: "22 November 2025",
		image: "/images/n3.jpg",
	},
	{
		title: "Top 10 place to visit in New Zealand",
		date: "5 November 2025",
		image: "/images/n4.jpg",
	},
]

export default function TravelBlogGrid() {
	return (
		<section className="py-10 px-4 md:px-20">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
				{travelPosts.map((post, index) => (
					<div
						key={index}
						data-aos="fade-left"
						data-aos-anchor-placement="top-center"
						data-aos-delay={
							index === 1
								? "200"
								: index === 2
								? "300"
								: index === 3
								? "400"
								: undefined
						}
						className="rounded-xl overflow-hidden shadow hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition duration-300 bg-white"
					>
						<div className="relative h-60">
							<Image
								src={post.image}
								alt={post.title}
								fill
								className="object-cover"
							/>
						</div>
						<div className="p-4">
							<h3 className="text-lg font-semibold text-gray-800">
								{post.title}
							</h3>
							<p className="text-sm text-gray-500 mt-2">{post.date}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}
