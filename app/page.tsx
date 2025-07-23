"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, ExternalLink, Cpu, Wifi, Smartphone, Home, Car, Factory, Menu, X } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const projects = [ 
    {
      title: "ROOM-HUNT Website",
      description:
        "A responsive web platform that helps users easily find and connect with room owners by displaying rental details, locations, and reviews.",
      image: "/roomhunt.png?height=200&width=300",
technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "React", "Tailwind CSS"],

      category: "WEB devlpoment",
      icon: <Car className="w-6 h-6" />,
      github: "https://github.com/thesachingupta",
      demo: "roomhunt-bay.vercel.app",
    },
    {
title: "GoG Cafe Website",
description: "A modern and responsive website for GoG Cafe featuring an interactive menu, online reservations, and a clean, user-friendly design.",
      image: "/GoG.png?height=200&width=300",
   technologies: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Node.js", "Express.js"],
  category: "Web Development",
      icon: <Factory className="w-6 h-6" />,
      github: "https://github.com/thesachingupta",
      demo: "https://www.linkedin.com/in/sachin-gupta-611322264",
    },
    {
      title: "MY portfolio",
      description:
        "An IoT portfolio showcasing smart, real-time solutions using ESP8266, GPS, Firebase, Flutter, and web technologies for impactful hardware-to-cloud integration.",
      image: "/webport.png?height=200&width=300",
technologies: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Node.js", "Express.js", ],

      category: "WEB development",
      icon: <Cpu className="w-6 h-6" />,
      github: "https://github.com/thesachingupta",
      demo: "iot-portfolio.vercel.app",
    },
    {
      title: "Pollution To Production",
      description:
        "Developed Pollution to Production, an innovative system that captures vehicle exhaust soot and converts it into usable carbon ink while filtering air.",
      image: "/ptp.svg.jpg?height=200&width=300",
      technologies: ["ESP32", "Arduino IDE", "Sensor Integration", "Firebase", "Cloud Platforms", "Prototyping & Circuit Design"],
      category: "Smart IoT Prototype",
      icon: <Home className="w-6 h-6" />,
      github: "https://github.com/thesachingupta",
      demo: "https://www.linkedin.com/in/sachin-gupta-611322264",
    },

        
  ]

const skills = [
  {
    category: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS", "Bootstrap"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "Authentication", ],
  },
  {
    category: "Databases",
    items: ["MongoDB", "Postman", "Firebase", "MySQL"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "Vercel","VS Code", "Postman"],
  },
  // {
  //   category: "DevOps & Testing",
  //   items: ["Docker (Basics)", "CI/CD (GitHub Actions)", "Jest", "ESLint", "Prettier"],
  // },
  {
    category: "Soft Skills",
    items: ["Team Collaboration", "Problem Solving",  "Client Communication"],
  },
]

  const certifications = [
    { name: "Medical Device Hackathon (MEDHA) Participant", issuer: " BETIC, IIT Bombay", year: "2024" },
    { name: "Problem Solving, Aptitude, and Soft Skills Training", issuer: "Skill Development and Finishing School (SDFS)", year: "2024" },
    { name: "InnoTech Participation Certificate", issuer: "KIET Institute", year: "2023-24" },
    { name: "SCROLLS’24", issuer: "Akgec institute", year: "2023" },
  ]

  const testimonials = [
  {
  name: "Rajesh Kumar",
  // role: "CTO, TechCorp Industries",
  content:
    "Sachin built a high-performing web platform for our business. His attention to responsive design and clean code made a real impact.",
  rating: 5,
},
{
  name: "Priya Sharma",
  // role: "Product Manager, SmartWeb Solutions",
  content:
    "Sachin’s web development skills helped us launch a seamless and fast-loading website. He delivered exactly what we needed, on time.",
  rating: 5,
}

  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-primary hover:scale-105 transition-transform duration-200 cursor-pointer">
              Sachin Gupta
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="#home"
                className="text-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:-translate-y-1 relative group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="#about"
                className="text-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:-translate-y-1 relative group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="#projects"
                className="text-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:-translate-y-1 relative group"
              >
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="#skills"
                className="text-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:-translate-y-1 relative group"
              >
                Skills
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="#contact"
                className="text-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:-translate-y-1 relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="ml-4 hover:scale-110 hover:rotate-12 transition-all duration-300 hover:bg-primary/10"
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </div>

            {/* Mobile Navigation Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:scale-110 hover:rotate-90 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t animate-in slide-in-from-top-2 duration-300">
              <div className="flex flex-col space-y-4">
                <Link
                  href="#home"
                  className="text-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 hover:font-medium"
                >
                  Home
                </Link>
                <Link
                  href="#about"
                  className="text-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 hover:font-medium"
                >
                  About
                </Link>
                <Link
                  href="#projects"
                  className="text-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 hover:font-medium"
                >
                  Projects
                </Link>
                <Link
                  href="#skills"
                  className="text-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 hover:font-medium"
                >
                  Skills
                </Link>
                <Link
                  href="#contact"
                  className="text-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 hover:font-medium"
                >
                  Contact
                </Link>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                  className="justify-start hover:scale-105 hover:bg-primary/10 transition-all duration-300"
                >
                  <Sun className="h-4 w-4 mr-2 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-4 w-4 ml-2 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  Toggle theme
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-20">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center hover:scale-110 hover:rotate-6 transition-all duration-500 cursor-pointer hover:shadow-2xl hover:shadow-blue-500/25">
                <Cpu className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 hover:scale-105 transition-transform duration-300">
              Sachin Gupta -{" "}
              <span className="text-primary hover:text-blue-600 transition-colors duration-300">WEB Developer</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto hover:text-foreground transition-colors duration-300">
            Enthusiastic Web Developer with a knack for turning ideas into interactive websites.
             Experienced with frontend frameworks, React, and REST APIs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                asChild
                className="hover:scale-110 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-1"
              >
                <Link href="#projects">View My Projects</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="hover:scale-110 hover:shadow-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1 bg-transparent"
              >
                <Link href="#contact">Get In Touch</Link>
              </Button>
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="hover:scale-110 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <Link href="/SACHIN_RESUME.pdf" download>
                  Download Resume
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 hover:scale-105 transition-transform duration-300">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto hover:text-foreground transition-colors duration-300">

I'm Sachin Gupta, a Web Developer passionate about building modern, responsive, and user-centric web applications. With a strong foundation in frontend and backend technologies, I love turning ideas into fast, functional, and visually appealing digital experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:scale-105 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 hover:border-primary/50 group">
              <CardHeader>
                <Smartphone className="w-12 h-12 text-primary mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                <CardTitle className="group-hover:text-primary transition-colors duration-300">
                        Responsive Design
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
       Crafting seamless user experiences across all devices using modern responsive design principles and mobile-first development.                </p>
              </CardContent>
            </Card>

            <Card className="hover:scale-105 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 hover:border-primary/50 group">
              <CardHeader>
                <Wifi className="w-12 h-12 text-primary mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                <CardTitle className="group-hover:text-primary transition-colors duration-300">
     Full Stack Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    Building scalable and dynamic web apps using modern JavaScript frameworks like React, Next.js, Node.js, and REST APIs.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:scale-105 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 hover:border-primary/50 group">
              <CardHeader>
                <Cpu className="w-12 h-12 text-primary mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                <CardTitle className="group-hover:text-primary transition-colors duration-300">
                  Backend & Databases
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                Creating robust backend systems and managing data efficiently using tools like Express.js, MongoDB, and SQL databases.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 hover:scale-105 transition-transform duration-300">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground hover:text-foreground transition-colors duration-300">
              Explore my latest WEB-D projects and innovations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:scale-105 hover:-translate-y-3 hover:shadow-2xl transition-all duration-500 hover:border-primary/50 group cursor-pointer hover:rotate-1"
              >
                <div className="aspect-video bg-muted flex items-center justify-center overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      {project.icon}
                    </div>
                    <Badge
                      variant="secondary"
                      className="group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 hover:scale-105"
                    >
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="group-hover:text-foreground transition-colors duration-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                      className="hover:scale-110 hover:shadow-md hover:bg-primary hover:text-primary-foreground transition-all duration-300 bg-transparent"
                    >
                      <Link href={project.github}>
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                    <Button
                      size="sm"
                      asChild
                      className="hover:scale-110 hover:shadow-md hover:shadow-primary/25 transition-all duration-300"
                    >
                      <Link href={project.demo}>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 hover:scale-105 transition-transform duration-300">
              Technical Skills
            </h2>
            <p className="text-xl text-muted-foreground hover:text-foreground transition-colors duration-300">
              Technologies and tools I work with
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <Card
                key={index}
                className="hover:scale-105 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 hover:border-primary/50 group"
              >
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                    {skillGroup.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300 cursor-pointer"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 hover:scale-105 transition-transform duration-300">
              Certifications
            </h2>
            <p className="text-xl text-muted-foreground hover:text-foreground transition-colors duration-300">
              Professional certifications and achievements
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="hover:scale-105 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 hover:border-primary/50 group"
              >
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                    {cert.name}
                  </CardTitle>
                  <CardDescription className="group-hover:text-foreground transition-colors duration-300">
                    {cert.issuer} • {cert.year}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 hover:scale-105 transition-transform duration-300">
              Client Testimonials
            </h2>
            <p className="text-xl text-muted-foreground hover:text-foreground transition-colors duration-300">
              What clients say about my work
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="hover:scale-105 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 hover:border-primary/50 group"
              >
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-500">
                        ★
                      </span>
                    ))}
                  </div>
                  <CardDescription className="text-base italic group-hover:text-foreground transition-colors duration-300">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="group-hover:text-primary transition-colors duration-300">
                    <p className="font-semibold">{testimonial.name}</p>
                    {/* <p className="text-sm text-muted-foreground">{testimonial.role}</p> */}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 hover:scale-105 transition-transform duration-300">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground hover:text-foreground transition-colors duration-300">
              {"Let's discuss your next WEB project or collaboration opportunity"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 hover:text-primary transition-colors duration-300">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300 group">
                  <Mail className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <span className="group-hover:text-primary transition-colors duration-300">
                    thesachin4545@gmail.com
                  </span>
                </div>
                <div className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300 group">
                  <Linkedin className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <Link href="#" className="hover:text-primary transition-colors duration-300">
                  https://www.linkedin.com/in/sachin-gupta-611322264
                  </Link>
                </div>
                <div className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300 group">
                  <Github className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <Link href="#" className="hover:text-primary transition-colors duration-300">
                    https://github.com/thesachingupta
                  </Link>
                </div>
              </div>
            </div>

            <Card className="hover:scale-105 hover:shadow-xl transition-all duration-300 hover:border-primary/50">
              <CardHeader>
                <CardTitle className="hover:text-primary transition-colors duration-300">Send a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    placeholder="First Name"
                    className="hover:border-primary focus:scale-105 transition-all duration-300"
                  />
                  <Input
                    placeholder="Last Name"
                    className="hover:border-primary focus:scale-105 transition-all duration-300"
                  />
                </div>
                <Input
                  placeholder="Email"
                  type="email"
                  className="hover:border-primary focus:scale-105 transition-all duration-300"
                />
                <Input
                  placeholder="Subject"
                  className="hover:border-primary focus:scale-105 transition-all duration-300"
                />
                <Textarea
                  placeholder="Your message..."
                  className="min-h-[120px] hover:border-primary focus:scale-105 transition-all duration-300"
                />
                <Button className="w-full hover:scale-105 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t bg-muted/50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground hover:text-foreground transition-colors duration-300">
            © 2024 Sachin Gupta - WEB Developer Portfolio. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}
