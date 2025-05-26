"use client";

import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import AnimatedText from "./animated-text";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleDownloadCV = () => {
    toast({
      title: "Resume Downloaded",
      description: "Your resume has been downloaded successfully.",
    });
  };

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 md:px-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      </motion.div>

      <div
        className={`transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl" />
            <div className="relative bg-background/80 backdrop-blur-sm rounded-full p-4 border border-primary/20">
              <h3 className="text-sm md:text-base font-medium">
                Full Stack MERN Developer
              </h3>
            </div>
          </div>
        </motion.div>

        <AnimatedText
          text="Hi, I'm Adib Khan"
          className="text-4xl md:text-6xl font-bold mb-4"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="max-w-2xl mx-auto text-lg mb-8"
        >
          Proactive Full Stack Developer with 1+ years of experience building
          scalable web and mobile applications using the MERN stack
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            onClick={handleDownloadCV}
            className="relative overflow-hidden group"
          >
            <span className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative">Download CV</span>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="relative overflow-hidden group"
          >
            <a href="#contact">
              <span className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative">Contact Me</span>
            </a>
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        >
          <a
            href="#about"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowDown className="h-6 w-6" />
            <span className="sr-only">Scroll Down</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
