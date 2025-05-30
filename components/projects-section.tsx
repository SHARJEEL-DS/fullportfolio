"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
    image: "/Screenshot 2025-05-06 124805.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Prisma"],
    demoUrl: "https://shopcart.reactbd.com/",
    githubUrl: "https://github.com/SHARJEEL-DS/Ecommerceshorp.git/",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team workspaces.",
    image: "/Screenshot 2025-05-06 130647.png",
    tags: ["React", "Node.js", "MongoDB", "Socket.io", "Express"],
    demoUrl: "https://taskify-app-virid.vercel.app/",
    githubUrl: "https://github.com/SHARJEEL-DS/task-manager",
  },
  {
    title: "Pillarvalley game",
    description: "An interactive Game simple concept to taking dot to pipler.",
    image: "/Screenshot 2025-05-06 165115.png",
    tags: ["React", "Three.js", "gasp", "Material UI", "Redux"],
    demoUrl: "https://pillarvalley.expo.app/",
    githubUrl: "https://github.com/SHARJEEL-DS/pillarvalley",
  },
  {
    title: "Candidates&Recruiter Platform",
    description: "A social networking platform with user profiles, candidates gives resume and HR can easy access.",
    image: "/Screenshot 2025-05-06 144349.png",
    tags: ["Next.js", " AI hiring agent ", "Google Gemini API", "RAG", "Tailwind CSS"],
    demoUrl: "https://airesumeparser.vercel.app",
    githubUrl: "https://github.com/SHARJEEL-DS/AI-resume",
  },
]

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="projects" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Projects</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Recent Work</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out some of the projects I've worked on recently.
            </p>
          </div>
        </div>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button asChild variant="outline" size="sm">
                    <Link href={project.githubUrl} target="_blank">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                  <Button asChild size="sm">
                    <Link href={project.demoUrl} target="_blank">
                      Live Demo
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
