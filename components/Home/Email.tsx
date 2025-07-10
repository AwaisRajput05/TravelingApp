// components/SubscribeForm.tsx or .js
"use client"

import React from "react"
import { MdEmail } from "react-icons/md"

export default function SubscribeForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const email = (e.target as HTMLFormElement).email.value
    console.log("Subscribed with email:", email)
    // You can replace this with your API call or form logic
  }

  return (
    <div className="w-full bg-black p-8 rounded-none shadow-md">
      <div className="text-center mb-6">
        <div className="flex justify-center mb-2">
          <MdEmail
            className="text-white text-4xl"
            data-aos="fade-up"
          />
        </div>
        <h2 data-aos="fade-up" className="text-2xl font-bold text-white mb-2">
          Your Travel Journey Starts Here
        </h2>
        <p className="text-gray-300">
          Sign up and we&apos;ll send the best deals to you
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
        <div>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-white text-white bg-transparent"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-300"
        >
          Subscribe
        </button>
      </form>
    </div>
  )
}

