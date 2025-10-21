import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "./ui/badge"
import Image from "next/image"

export default function ProjectSection() {
  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-medium mb-8">
          PROJECT
        </h1>
        <div className="flex gap-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <Card key={i}>
              <CardHeader>
                <Image
                  src="/project/project-portfolio.png"
                  width={1000}
                  height={1000}
                  alt="Picture of the author"
                />
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <h1 className="font-medium">E-Commerce Platform</h1>
                <p>
                  A full-stack e-commerce solution built with React, Node.js, and
                  MongoDB. Features include user authentication, payment processing,
                  and admin dashboard.
                </p>
                <div className="flex gap-2">
                  <Badge variant="default">React</Badge>
                  <Badge variant="default">Node.js</Badge>
                  <Badge variant="default">Stripe</Badge>
                  <Badge variant="default">MongoDB</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

