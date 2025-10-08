import Header from './components/header';
import Hero from './components/hero';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="relative">
        {/* Background gradient for entire page */}
        <div
          className="fixed inset-0 z-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center top, rgba(0, 122, 255, 0.1) 0%, rgba(0, 0, 0, 0.8) 70%)',
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 80%, rgba(0, 122, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(0, 122, 255, 0.05) 0%, transparent 50%)',
            }}
          ></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <Hero />
          <About />
          <Projects />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
