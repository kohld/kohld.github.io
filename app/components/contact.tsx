"use client"

export default function Contact() {
  return (
    <section id="contact" role="region" aria-labelledby="contact-heading" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 id="contact-heading" className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Contact</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Feel free to reach out via email for project inquiries, collaboration, or just to say hello.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="mailto:dennes.kohl@gmail.com"
            className="inline-block px-8 py-3 bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-lg font-medium text-lg transition-colors"
            aria-label="Send email to dennes.kohl@gmail.com"
          >
            Send Email
          </a>
          <a
            href="https://github.com/kohld"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-lg font-medium text-lg transition-colors"
            aria-label="Visit GitHub profile"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
              <title>GitHub icon</title>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.867 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.153-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.528 2.341 1.087 2.91.832.092-.647.35-1.087.636-1.338-2.221-.253-4.555-1.112-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.579.688.481C19.135 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
            <span className="ml-2">GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
