"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Database, Layout, Palette, Server, Terminal, Zap } from "lucide-react"

const skills = [
  {
    category: "Frontend",
    icon: <Layout className="h-8 w-8" />,
    items: ["React", "Next.js", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: <Server className="h-8 w-8" />,
    items: ["Node.js", "Express", "NestJS", "Python", "Django", "REST APIs"],
  },
  {
    category: "Database",
    icon: <Database className="h-8 w-8" />,
    items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Prisma", "Supabase"],
  },
  {
    category: "DevOps",
    icon: <Terminal className="h-8 w-8" />,
    items: ["Docker", "AWS", "CI/CD", "Git", "GitHub Actions", "Vercel"],
  },
  {
    category: "Design",
    icon: <Palette className="h-8 w-8" />,
    items: ["Figma", "Adobe XD", "UI/UX", "Responsive Design", "Wireframing"],
  },
  {
    category: "Other",
    icon: <Zap className="h-8 w-8" />,
    items: ["GraphQL", "WebSockets", "Testing", "SEO", "Performance Optimization"],
  },
]

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="skills" className="py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Skills</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Technical Expertise</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here are the technologies and tools I work with to build modern web applications.
            </p>
          </div>
        </div>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-lg border bg-card text-card-foreground shadow-sm"
            >
              <div className="p-6 flex flex-col items-center text-center">
                <div className="rounded-full bg-primary/10 p-3 text-primary">{skill.icon}</div>
                <h3 className="mt-4 text-xl font-bold">{skill.category}</h3>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
