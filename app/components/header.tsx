"use client"

import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 w-full bg-black/80 backdrop-blur-xl z-50 border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center py-4">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-white/80 hover:text-[#007AFF] transition-all duration-300 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-white/80 hover:text-[#007AFF] transition-all duration-300 font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-white/80 hover:text-[#007AFF] transition-all duration-300 font-medium"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white/80 hover:text-[#007AFF] transition-all duration-300 font-medium"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white text-2xl"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-left text-white/80 hover:text-[#007AFF] transition-all duration-300"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-white/80 hover:text-[#007AFF] transition-all duration-300"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-left text-white/80 hover:text-[#007AFF] transition-all duration-300"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-white/80 hover:text-[#007AFF] transition-all duration-300"
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
