"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Users, Zap } from "lucide-react"

export function Achievements() {
  const achievements = [
    {
      title: "Anchored 3 Major University Programs",
      description: "Led and hosted significant events, demonstrating strong public speaking and organizational skills.",
      icon: Users,
      highlight: "Leadership",
    },
    {
      title: "5+ Successful Client Projects",
      description:
        "Completed freelance projects ranging from branding to full-stack applications with excellent client satisfaction.",
      icon: Trophy,
      highlight: "Freelance",
    },
    {
      title: "Strong Technical Foundation",
      description:
        "Proficient in modern web technologies including MERN stack, cloud infrastructure, and real-time applications.",
      icon: Zap,
      highlight: "Technical",
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-20 px-4 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-2">Achievements & Highlights</h2>
          <div className="h-1 w-12 bg-accent rounded-full" />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <motion.div key={`${achievement.title}-${index}`} variants={itemVariants}>
                <Card className="h-full border border-border/50 hover:border-accent/50 transition-colors group overflow-hidden">
                  <div className="h-1 bg-gradient-to-r from-primary to-accent" />
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                        {achievement.highlight}
                      </span>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {achievement.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80 text-sm leading-relaxed">{achievement.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
        >
          {[
            { number: "7+", label: "Projects Completed" },
            { number: "8+", label: "Technologies" },
            { number: "5+", label: "Years Teaching" },
            { number: "3", label: "Programs Hosted" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-lg bg-background border border-border/50 hover:border-accent/50 transition-colors"
            >
              <p className="text-3xl md:text-4xl font-bold text-primary">{stat.number}</p>
              <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
