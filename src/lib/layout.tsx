import { Metadata } from '.';
import { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import { ThemeProvider } from '@/components/theme-provider';

interface RootLayoutProps {
  metadata: Metadata;
  children: ReactNode;
}

export default function RootLayout({ metadata, children }: RootLayoutProps) {
  return (
    <>
      <Helmet>
        <title>{metadata.title || 'Mica - Business Management Platform'}</title>
        <meta
          name={metadata.name || 'description'}
          content={
            metadata.content ||
            'The complete platform for small and medium businesses to track sales, manage inventory, and gain valuable financial insights.'
          }
        />
        <meta name="generator" content="v0.dev" />
      </Helmet>

      <div className="inter-font">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </div>
    </>
  );
}
