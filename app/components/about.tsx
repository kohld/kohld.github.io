export default function About() {
  const skills = [
    {
      icon: "🛠️",
      title: "Backend Engineering",
      technologies: ["PHP", "Symfony", "Pimcore", "Yii 2", "REST API", "Doctrine", "Twig", "MySQL", "RabbitMQ"],
    },
    {
      icon: "💡",
      title: "Currently Exploring",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I am a passionate software engineer with extensive experience in designing and developing scalable web applications for leading companies and digital products. My focus is on modern technologies, robust backend architectures, and user-centric frontend solutions. I thrive in collaborative environments and have contributed to complex projects for clients such as Deutsche Bahn, NFON, ZDF, and more—delivering reliable systems, seamless integrations, and innovative digital platforms.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm hover:shadow-md text-center">
              <div className="text-4xl mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{skill.title}</h3>
              <div className="flex flex-wrap justify-center gap-2 mt-2">
                {skill.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
