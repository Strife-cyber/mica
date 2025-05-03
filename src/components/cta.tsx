import { ArrowRight } from 'lucide-react';
import FadeIn from '@/components/animations/fade-in';
import { AnimatedButton } from '@/components/ui/animated-button';

export default function Cta() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container-fluid px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Ready to transform your business?
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-xl text-muted-foreground mb-8 max-w-[42rem]">
              Join thousands of businesses that use Mica to streamline operations and drive growth.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4">
              <AnimatedButton size="lg">
                <div className="flex items-center">
                  <a href="/register">Get Started</a>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </AnimatedButton>
              <AnimatedButton size="lg" variant="outline">
                Book a Demo
              </AnimatedButton>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
