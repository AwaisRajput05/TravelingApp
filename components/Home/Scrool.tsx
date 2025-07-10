"use client"

import { useEffect, useState } from "react"
import { FaArrowUp } from "react-icons/fa"

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  // Only render on client
  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const handleScroll = () => {
      setVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isMounted])

  const scrollToTop = () => {
    const scrollStep = () => {
      const currentScroll = window.scrollY
      if (currentScroll > 2) {
        window.scrollTo(0, currentScroll - currentScroll / 25)
        window.requestAnimationFrame(scrollStep)
      }
      // Jab scrollY <= 2 ho, kuch na karein (loop yahin ruk jayega)
    }
    if (isMounted) {
      window.requestAnimationFrame(scrollStep)
    }
  }

  if (!isMounted) return null

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  )
}
