import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import AnimatedCard from "./animated-card"
import AnimatedText from "./animated-text"

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with product management, cart functionality, user authentication, and payment processing.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Redux", "Stripe"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Real-time Chat Application",
      description:
        "A real-time messaging application with private and group chats, notifications, and user presence indicators.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Socket.io", "Express", "MongoDB", "JWT"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Task Management System",
      description:
        "A collaborative task management system with boards, lists, and cards, supporting drag-and-drop functionality.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Node.js", "Express", "MongoDB", "React DnD"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Blog Platform",
      description: "A content management system for blogs with rich text editing, categories, tags, and user comments.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Next.js", "Node.js", "Express", "MongoDB", "Draft.js"],
      liveLink: "#",
      githubLink: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 md:px-6 bg-muted/40">
      <div className="container mx-auto">
        <AnimatedText text="My Projects" className="text-3xl md:text-4xl font-bold text-center mb-12" />

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedCard key={index} delay={index * 0.1}>
              <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50">
                <div className="relative h-48 w-full overflow-hidden group">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="transition-all duration-300 hover:bg-primary/20 hover:text-primary"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-4">
                  <Button variant="outline" size="sm" asChild className="relative overflow-hidden group">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <span className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                      <Github className="h-4 w-4 relative" />
                      <span className="relative">Code</span>
                    </a>
                  </Button>
                  <Button size="sm" asChild className="relative overflow-hidden group">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <span className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                      <ExternalLink className="h-4 w-4 relative" />
                      <span className="relative">Live Demo</span>
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  )
}
