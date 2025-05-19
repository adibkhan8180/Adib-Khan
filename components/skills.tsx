import { Card, CardContent } from "@/components/ui/card";
import { Database, Server, Code, Globe, Braces, Layers } from "lucide-react";
import AnimatedCard from "./animated-card";
import AnimatedText from "./animated-text";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code className="h-8 w-8 text-primary" />,
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "React.js",
        "Next.js",
        "React Native",
        "Expo",
        "Tailwind CSS",
        "Bootstrap",
        "Material UI",
        "SASS",
        "Shadcn UI",
        "Redux",
        "MERN Stack",
        "CLI",
      ],
    },
    {
      title: "Backend",
      icon: <Server className="h-8 w-8 text-primary" />,
      skills: [
        "Node.js",
        "Express.js",
        "REST API",
        "JWT",
        "Authentication",
        "Authorization",
        "Socket.io",
        "Next Auth",
      ],
    },
    {
      title: "Database",
      icon: <Database className="h-8 w-8 text-primary" />,
      skills: [
        "MongoDB",
        "Mongoose",
        "SQL",
        "MySQL",
        "Redis",
        "Aggregation",
        "Firebase",
        "PostgreSQL",
        "Prisma",
      ],
    },
    {
      title: "DevOps",
      icon: <Layers className="h-8 w-8 text-primary" />,
      skills: [
        "Git",
        "GitHub",
        "GitLab",
        "CI/CD",
        "Vercel",
        "Netlify",
        "Razorpay",
        "Ngrok",
        "AWS",
        "S3",
        "Amplify",
        "Cognito",
      ],
    },
    {
      title: "Tools",
      icon: <Braces className="h-8 w-8 text-primary" />,
      skills: ["VS Code", "Postman", "npm", "Figma"],
    },
    {
      title: "Other",
      icon: <Globe className="h-8 w-8 text-primary" />,
      skills: [
        "Responsive Design",
        "SEO",
        "Performance Optimization",
        "Accessibility",
        "UI/UX Principles",
        "C++",
        "Java",
        "Time Management",
        "Project Planning",
        "Team Collaboration",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 md:px-6">
      <div className="container mx-auto">
        <AnimatedText
          text="My Skills"
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <AnimatedCard key={index} delay={index * 0.1} className="h-full">
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    {category.icon}
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm transition-all duration-300 hover:bg-primary/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
