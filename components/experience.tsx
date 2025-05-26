import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building } from "lucide-react"
import AnimatedCard from "./animated-card"
import AnimatedText from "./animated-text"

export default function Experience() {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "TRUSCHOLAR",
      location: "Amravati, India",
      period: "July 2024 – Present",
      type: "Full-time",
      achievements: [
        "Developed and optimized complex features for Web Wallet and Mobile App using React.js, React Native, and Node.js, improving performance by over 40%",
        "Led development of Learner Wallet, Refer & Earn, and Subscription History modules across platforms, resulting in a 30% increase in user engagement",
        "Created 40+ resume templates, refactored the Resume and Job Profile modules, and revamped the Resume Editor to enhance user experience",
        "Implemented In-App Update functionality in the mobile app for smoother version rollouts",
        "Refactored large components into modular structures using TypeScript, increasing maintainability and reducing bugs by 35%",
        "Collaborated with cross-functional teams to implement feedback quickly, contributing to smoother product releases and shorter development cycles",
      ],
      technologies: ["React.js", "React Native", "Node.js", "TypeScript", "Redux", "MongoDB"],
    },
    {
      title: "Full Stack Developer Intern",
      company: "TRUSCHOLAR",
      location: "Amravati, India",
      period: "September 2023 – June 2024",
      type: "Internship",
      achievements: [
        "Assisted in the development of mobile-responsive web apps and native apps, improving responsiveness by 30% and reducing page load time by 20%",
        "Contributed to features like Job Profile and AI Resume Builder, supporting scalable design and seamless UX across platforms",
        "Worked closely with senior developers on the MERN stack, gaining hands-on experience with backend API integration and real-time systems",
        "Participated in debugging and QA testing cycles, resolving over 40+ bugs and increasing overall development efficiency",
        "Improved cross-platform compatibility using Redux and integrated Razorpay for subscription handling, contributing to faster development and a cleaner UI",
      ],
      technologies: ["MERN Stack", "Redux", "Razorpay", "React Native", "MongoDB", "Express.js"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 md:px-6">
      <div className="container mx-auto">
        <AnimatedText text="Professional Experience" className="text-3xl md:text-4xl font-bold text-center mb-12" />

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <AnimatedCard key={index} delay={index * 0.2}>
              <Card className="transition-all duration-300 hover:shadow-lg hover:border-primary/50">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl md:text-2xl">{exp.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2 text-lg font-medium text-primary mt-1">
                        <Building className="h-4 w-4" />
                        {exp.company}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Badge variant="secondary" className="w-fit">
                        {exp.type}
                      </Badge>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="transition-all duration-300 hover:bg-primary/20 hover:text-primary"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  )
}
