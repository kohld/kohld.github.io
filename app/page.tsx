import Header from "./components/header"
import Hero from "./components/hero"
import About from "./components/about"
import Projects from "./components/projects"
import Contact from "./components/contact"
import Footer from "./components/footer"

export default function Home() {

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
