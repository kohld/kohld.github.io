'use client';

import { useState, useMemo } from 'react';
import { Project } from '@/lib/definitions';
import projectsData from '@/data/projects.json';

const projects = projectsData as Project[];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  // Extract all unique technologies
  const allTechnologies = useMemo(() => {
    const techSet = new Set<string>();
    projects.forEach((project) => {
      project.technologies.forEach((tech) => techSet.add(tech));
    });
    return ['All', ...Array.from(techSet).sort()];
  }, []);

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    const filtered =
      selectedFilter === 'All'
        ? projects
        : projects.filter((project) =>
            project.technologies.includes(selectedFilter),
          );
    return [...filtered].sort((a, b) => a.title.localeCompare(b.title));
  }, [selectedFilter]);

  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 4);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Completed & Contributed Projects
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Here are some of my completed and contributed projects, showcasing a
            variety of technologies and solution approaches.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="mb-12">
          <div
            className="flex flex-wrap justify-center gap-3"
            role="group"
            aria-label="Filter projects by technology"
          >
            {allTechnologies.map((tech) => (
              <button
                key={tech}
                onClick={() => {
                  setSelectedFilter(tech);
                  setShowAll(false);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedFilter === tech
                    ? 'bg-[#007AFF] text-white border-2 border-[#007AFF] shadow-lg shadow-[#007AFF]/30'
                    : 'bg-white/5 text-gray-300 border-2 border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
                aria-pressed={selectedFilter === tech}
              >
                {tech}
              </button>
            ))}
          </div>

          {selectedFilter !== 'All' && (
            <div className="text-center mt-6">
              <p className="text-sm text-gray-400">
                Showing{' '}
                <span className="text-[#007AFF] font-semibold">
                  {filteredProjects.length}
                </span>{' '}
                {filteredProjects.length === 1 ? 'project' : 'projects'} with{' '}
                <span className="text-white font-semibold">
                  {selectedFilter}
                </span>
              </p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className="relative bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.05] hover:border-[#007AFF]/30 hover:-translate-y-2 focus-within:-translate-y-2 overflow-hidden group"
            >
              {/* Animated top border on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#007AFF]/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[600ms]"></div>

              <h3 className="text-xl font-semibold text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1.5 bg-[#007AFF]/10 text-[#007AFF] border border-[#007AFF]/20 rounded-full text-xs font-medium transition-all duration-300 hover:bg-[#007AFF]/20 hover:border-[#007AFF]/40"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2.5 bg-[#007AFF]/10 text-[#007AFF] border border-[#007AFF]/30 rounded-full text-sm font-medium backdrop-blur-sm transition-all duration-300 hover:bg-[#007AFF]/20 hover:border-[#007AFF]/50 hover:-translate-y-1"
                  aria-label={`Visit ${project.title} website (opens in new tab)`}
                >
                  Show Project
                </a>
              )}
            </div>
          ))}
        </div>

        {filteredProjects.length > 4 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 bg-white/10 text-white border border-white/20 rounded-full font-semibold backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:-translate-y-1"
              aria-label={showAll ? 'Show fewer projects' : 'Show all projects'}
            >
              {showAll ? 'Show Less' : 'Show All Projects'}
            </button>
          </div>
        )}

        {/* No results message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">
              No projects found with{' '}
              <span className="text-white font-semibold">{selectedFilter}</span>
            </p>
            <button
              onClick={() => setSelectedFilter('All')}
              className="mt-4 px-6 py-2 bg-[#007AFF]/10 text-[#007AFF] border border-[#007AFF]/30 rounded-full text-sm font-medium transition-all duration-300 hover:bg-[#007AFF]/20"
              aria-label="Clear technology filter and show all projects"
            >
              Clear Filter
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
