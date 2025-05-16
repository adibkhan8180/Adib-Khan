import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import AnimatedSection from "./animated-section"
import AnimatedText from "./animated-text"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-6 bg-muted/40">
      <div className="container mx-auto">
        <AnimatedText text="About Me" className="text-3xl md:text-4xl font-bold text-center mb-12" />

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <AnimatedSection delay={0.2}>
            <div className="flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
                <Image src="/placeholder.svg?height=320&width=320" alt="Profile" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <Card className="overflow-hidden">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-2xl font-semibold mb-4">Full Stack Developer</h3>
                <p className="text-muted-foreground mb-4">
                  I'm a passionate Full Stack Developer with expertise in the MERN stack (MongoDB, Express.js, React.js,
                  Node.js). With 5+ years of experience, I specialize in building scalable web applications and RESTful
                  APIs.
                </p>
                <p className="text-muted-foreground mb-4">
                  My journey in web development started when I built my first website in college. Since then, I've
                  worked on numerous projects ranging from e-commerce platforms to real-time applications.
                </p>
                <p className="text-muted-foreground">
                  When I'm not coding, you can find me hiking, reading tech blogs, or contributing to open-source
                  projects.
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
