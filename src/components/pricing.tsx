import { Check } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import FadeIn from '@/components/animations/fade-in';
import StaggerChildren from '@/components/animations/stagger-children';
import StaggerItem from '@/components/animations/stagger-item';
import { AnimatedButton } from '@/components/ui/animated-button';
import CountUp from '@/components/animations/count-up';

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="container-fluid px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <FadeIn>
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm mb-4">
              <span className="font-medium">Pricing</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Simple, transparent pricing
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-muted-foreground max-w-[42rem]">
              Choose the plan that's right for your business needs and scale as you grow.
            </p>
          </FadeIn>
        </div>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StaggerItem>
            <Card className="hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle>Starter</CardTitle>
                <CardDescription>Perfect for small businesses just getting started</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">
                    $<CountUp end={29} duration={1.5} />
                  </span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    <span>Sales tracking</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    <span>Basic inventory management</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    <span>Simple financial reports</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    <span>1 user account</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <AnimatedButton className="w-full">Get Started</AnimatedButton>
              </CardFooter>
            </Card>
          </StaggerItem>

          <StaggerItem>
            <Card className="border-primary hover:shadow-md transition-all duration-300 hover:-translate-y-2 scale-105">
              <CardHeader>
                <div className="inline-flex items-center rounded-full bg-primary/10 text-primary px-3 py-1 text-sm mb-2">
                  Most Popular
                </div>
                <CardTitle>Professional</CardTitle>
                <CardDescription>Ideal for growing businesses with more needs</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">
                    $<CountUp end={79} duration={1.5} />
                  </span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    <span>Advanced sales tracking</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    <span>Complete inventory management</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    <span>Detailed financial insights</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    <span>Customizable dashboards</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    <span>5 user accounts</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <AnimatedButton className="w-full">Get Started</AnimatedButton>
              </CardFooter>
            </Card>
          </StaggerItem>

          <StaggerItem>
            <Card className="hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
                <CardDescription>
                  For established businesses with complex requirements
                </CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">
                    $<CountUp end={199} duration={1.5} />
                  </span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    <span>Everything in Professional</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    <span>Advanced analytics</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    <span>API access</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    <span>Dedicated support</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    <span>Unlimited user accounts</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <AnimatedButton className="w-full">Contact Sales</AnimatedButton>
              </CardFooter>
            </Card>
          </StaggerItem>
        </StaggerChildren>
      </div>
    </section>
  );
}
