"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Experience() {
  const experiences = [
    {
      role: "HSC ICT Teacher",
      company: "BD Educators",
      duration: "1 year",
      description:
        "Taught ICT curriculum to high school students, focusing on programming concepts and digital literacy.",
      skills: ["Teaching", "Curriculum Development", "Student Mentoring"],
    },
    {
      role: "Information Technology Trainer",
      company: "Various Institutions",
      duration: "8 months",
      description: "Conducted IT training programs covering web development fundamentals and software basics.",
      skills: ["Web Development", "Training", "Technical Communication"],
    },
    {
      role: "Teacher",
      company: "Genius Coaching Center",
      duration: "6 months",
      description:
        "Provided personalized tutoring in computer science and programming to intermediate and advanced students.",
      skills: ["Tutoring", "Problem Solving", "Programming"],
    },
    {
      role: "Teacher",
      company: "MKPA",
      duration: "3 months",
      description: "Delivered lectures on digital concepts and basic programming to students.",
      skills: ["Teaching", "Communication", "Digital Literacy"],
    },
    {
      role: "Freelance Developer",
      company: "Self-employed",
      duration: "Ongoing",
      description: "Completed 5+ local client projects ranging from static websites to full-stack applications.",
      skills: ["Full Stack Development", "Client Management", "Project Delivery"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-2">Experience</h2>
          <div className="h-1 w-12 bg-accent rounded-full" />
        </motion.div>

        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.role}-${index}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border border-border/50 hover:border-accent/50 transition-colors">
                <CardHeader>
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <CardTitle className="text-xl">{exp.role}</CardTitle>
                      <p className="text-primary font-medium mt-1">{exp.company}</p>
                    </div>
                    <Badge variant="outline" className="whitespace-nowrap">
                      {exp.duration}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-foreground/80">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Organizations Section */}
        <div className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold mb-2">Organizational Involvement</h3>
            <div className="h-1 w-12 bg-accent rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
            {
              name: "Durbar Bangladesh",
              role: "Active Member"
            },
            {
              name: "BASIS Student Forum",
              role: "Campus Member "
            },
            {
              name: "Okotan Organization",
              role: "Financial Advisor"
            },
            {
              name: "Krishnochora Sangothon",
              role: "Sports & Environmental Activities"
            }

            ].map((org) => (
              <motion.div
                key={org.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-card border border-border/50 rounded-lg p-6 hover:border-accent/50 transition-colors"
              >
                <h4 className="font-semibold text-primary">{org.name}</h4>
                <p className="text-sm text-muted-foreground mt-1">{org.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
