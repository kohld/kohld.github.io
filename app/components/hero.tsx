"use client"

export default function Hero() {
  return (
    <section id="hero" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center py-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I’m <span className="text-gray-700 dark:text-gray-300">Dennes Kohl</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
            Software Engineer & Backend Developer passionate about modern web technologies and user-centric solutions.
          </p>
          <div className="flex justify-center">
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-lg font-medium"
            >
              See Completed & Contributed Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
