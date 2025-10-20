
import { getMenu } from 'lib/shopify';
import { Suspense } from 'react';
import FooterMenu from './footer-menu';

const { COMPANY_NAME, SITE_NAME } = process.env;

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');
  const skeleton = 'w-full h-6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700';
  const menu = await getMenu('anis-footer');
  const copyrightName = COMPANY_NAME || SITE_NAME || '';

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-bebas">ANIS</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Elevating everyday style with timeless pieces crafted for the modern wardrobe.
            </p>
          </div>
          <Suspense
          fallback={
            <div className="flex h-[188px] w-[200px] flex-col gap-2">
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
            </div>
          }
        >

          {/* Shop */}
          {/* <div>
            <h4 className="font-medium mb-4 tracking-wider text-sm">SHOP</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/collections/new" className="hover:text-foreground transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/collections/dresses" className="hover:text-foreground transition-colors">
                  Dresses
                </Link>
              </li>
              <li>
                <Link href="/collections/tops" className="hover:text-foreground transition-colors">
                  Tops
                </Link>
              </li>
              <li>
                <Link href="/collections/bottoms" className="hover:text-foreground transition-colors">
                  Bottoms
                </Link>
              </li>
              <li>
                <Link href="/collections/accessories" className="hover:text-foreground transition-colors">
                  Accessories
                </Link>
              </li>
            </ul>
          </div> */}

          {/* About */}
          <div>
            <FooterMenu menu={menu} header={"About us"}/>
          </div>

          {/* Help */}
          {/* <div>
            <h4 className="font-medium mb-4 tracking-wider text-sm">HELP</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/shipping" className="hover:text-foreground transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="hover:text-foreground transition-colors">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div> */}
          </Suspense>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">&copy; {copyrightDate} {copyrightName}
            {copyrightName.length && !copyrightName.endsWith('.') ? '.' : ''}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {/* <Link
              href="https://instagram.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="https://facebook.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="https://twitter.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter className="h-5 w-5" />
            </Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
