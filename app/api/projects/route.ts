// app/api/projects/route.ts
import { projects } from "@/lib/data/projects";

export async function GET() {
  return Response.json(projects);
}
