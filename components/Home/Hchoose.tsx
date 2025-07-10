import React from "react"
import { ShieldCheck, Smartphone, Globe2 } from "lucide-react"

export default function Hchoose() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Why Choose Us</h2>
        <p className="text-gray-600 mb-10">Choose us for unmatched luxury, warm hospitality, and memories that last a lifetime..</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center py-6">
          {/* Card 1 */}
          <div data-aos="fade-up" data-aos-anchor-placement="top-center">
            <div className="flex justify-center mb-4">
              <ShieldCheck className="h-16 w-16 text-yellow-500" />
            </div>
            <h3 className="font-semibold text-xl mb-2">Best Price Guarantee</h3>
            <p className="text-gray-500 text-sm">
              Unbeatable Rates Guaranteed – Pay less, stay more!.<br />
              Lorem ipsum dolor sit amet.
            </p>
          </div>
          {/* Card 2 */}
          <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="150">
            <div className="flex justify-center mb-4">
              <Smartphone className="h-16 w-16 text-yellow-500" />
            </div>
            <h3 className="font-semibold text-xl mb-2">Easy & Quick Booking</h3>
            <p className="text-gray-500 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
              Lorem ipsum dolor sit amet.
            </p>
          </div>
          {/* Card 3 */}
          <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="300">
            <div className="flex justify-center mb-4">
              <Globe2 className="h-16 w-16 text-yellow-500" />
            </div>
            <h3 className="font-semibold text-xl mb-2">Customer Care 24/7</h3>
            <p className="text-gray-500 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}