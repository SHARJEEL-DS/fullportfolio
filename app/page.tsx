import type { Metadata } from "next"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"

export const metadata: Metadata = {
  title: "Sharjeel Sohail | Full Stack Developer",
  description: "Professional portfolio of Sharjeel Sohail, a full stack developer specializing in modern web technologies.",
}

export default function Home() {
  return (
    <div className="container px-4 md:px-6">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}
