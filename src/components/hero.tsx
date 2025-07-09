import { ArrowRight, BarChart3, LineChart, Package, ShoppingCart } from 'lucide-react';
import Navbar from '@/components/navbar';
import FadeIn from '@/components/animations/fade-in';
import { AnimatedButton } from '@/components/ui/animated-button';

export default function Hero() {
  return (
    <div className="relative">
      <Navbar />
      <div className="container-fluid px-4 md:px-6 flex flex-col items-center text-center pt-16 pb-24 md:pt-24 md:pb-32">
        <FadeIn>
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm mb-6 animate-fade-in">
            <span className="font-medium">Introducing Mica</span>
            <span className="ml-1 text-muted-foreground">All-in-one business management</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 md:mb-6 max-w-3xl">
            Manage your business with{' '}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              clarity
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-xl text-muted-foreground mb-8 md:mb-10 max-w-[42rem]">
            The complete platform for small and medium businesses to track sales, manage inventory,
            and gain valuable financial insights.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
            <AnimatedButton size="lg" className="w-full">
              <div className="flex items-center">
                <a href="/register">Get Started</a>
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </AnimatedButton>
            {/*<AnimatedButton size="lg" variant="outline" className="w-full">
              Book a Demo
            </AnimatedButton>*/}
          </div>
        </FadeIn>

        <FadeIn delay={0.4} className="mt-16 md:mt-24 relative w-full max-w-5xl">
          <div className="absolute inset-0 bg-gradient-to-r from-background to-background/0 z-10 left-0 w-8 md:hidden"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-background to-background/0 z-10 right-0 w-8 md:hidden"></div>
          <div className="overflow-hidden rounded-lg border bg-background shadow-xl">
            <div className="grid grid-cols-12 gap-0.5 p-0.5">
              <div className="col-span-3 flex flex-col gap-0.5">
                <div className="rounded bg-muted p-4 h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <ShoppingCart className="h-5 w-5 text-primary" />
                    <h3 className="font-medium">Sales</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-3/4 bg-muted-foreground/20 rounded"></div>
                    <div className="h-2 w-1/2 bg-muted-foreground/20 rounded"></div>
                    <div className="h-2 w-5/6 bg-muted-foreground/20 rounded"></div>
                  </div>
                </div>
              </div>
              <div className="col-span-5 flex flex-col gap-0.5">
                <div className="rounded bg-muted p-4 h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <Package className="h-5 w-5 text-primary" />
                    <h3 className="font-medium">Inventory</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-3/4 bg-muted-foreground/20 rounded"></div>
                    <div className="h-2 w-1/2 bg-muted-foreground/20 rounded"></div>
                    <div className="h-2 w-5/6 bg-muted-foreground/20 rounded"></div>
                  </div>
                </div>
              </div>
              <div className="col-span-4 flex flex-col gap-0.5">
                <div className="rounded bg-muted p-4 h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <LineChart className="h-5 w-5 text-primary" />
                    <h3 className="font-medium">Analytics</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-3/4 bg-muted-foreground/20 rounded"></div>
                    <div className="h-2 w-1/2 bg-muted-foreground/20 rounded"></div>
                    <div className="h-2 w-5/6 bg-muted-foreground/20 rounded"></div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 flex flex-col gap-0.5">
                <div className="rounded bg-muted p-4 h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    <h3 className="font-medium">Financial Insights</h3>
                  </div>
                  <div className="h-24 w-full bg-muted-foreground/10 rounded flex items-center justify-center">
                    <div className="w-3/4 h-16 flex items-end justify-between px-4">
                      <div className="w-8 bg-primary/20 rounded-t h-6 animate-pulse"></div>
                      <div className="w-8 bg-primary/40 rounded-t h-10 animate-pulse [animation-delay:200ms]"></div>
                      <div className="w-8 bg-primary/60 rounded-t h-8 animate-pulse [animation-delay:400ms]"></div>
                      <div className="w-8 bg-primary/80 rounded-t h-12 animate-pulse [animation-delay:600ms]"></div>
                      <div className="w-8 bg-primary rounded-t h-16 animate-pulse [animation-delay:800ms]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
