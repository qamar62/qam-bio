import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { Projects } from '@/components/projects'
import { AISection } from '@/components/ai-section'
import { Architecture } from '@/components/architecture'
import { Experience } from '@/components/experience'
import { Services } from '@/components/services'
import { Process } from '@/components/process'
import { GitHubSection } from '@/components/github-section'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <AISection />
        <Architecture />
        <Experience />
        <Process />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
