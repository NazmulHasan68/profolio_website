"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack MERN application with real-time inventory management, payment integration, and admin dashboard.",
      image: "/project-ecommerce.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Socket.IO"],
      link: "#",
      github: "#",
    },
    {
      title: "Real-time Chat Application",
      description:
        "WebSocket-based messaging app with user authentication, group chats, and persistent message storage.",
      image: "/project-chat.jpg",
      technologies: ["Next.js", "WebSocket", "PostgreSQL", "Redis", "TypeScript"],
      link: "#",
      github: "#",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Data visualization platform with real-time metrics, charts, and exportable reports for client analytics.",
      image: "/project-analytics.jpg",
      technologies: ["React", "Chart.js", "Express", "MongoDB", "Docker"],
      link: "#",
      github: "#",
    },
    {
      title: "Task Management System",
      description: "Collaborative tool with Kanban boards, real-time updates, and team collaboration features.",
      image: "/project-tasks.jpg",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "TailwindCSS"],
      link: "#",
      github: "#",
    },
    {
      title: "Content Management System",
      description: "Headless CMS with API-first design, user roles, and content versioning capabilities.",
      image: "/project-cms.jpg",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "Multer"],
      link: "#",
      github: "#",
    },
    {
      title: "Social Media Analytics",
      description: "Tool for tracking and analyzing social media metrics across multiple platforms.",
      image: "/project-social.jpg",
      technologies: ["React", "Node.js", "PostgreSQL", "Puppeteer", "Recharts"],
      link: "#",
      github: "#",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-2">Featured Projects</h2>
          <div className="h-1 w-12 bg-accent rounded-full" />
          <p className="text-foreground/70 mt-4">Explore some of my recent work and personal projects</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div key={`${project.title}-${index}`} variants={itemVariants}>
              <Card className="h-full overflow-hidden border border-border/50 hover:border-accent/50 transition-all hover:shadow-lg group">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-foreground/80 text-sm leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs bg-primary/10 text-primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button asChild size="sm" variant="outline" className="flex-1 bg-transparent">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        View
                      </a>
                    </Button>
                    <Button asChild size="sm" variant="outline" className="flex-1 bg-transparent">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
