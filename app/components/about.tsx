import SkillOrbit from './skill-orbit';

export default function About() {
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

        <div className="overflow-visible">
          <SkillOrbit />
        </div>
      </div>
    </section>
  );
}
