import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Quote } from 'lucide-react';
import FadeIn from '@/components/animations/fade-in';
import StaggerChildren from '@/components/animations/stagger-children';
import StaggerItem from '@/components/animations/stagger-item';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container-fluid px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <FadeIn>
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm mb-4">
              <span className="font-medium">Testimonials</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Trusted by businesses everywhere
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-muted-foreground max-w-[42rem]">
              See what our customers have to say about how Mica has transformed their business
              operations.
            </p>
          </FadeIn>
        </div>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <StaggerItem>
            <Card className="hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-0">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Avatar" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Jane Doe</p>
                    <p className="text-sm text-muted-foreground">Retail Store Owner</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <Quote className="h-4 w-4 text-muted-foreground mb-2" />
                <p className="text-muted-foreground">
                  "Mica has completely transformed how I manage my retail store. The inventory
                  management and sales tracking features have saved me countless hours and helped me
                  make better purchasing decisions."
                </p>
              </CardContent>
            </Card>
          </StaggerItem>

          <StaggerItem>
            <Card className="hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-0">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Avatar" />
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">John Smith</p>
                    <p className="text-sm text-muted-foreground">Restaurant Owner</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <Quote className="h-4 w-4 text-muted-foreground mb-2" />
                <p className="text-muted-foreground">
                  "The financial insights provided by Mica have been invaluable for my restaurant. I
                  can now easily track our most profitable menu items and optimize our inventory
                  accordingly."
                </p>
              </CardContent>
            </Card>
          </StaggerItem>

          <StaggerItem>
            <Card className="hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-0">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Avatar" />
                    <AvatarFallback>SJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Sarah Johnson</p>
                    <p className="text-sm text-muted-foreground">E-commerce Business</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <Quote className="h-4 w-4 text-muted-foreground mb-2" />
                <p className="text-muted-foreground">
                  "As an e-commerce business owner, keeping track of inventory across multiple
                  platforms was a nightmare until I found Mica. Now everything is centralized and I
                  get alerts before we run out of stock."
                </p>
              </CardContent>
            </Card>
          </StaggerItem>
        </StaggerChildren>
      </div>
    </section>
  );
}
