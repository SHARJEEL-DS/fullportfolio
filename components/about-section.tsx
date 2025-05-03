"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="about" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div ref={ref} className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">About Me</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Full Stack Developer with a Passion for Creating
            </h2>
            <p className="text-muted-foreground md:text-xl">
              I'm a full stack developer with over  years of experience building web applications. I specialize in
              JavaScript, React, Node.js, and modern web technologies.
            </p>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                My journey in web development began when I built my first website at 16. Since then, I've worked with
                startups and established companies to create responsive, user-friendly applications that solve
                real-world problems.
              </p>
              <p className="text-muted-foreground">
                When I'm not coding, you can find me hiking, reading tech blogs, or experimenting with new frameworks
                and libraries. I believe in continuous learning and staying updated with the latest industry trends.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center"
          >
            <div className="relative h-[400px] w-[400px] overflow-hidden rounded-full border-4 border-primary">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Sharjeel Sohail"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
