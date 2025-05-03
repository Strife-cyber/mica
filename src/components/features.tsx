import { BarChart3, LineChart, Package, ShoppingCart, Zap } from 'lucide-react';
import StaggerChildren from '@/components/animations/stagger-children';
import StaggerItem from '@/components/animations/stagger-item';
import FadeIn from '@/components/animations/fade-in';

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-muted/50">
      <div className="container-fluid px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <FadeIn>
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm mb-4">
              <span className="font-medium">Features</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Everything you need to manage your business
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-muted-foreground max-w-[42rem]">
              Mica combines all essential business management tools in one intuitive platform,
              giving you complete control and visibility.
            </p>
          </FadeIn>
        </div>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StaggerItem>
            <div className="bg-background rounded-lg border p-6 transition-all hover:shadow-md hover:-translate-y-1 duration-300">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <ShoppingCart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sales Tracking</h3>
              <p className="text-muted-foreground">
                Record and track sales, revenue, profit margins, and customer information in
                real-time.
              </p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="bg-background rounded-lg border p-6 transition-all hover:shadow-md hover:-translate-y-1 duration-300">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Package className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Inventory Management</h3>
              <p className="text-muted-foreground">
                Manage inventory levels, track stock movements, and receive low stock notifications.
              </p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="bg-background rounded-lg border p-6 transition-all hover:shadow-md hover:-translate-y-1 duration-300">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <LineChart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Financial Insights</h3>
              <p className="text-muted-foreground">
                Monitor financial performance including revenue, expenses, and profit margins.
              </p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="bg-background rounded-lg border p-6 transition-all hover:shadow-md hover:-translate-y-1 duration-300">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Analytics & Reporting</h3>
              <p className="text-muted-foreground">
                Generate comprehensive reports and analytics to inform business decisions.
              </p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="bg-background rounded-lg border p-6 transition-all hover:shadow-md hover:-translate-y-1 duration-300">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">User-Friendly Interface</h3>
              <p className="text-muted-foreground">
                Intuitive and easy-to-use interface designed for business owners of all technical
                levels.
              </p>
            </div>
          </StaggerItem>
        </StaggerChildren>
      </div>
    </section>
  );
}
