"use client"

import { motion, easeInOut } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, ArrowRight } from "lucide-react"

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8,  ease:easeInOut },
    },
  }

  return (
    <section className="min-h-screen flex items-center pt-20 px-4">
      <motion.div
        className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Content */}
        <motion.div className="space-y-6" variants={itemVariants}>
          <motion.div variants={itemVariants}>
            <p className="text-accent font-semibold text-sm uppercase tracking-wider">Welcome to my portfolio</p>
            <h1 className="text-5xl md:text-6xl font-bold mt-2 text-balance">Nazmul Hasan</h1>
            <p className="text-2xl text-muted-foreground mt-2">Full Stack Developer & Student Leader</p>
          </motion.div>

          <motion.p
            className="text-lg text-foreground/80 leading-relaxed max-w-xl text-balance"
            variants={itemVariants}
          >
            I'm passionate about creating modern web experiences, problem-solving, and leadership. Experienced in MERN
            stack, cloud infrastructure, and real-time applications.
          </motion.p>

          <motion.div className="flex gap-4 pt-4" variants={itemVariants}>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
              <a href="#contact">
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button
              variant="outline"
              className="gap-2 bg-transparent"
              onClick={() => {
                // Trigger CV download
                const link = document.createElement("a")
                link.href = "/resume.pdf"
                link.download = "Nazmul_Hasan_Resume.pdf"
                link.click()
              }}
            >
              <Download className="w-4 h-4" />
              Download CV
            </Button>
          </motion.div>
        </motion.div>

        {/* Right - Profile Image */}
        <motion.div className="relative aspect-square" variants={itemVariants}>
          <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl" />
          <img
            src="/nazmul.png"
            alt="Nazmul Hasan"
            className="relative w-full h-full object-cover rounded-2xl border border-border shadow-2xl"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
