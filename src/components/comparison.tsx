import { Check, X } from 'lucide-react';
import FadeIn from '@/components/animations/fade-in';

export default function Comparison() {
  return (
    <section id="comparison" className="py-16 md:py-24">
      <div className="container-fluid px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <FadeIn>
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm mb-4">
              <span className="font-medium">Comparison</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              How Mica compares to alternatives
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-muted-foreground max-w-[42rem]">
              See how Mica provides a more comprehensive solution compared to other platforms.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.3}>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4 font-medium">Features</th>
                  <th className="p-4 text-center font-medium">
                    <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent font-bold">
                      Mica
                    </span>
                  </th>
                  <th className="p-4 text-center font-medium">QuickBooks</th>
                  <th className="p-4 text-center font-medium">Zoho Inventory</th>
                  <th className="p-4 text-center font-medium">TradeGecko</th>
                  <th className="p-4 text-center font-medium">Xero</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-muted/30 transition-colors">
                  <td className="p-4 font-medium">Sales Tracking</td>
                  <td className="p-4 text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <Check className="h-5 w-5 text-muted-foreground mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <Check className="h-5 w-5 text-muted-foreground mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <Check className="h-5 w-5 text-muted-foreground mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </td>
                </tr>
                <tr className="border-b hover:bg-muted/30 transition-colors">
                  <td className="p-4 font-medium">Inventory Management</td>
                  <td className="p-4 text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <Check className="h-5 w-5 text-muted-foreground mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <Check className="h-5 w-5 text-muted-foreground mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </td>
                </tr>
                <tr className="border-b hover:bg-muted/30 transition-colors">
                  <td className="p-4 font-medium">Financial Insights</td>
                  <td className="p-4 text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <Check className="h-5 w-5 text-muted-foreground mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <Check className="h-5 w-5 text-muted-foreground mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <Check className="h-5 w-5 text-muted-foreground mx-auto" />
                  </td>
                </tr>
                <tr className="border-b hover:bg-muted/30 transition-colors">
                  <td className="p-4 font-medium">Real-time Analytics</td>
                  <td className="p-4 text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <Check className="h-5 w-5 text-muted-foreground mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </td>
                </tr>
                <tr className="border-b hover:bg-muted/30 transition-colors">
                  <td className="p-4 font-medium">User-Friendly Interface</td>
                  <td className="p-4 text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <Check className="h-5 w-5 text-muted-foreground mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <Check className="h-5 w-5 text-muted-foreground mx-auto" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
