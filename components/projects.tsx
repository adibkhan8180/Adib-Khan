import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import AnimatedCard from "./animated-card";
import AnimatedText from "./animated-text";

export default function Projects() {
  const projects = [
    {
      title: "PrepSync - AI-Powered Mock Interview Platform",
      description:
        "A full-stack interview simulation platform that uses AI to generate context-aware questions, simulates real-time conversations, and provides instant feedback on technical accuracy and communication tone.",
      features: [
        "Architected a full-stack interview simulation platform using Next.js and Tailwind CSS, optimizing the frontend to handle real-time AI streaming without UI blocking.",
        "Engineered a Retrieval-Augmented Generation (RAG) pipeline using LangChain and vector embeddings to parse unstructured job descriptions, generating context-aware questions tailored to specific roles.",
        "Orchestrated complex LLM workflows via Node.js to function as a dynamic interviewer, maintaining conversation history in MongoDB to adjust question difficulty based on candidate performance.",
        "Integrated Speech-to-Text and Text-to-Speech APIs to facilitate bidirectional voice interaction, processing audio streams asynchronously to simulate a natural, low-latency conversational flow.",
        "Developed a comparative analysis engine that evaluates user responses against AI-generated optimal answers, providing instant, actionable feedback on technical accuracy and communication tone.",
      ],
      image: "/ai-interviewer.png",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "RAG",
        "LangChain",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Vercel",
        "OpenAI API",
        "Speech-to-Text API",
        "Text-to-Speech API",
      ],
      liveLink: "https://ai-interview-model-frontend.vercel.app/",
      githubLink: "https://github.com/adibkhan8180/ai-interview-model",
    },
    {
      title: "INVOICER - Invoice Management Web Application",
      description:
        "A full-stack invoice management platform using Next.js (App Router) and React, allowing users to create, edit, delete, and download invoices in custom-coded PDF format.",
      features: [
        "Developed a full-stack invoice management platform using Next.js (App Router) and React, allowing users to create, edit, delete, and download invoices in custom-coded PDF format.",
        "Implemented secure user authentication with Auth.js and Magic Link login via Mailtrap, improving user onboarding and account security.",
        "Integrated Mailtrap Email API to send automated, template-based emails (Send Invoice, Reminder, Edit Notification) using HTML email templates.",
        "Built a responsive and animated dashboard using Tailwind CSS, Shadcn UI, and Chart.js, featuring a paid invoice graph and invoice action table.",
        "Managed scalable database operations with Neon Postgres and Prisma ORM, and ensured form integrity using Zod and Conform for server-side validation; deployed to Vercel for high-performance hosting.",
      ],
      image: "/invoicer.png",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Shadcn UI",
        "Auth.js",
        "Chart.js",
        "Neon Postgres",
        "Prisma",
        "Zod",
        "Postgres",
        "conform",
        "Mailtrap",
        "Vercel",
      ],
      liveLink: "https://invoicer-eight.vercel.app/",
      githubLink: "https://github.com/adibkhan8180/Invoicer",
    },
    {
      title: "QUICK CONNECT – Real-time Chat Application",
      description:
        "A mobile chat application using React Native and the MERN stack, enabling seamless real-time messaging with support for authentication and secure login features.",
      features: [
        "Built a mobile chat application using React Native and the MERN stack, enabling seamless real-time messaging with support for authentication, secure login, and signup features.",
        "Integrated Socket.IO for bi-directional, real-time communication between users, enabling instant delivery and receipt of chat messages.",
        "Developed a scalable backend using Node.js, Express, and MongoDB, implementing JWT-based authentication for session security and user data protection.",
        "Utilized React Navigation, Async Storage, and Axios on the client side to handle session persistence, API communication, and smooth screen transitions.",
        "Structured the application with modular code, using dependencies like Mongoose, JWT Decode, and Socket.IO Client to ensure maintainability and performance across platforms.",
      ],
      image: "",
      technologies: [
        "React Native",
        "Socket.io",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
        "Axios",
      ],
      liveLink:
        "https://github.com/adibkhan8180/QuickConnect/releases/download/Release/app-release.apk",
      githubLink: "https://github.com/adibkhan8180/QuickConnect",
    },
    {
      title: "ALAN AI - Voice-Controlled News Application",
      description:
        "An innovative voice-controlled news application using Alan AI SDK, allowing hands-free interaction and real-time updates with dynamic content fetching.",
      features: [
        "Engineered an innovative voice-controlled news application using Alan AI SDK, allowing hands-free interaction and real-time updates.",
        "Leveraged React.js to design a clean, responsive interface that adapts across devices and screen sizes.",
        "Integrated public news APIs for fetching dynamic articles from trusted sources across categories.",
        "Implemented state management and voice command mapping to ensure natural UX and seamless navigation.",
        "Resulted in a 25% increase in user engagement and a 20% rise in app ratings, enhancing accessibility and user satisfaction.",
      ],
      image: "/alan-ai.png",
      technologies: ["React.js", "Alan AI SDK", "Material UI"],
      liveLink: "https://alan-ai-news-react-app.netlify.app/",
      githubLink: "https://github.com/adibkhan8180/Alan-AI-News",
    },
    {
      title: "Netflix Clone",
      description:
        "A Netflix clone built with React.js, Firebase, Tailwind CSS, Node.js, Express.js, and MongoDB.",
      features: [
        "Developed a dynamic Netflix-like streaming platform using React.js, delivering an intuitive and responsive user experience.",
        "Built backend services with Node.js and Express.js, enabling seamless data handling and API performance.",
        "Integrated MongoDB for scalable data storage and Firebase Authentication for secure user login and session management.",
        "Applied modular code structure and reusable components, improving app maintainability and scalability.",
        "Achieved a 30% performance improvement and 20% boost in user engagement, backed by smooth navigation and fast load times.",
      ],
      image: "/netflix.png",
      technologies: [
        "React.js",
        "Firebase",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      liveLink: "https://github.com/adibkhan8180/Netflix-Clone",
      githubLink: "https://github.com/adibkhan8180/Netflix-Clone",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 md:px-6 bg-muted/40">
      <div className="container mx-auto">
        <AnimatedText
          text="My Projects"
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedCard key={index} delay={index * 0.1}>
              <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50">
                <div className="relative h-48 w-full overflow-hidden group">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-4">
                    {project.features && (
                      <div>
                        <h4 className="font-semibold mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {project.features.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-start gap-2 text-sm"
                            >
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="text-muted-foreground">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div>
                      <h4 className="font-semibold mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="text-xs transition-all duration-300 hover:bg-primary/20 hover:text-primary"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="relative overflow-hidden group"
                  >
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
                  <Button
                    size="sm"
                    asChild
                    className="relative overflow-hidden group"
                  >
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
  );
}
