import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

export default function ContactSection() {
  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-medium">
            CONTACT
          </h1>
          <p>Get in Touch With Me</p>
        </div>
        <div className="flex justify-center items-center">
          <div className="col-span-6 flex flex-col gap-4 w-[500px]">
            <div className="flex gap-2">
              <div className="flex-1">
                <Label className="text-sm mb-2">Name</Label>
                <Input type="text" placeholder="Your full name" />
              </div>
              <div className="flex-1">
                <Label className="text-sm mb-2">Email</Label>
                <Input type="email" placeholder="your.email@example.com" />
              </div>
            </div>
            <div>
              <Label className="text-sm mb-2">Subject</Label>
              <Input type="text" placeholder="What's this about?" />
            </div>
            <div>
              <Label className="text-sm mb-2">Message</Label>
              <Textarea placeholder="Tell me about your project or idea..." />
            </div>
            <div>
              <Button>Send Message</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

