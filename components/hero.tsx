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
      transition: { duration: 0.9, ease: easeInOut },
    },
  }

  return (
    <section className="min-h-screen flex items-center pt-24 px-6">
      <motion.div
        className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Content */}
        <motion.div className="space-y-6" variants={itemVariants}>
          <motion.div variants={itemVariants} className="space-y-3">
            <p className="text-accent font-semibold text-sm uppercase mt-1 sm:mt-0 tracking-wider">
              Welcome to my portfolio
            </p>

            
            <motion.h1
              className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight bg-linear-to-r from-primary to-accent bg-clip-text text-transparent"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              Nazmul Hasan
            </motion.h1>

            <p className="text-md sm:text-lg text-muted-foreground">
              Full Stack Developer & Student Leader
            </p>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-sm text-foreground/80 leading-relaxed max-w-lg"
          >
            I’m passionate about building modern web experiences, solving complex problems, 
            and leading initiatives.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
            <Button asChild className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="#contact">
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>

            <Button
              variant="outline"
              className="gap-2 bg-background/40 backdrop-blur-sm border-border hover:bg-background/60"
              onClick={() => {
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
        <motion.div
          variants={itemVariants}
          className="relative w-full max-w-sm mx-auto"
        >
          {/* Background Square */}
          <div className=" absolute inset-0   bg-primary/10 rounded-xl  -rotate-6 scale-105  border border-primary/30 " />

          {/* Layer 2 Behind */}
          <div className="absolute inset-0 bg-accent/10 rounded-xl rotate-6 scale-110 border border-accent/30" />

          {/* Profile Image */}
          <motion.img whileHover={{ scale: 1.03 }}  transition={{ duration: 0.3 }}
            src="/nazmul.png"
            alt="Nazmul Hasan"
            className=" relative z-10    w-full h-full   object-cover   rounded-xl   border border-border   shadow-xl  "
          />
          </motion.div>
      </motion.div>
    </section>
  )
}
