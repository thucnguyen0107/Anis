import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { getCollections } from 'lib/shopify';
import Image from "next/image";
import Link from "next/link";
import { Suspense } from 'react';

export async function FeaturedCollections() {
  const collections = await getCollections();
    const ignoreAllCollection = collections.filter(
      (collection) => !collection.title.toLowerCase().includes('all')
    );

  if (!ignoreAllCollection?.length) return null;

  const skeleton = 'w-full h-full animate-pulse rounded bg-neutral-200 dark:bg-neutral-700';

  // Purposefully duplicating products to make the carousel loop and not run out of products on wide screens.
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="font-serif text-4xl lg:text-5xl font-light mb-4 text-balance">Featured Collections</h2>
            <p className="text-muted-foreground text-lg">Curated selections for every occasion</p>
          </div>
          <Link
            href="/collections"
            className="hidden md:flex items-center gap-2 text-sm tracking-wider hover:gap-3 transition-all"
          >
            VIEW ALL
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {ignoreAllCollection.map((collection) => (
            <Link key={collection.title} href={`/collections/${collection.handle}`} className="group relative overflow-hidden bg-muted">
              <Suspense fallback={<div className={skeleton} />}>
              <div className="aspect-[3/4] relative overflow-hidden">
                <Image
                  src={collection?.image?.src || ""}
                  alt={collection.title}
                  fill
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              </Suspense>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-background translate-y-2 group-hover:translate-y-0 transition-transform">
                <h3 className="font-serif text-2xl mb-2 text-white">{collection.title}</h3>
                <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white">
                  {collection.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            href="/collections"
            className="inline-flex items-center gap-2 text-sm tracking-wider hover:gap-3 transition-all"
          >
            VIEW ALL COLLECTIONS
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
