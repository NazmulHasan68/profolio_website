"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12"
        >
          {/* Left - About Text */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold mb-2">About Me</h2>
              <div className="h-1 w-12 bg-accent rounded-full" />
            </div>

            <p className="text-lg text-foreground/80 leading-relaxed">
              I'm a CSE student at Bangladesh University, passionate about building scalable, user-focused applications.
              I work across full-stack development, cloud infrastructure, and real-time systems, combining strong technical 
              skills with leadership and mentorship experience. 
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              My journey in technology spans full-stack web development, cloud infrastructure, and real-time
              applications. I believe in writing clean, maintainable code and creating intuitive user experiences.
            </p>

            <div className="pt-4">
              <h3 className="font-semibold text-foreground mb-3">Core Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "Node.js","Expresss.js", "MongoDB", "PostgreSQL", "TypeScript", "Docker", "Git&Github"].map(
                  (skill) => (
                    <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                      {skill}
                    </Badge>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* Right - Stats or additional info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="border-l-4 border-accent pl-4 py-2">
                <p className="text-sm text-muted-foreground uppercase tracking-wider">Education</p>
                <p className="text-xl font-semibold">CSE Student</p>
                <p className="text-foreground/70">Bangladesh University</p>
              </div>

              <div className="border-l-4 border-primary pl-4 py-2">
                <p className="text-sm text-muted-foreground uppercase tracking-wider">Focus Areas</p>
                <p className="text-xl font-semibold">Full Stack Development</p>
                <p className="text-foreground/70">MERN Stack & Cloud Infrastructure</p>
              </div>

              <div className="border-l-4 border-secondary pl-4 py-2">
                <p className="text-sm text-muted-foreground uppercase tracking-wider">Passion</p>
                <p className="text-xl font-semibold">Problem Solving</p>
                <p className="text-foreground/70">Building scalable applications</p>
              </div>
            </div>

            <div className="bg-background/50 border border-border rounded-lg p-6">
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Human Languages</p>
              <div className="flex flex-wrap gap-2">
                {["Bengali (Native)", "English", "Hindi"].map((lang) => (
                  <Badge key={lang} variant="outline">
                    {lang}
                  </Badge>
                ))}
              </div>

              <p className="text-sm text-muted-foreground uppercase tracking-wider mt-4 mb-2">Programing Languages</p>
              <div className="flex flex-wrap gap-2">
                {["Javascript", "Typescript", "Java", "C", "C++"].map((lang) => (
                  <Badge key={lang} variant="outline">
                    {lang}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
