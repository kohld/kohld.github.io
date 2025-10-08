"use client"

import { useEffect } from "react"

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    const container = document.getElementById('particles-container')
    if (!container) return

    const particles: HTMLDivElement[] = []

    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div')
      const size = Math.random() * 4 + 2
      const startX = Math.random() * 100 // Prozent
      const duration = Math.random() * 15 + 10
      const delay = Math.random() * 5
      
      particle.className = 'particle'
      particle.style.width = `${size}px`
      particle.style.height = `${size}px`
      particle.style.left = `${startX}%`
      particle.style.animation = `floatUp ${duration}s ${delay}s infinite linear`
      
      container.appendChild(particle)
      particles.push(particle)
    }

    // Cleanup
    return () => {
      particles.forEach(p => p.remove())
    }
  }, [])

  return (
    <section id="hero" className="relative flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-48 pb-32">
      {/* Particles Container */}
      <div id="particles-container" className="absolute inset-0 z-0 overflow-hidden pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-4xl text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
          Hi, I'm Dennes Kohl
        </h1>
        <p className="text-xl sm:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
          Software Engineer & Backend Developer passionate about modern web technologies and user-centric solutions.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-4 bg-gradient-to-br from-[#007AFF] to-[#0051D5] text-white rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl"
          >
            Get In Touch
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="px-8 py-4 bg-white/10 text-white border border-white/20 rounded-full font-semibold backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:-translate-y-1"
          >
            View Projects
          </button>
        </div>
      </div>
    </section>
  )
}
