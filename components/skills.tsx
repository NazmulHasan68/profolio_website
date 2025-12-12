"use client"

import { motion } from "framer-motion"
import { 
  Code2, 
  Database, 
  Cloud, 
  Palette, 
  ClipboardCheck,
  Brush 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Skills() {
 
const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code2,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "DaisyUI",
      "ShadCN UI",
      "Material UI",
      "Bootstrap"
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Backend & Full Stack",
    icon: Database,
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "Neon DB",
      "Drizzle ORM",
      "Better auth",
      "Next auth",
      "OAuth",
      "jwt",
      "cloudinary",
      "gen ai"
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    skills: [
      "Docker",
      "Kubernetes",
      "Git",
      "GitHub",
      "Firebase",
      "Google Console",
      "Google Analytics 4 (GA4)",
      "Google Tag Manager (GTM)",
      "Meta Pixel"
    ],
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Real-time & Authentication",
    icon: Palette,
    skills: [
      "Socket.IO",
      "WebSocket",
      "BetterAuth",
      "NextAuth"
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Graphics & UI Design",
    icon: Brush,
    skills: [
      "Photoshop",
      "Illustrator",
      "Figma"
    ],
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Productivity Tools",
    icon: ClipboardCheck,
    skills: [
      "MS Word",
      "MS PowerPoint",
      "MS Excel"
    ],
    color: "from-indigo-500 to-purple-500",
  },
];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-2">Skills & Expertise</h2>
          <div className="h-1 w-12 bg-accent rounded-full" />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <motion.div key={category.title} variants={itemVariants}>
                <Card className="h-full border border-border/50 hover:border-accent/50 transition-colors group overflow-hidden">
                  <div className={`h-1 bg-gradient-to-r ${category.color}`} />
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle>{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-sm rounded-full bg-background/50 border border-border text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
