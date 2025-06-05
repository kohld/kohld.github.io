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
    <header role="banner" className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
      <a href="#main-content" className="sr-only focus:not-sr-only absolute left-4 top-4 z-50 bg-gray-900 text-white px-4 py-2 rounded">Skip to main content</a>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center py-4 relative">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2" aria-label="Main navigation" tabIndex={0}>
            <button
              onClick={() => scrollToSection("hero")}
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              aria-label="Go to Home"
              aria-current="page"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              aria-label="Go to About"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              aria-label="Go to Projects"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              aria-label="Go to Contact"
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center space-x-4">


            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xl"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
            >
              <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav id="mobile-navigation" className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800" aria-label="Main navigation" tabIndex={0}>
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-left text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                aria-label="Go to Home"
                aria-current="page"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                aria-label="Go to About"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-left text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                aria-label="Go to Projects"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                aria-label="Go to Contact"
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
