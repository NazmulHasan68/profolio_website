"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Experience() {
  const experiences = [
    { role: "Freelance Developer", company: "Self-Employed", duration: "Ongoing", description: "Developed 5+ client projects, including static websites, full-stack applications, and custom business solutions.", skills: ["Full-Stack Development", "Client Communication", "Project Delivery"] },
    { role: "HSC ICT Teacher", company: "BD Educators", duration: "1 year", description: "Taught ICT to high school students, covering programming fundamentals, essential computer literacy, and exam-oriented guidance.", skills: ["Teaching", "Curriculum Design", "Student Mentoring"] },
    { role: "Trainer", company: "Glaxcy Information Technology", duration: "8 months", description: "Conducted IT training sessions on web development basics, computer operations, and essential software skills for beginners.", skills: ["Web Development", "Training Delivery", "Technical Communication"] },
    { role: "Science Tutor", company: "Genius Coaching Center", duration: "6 months", description: "Provided personalized tutoring in computer science, algorithms, and programming to both intermediate and advanced students.", skills: ["Tutoring", "Problem Solving", "Programming"] },
    { role: "Graphic Designer", company: "Fatema Graphics", duration: "4 months", description: "Worked part-time creating promotional designs, branding materials, and assisting with layout and production tasks.", skills: ["Graphic Design", "Branding", "Creativity"] },
    { role: "Academic Teacher", company: "MKPA", duration: "3 months", description: "Delivered academic lectures for classes 9 and 10, focusing on ICT and computer fundamentals.", skills: ["Teaching", "Classroom Management", "Communication"] },
  ]

  const organizations = [
    { name: "Durbar Bangladesh", role: "Active Member" },
    { name: "BASIS Student Forum", role: "Campus Member" },
    { name: "Okotan Organization", role: "Financial Advisor" },
    { name: "Krishnochora Sangothon", role: "Sports & Environmental Activities" }
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-2">Experience Timeline</h2>
          <div className="h-1 w-12 bg-accent rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l-2 border-accent/50 ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.role}-${index}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative m-2"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-5 top-2 w-5 h-5 bg-accent rounded-full border-2 border-background" />

              {/* Card */}
              <Card className="border border-border/50 hover:border-accent/50 transition-colors pl-6 shadow-lg">
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
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8 "
          >
            <h3 className="text-2xl font-bold mb-2">Organizational Involvement</h3>
            <div className="h-1 w-12 bg-accent rounded-full" />
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {organizations.map((org) => (
              <motion.div
                key={org.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-card border border-border/50 rounded-lg p-6 hover:border-accent/50 transition-colors shadow-md"
              >
                <h4 className="font-semibold text-primary text-lg">{org.name}</h4>
                <p className="text-sm text-muted-foreground mt-1">{org.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
