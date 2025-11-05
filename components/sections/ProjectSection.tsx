"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Project } from "@/types/project";
import Image from "next/image"
import { useEffect, useState } from "react";
import { Badge } from "../ui/badge";

export default function ProjectSection() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-medium mb-8">
          PROJECT
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <Card key={project.id} className="flex-1 hover:shadow-lg transition">
              <CardHeader>
                <div className="relative w-full h-48">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover rounded-lg"
                    loading="lazy"
                  />
                </div>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="line-clamp-3 text-sm text-gray-600">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <Badge key={index} variant="default">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm font-medium"
                >
                  Lihat Project →
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

