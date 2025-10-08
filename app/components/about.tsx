export default function About() {
  const skills = [
    {
      title: 'Backend Engineering',
      technologies: [
        'PHP',
        'Symfony',
        'Pimcore',
        'Yii 2',
        'REST API',
        'Doctrine',
        'Twig',
        'MySQL',
        'RabbitMQ',
      ],
    },
    {
      title: 'Currently Exploring',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      isExploring: true,
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I am a passionate software engineer with extensive experience in
            designing and developing scalable web applications for leading
            companies and digital products. My focus is on modern technologies,
            robust backend architectures, and user-centric frontend solutions. I
            thrive in collaborative environments and have contributed to complex
            projects for clients such as Deutsche Bahn, NFON, ZDF, and
            more—delivering reliable systems, seamless integrations, and
            innovative digital platforms.
          </p>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white/[0.03] border border-white/10 rounded-2xl p-10 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.05] hover:border-[#007AFF]/30 hover:-translate-y-2"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">
                {skill.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skill.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 hover:-translate-y-1 ${
                      skill.isExploring
                        ? 'bg-[#007AFF]/10 text-white border-[#007AFF]/30 hover:bg-[#007AFF]/20 hover:border-[#007AFF]/60'
                        : 'bg-white/10 text-white border-white/20 hover:bg-[#007AFF]/20 hover:border-[#007AFF]/50'
                    }`}
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
  );
}
