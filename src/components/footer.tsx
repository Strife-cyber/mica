import { Link } from 'react-router-dom';
import FadeIn from '@/components/animations/fade-in';

export default function Footer() {
  return (
    <footer className="border-t py-12 md:py-16">
      <div className="container-fluid px-4 md:px-6">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link to="/" className="flex items-center gap-2">
                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Mica
                </span>
              </Link>
              <p className="text-sm text-muted-foreground">
                The complete business management platform for small and medium businesses.
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="#features"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:translate-x-1 inline-block"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    to="#pricing"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:translate-x-1 inline-block"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:translate-x-1 inline-block"
                  >
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:translate-x-1 inline-block"
                  >
                    Changelog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:translate-x-1 inline-block"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:translate-x-1 inline-block"
                  >
                    Guides
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:translate-x-1 inline-block"
                  >
                    Support
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:translate-x-1 inline-block"
                  >
                    API
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:translate-x-1 inline-block"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:translate-x-1 inline-block"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:translate-x-1 inline-block"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:translate-x-1 inline-block"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Mica. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link
                to="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms
              </Link>
              <Link
                to="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy
              </Link>
              <Link
                to="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
