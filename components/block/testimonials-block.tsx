import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Testimonial {
  name: string
  position: string
  content: string
  avatarSrc?: string
}

interface TestimonialsBlockProps {
  title: string
  testimonials: Testimonial[]
  className?: string
}

export default function TestimonialsBlock({ title, testimonials, className }: TestimonialsBlockProps) {
  return (
    <section className={cn("container mx-auto px-4 py-16", className)}>
      <h2 className="text-3xl font-bold mb-12">{title}</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={testimonial.avatarSrc} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-sm font-medium">{testimonial.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{testimonial.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

