import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import AnimatedSection from "./animated-section";
import AnimatedText from "./animated-text";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-6 bg-muted/40">
      <div className="container mx-auto">
        <AnimatedText
          text="About Me"
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        />

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <AnimatedSection delay={0.2}>
            <div className="flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
                <Image
                  src="/profile.jpeg"
                  alt="Profile"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <Card className="overflow-hidden">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-2xl font-semibold mb-4">
                  Full Stack Developer
                </h3>
                <p className="text-muted-foreground mb-4">
                  I&apos;m a proactive and results-driven Full Stack Developer with
                  1+ years of hands-on experience in building scalable web and
                  mobile applications using the MERN stack. I have a proven
                  track record in leading front-end and back-end development
                  with a focus on performance optimization and clean
                  architecture.
                </p>
                <p className="text-muted-foreground mb-4">
                  Currently working at TruScholar, I&apos;ve developed complex
                  features for Web Wallet and Mobile App using React.js, React
                  Native, and Node.js, improving performance by over 40%. I&apos;m
                  passionate about creating user-centric features and delivering
                  high-quality software that meets business goals.
                </p>
                <p className="text-muted-foreground">
                  I&apos;m also passionate about emerging technologies like
                  blockchain and AI integration in web ecosystems, always
                  looking to learn and implement cutting-edge solutions.
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
