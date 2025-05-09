"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { projects } from "@/constant/data"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, ExternalLink, Github, Code, Lightbulb, CheckCircle, Layers } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import ImageGalleryModal from "@/components/ImageGalleryModal"

type Project = {
  id: number
  title: string
  description: string
  tags: string[]
  image: string
  liveLink: string
  githubLink: string
  screenshots: string[]
  overview: string
  features: string[]
  techStack: {
    frontend: string[]
    backend?: string[]
    devOps?: string[]
  }
  challenge: string,
  solution: string,
  slug: string
  category?: string
}

export default function ProjectDetail() {
  const params = useParams()
  const router = useRouter()
  const [project, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)
  const [activeImage, setActiveImage] = useState(0)
  const [showFullImage, setShowFullImage] = useState(false)

  useEffect(() => {
    if (params.slug) {
      const foundProject = projects.find((p) => p.slug === params.slug)
      if (foundProject) {
        setProject(foundProject)
      }
      setLoading(false)
    }
  }, [params.slug])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
        <p className="text-muted-foreground mb-8">The project you&apos;re looking for doesn&apos;t exist or has been removed.</p>
        <Button asChild>
          <Link href="/#projects">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container">
        <Button variant="ghost" className="mb-8" onClick={() => router.push("/#projects")}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
        </Button>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="relative aspect-video overflow-hidden rounded-lg border border-border mb-4">
                <Image
                  src={project.screenshots[activeImage] || "/placeholder.svg"}
                  alt={`${project.title} screenshot`}
                  width={1200}
                  height={675}
                  className="object-cover w-full cursor-pointer"
                  onClick={() => setShowFullImage(true)}
                />
              </div>
              <ImageGalleryModal
                images={project.screenshots}
                isOpen={showFullImage}
                onClose={() => setShowFullImage(false)}
                initialImageIndex={activeImage}
              />

              <div className="flex gap-4 overflow-x-auto pb-2">
                {project.screenshots.map((screenshot, index) => (
                  <div
                    key={index}
                    className={`relative cursor-pointer rounded-md overflow-hidden border-2 ${activeImage === index ? "border-primary" : "border-transparent"
                      }`}
                    onClick={() => setActiveImage(index)}
                  >
                    <Image
                      src={screenshot || "/placeholder.svg"}
                      alt={`Thumbnail ${index + 1}`}
                      width={200}
                      height={120}
                      className="w-32 h-20 object-cover"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
              <p className="text-muted-foreground">{project.description}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <Button asChild>
                <Link href={project.liveLink} target="_blank">
                  <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href={project.githubLink} target="_blank">
                  <Github className="mr-2 h-4 w-4" /> View Source Code
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="tech">Tech Stack</TabsTrigger>
              <TabsTrigger value="process">Process</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="prose dark:prose-invert max-w-none">
                <h2 className="text-2xl font-bold flex items-center mb-2">
                  <Code className="mr-2 h-5 w-5 text-primary" /> Project Overview
                </h2>
                <p>{project.overview}</p>
              </div>
            </TabsContent>

            <TabsContent value="features" className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold flex items-center mb-6">
                  <CheckCircle className="mr-2 h-5 w-5 text-primary" /> Key Features
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start p-4 rounded-lg border border-border bg-card">
                      <div className="mr-4 mt-1 text-primary">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <div>{feature}</div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="tech" className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold flex items-center mb-6">
                  <Layers className="mr-2 h-5 w-5 text-primary" /> Technology Stack
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-medium">Frontend</h3>
                    <ul className="space-y-2">
                      {project.techStack.frontend.map((tech, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-medium">Backend</h3>
                    <ul className="space-y-2">
                      {project.techStack.backend?.map((tech, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-medium">DevOps</h3>
                    <ul className="space-y-2">
                      {project.techStack.devOps?.map((tech, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="process" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold flex items-center">
                    <Lightbulb className="mr-2 h-5 w-5 text-primary" /> The Challenge
                  </h2>
                  <p>{project.challenge}</p>
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary" /> The Solution
                  </h2>
                  <p>{project.solution}</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold mb-6">More Projects</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {projects
              .filter((p) => p.id !== project.id)
              .slice(0, 3)
              .map((relatedProject) => (
                <Link
                  key={relatedProject.id}
                  href={`/projects/${relatedProject.slug}`}
                  className="block w-full md:w-64 p-4 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors"
                >
                  <Image
                    src={relatedProject.image || "/placeholder.svg"}
                    alt={relatedProject.title}
                    width={300}
                    height={200}
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <h3 className="font-medium">{relatedProject.title}</h3>
                </Link>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
