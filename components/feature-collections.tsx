import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { getCollections } from 'lib/shopify';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

export async function FeaturedCollections() {
  const collections = await getCollections();
  const ignoreAllCollection = collections.filter(
    (collection) => !collection.title.toLowerCase().includes('all')
  );

  let collectionToShow = [];
  let mobileCollectionToShow: any[] = [];
  if (ignoreAllCollection?.length >= 3) {
    collectionToShow = ignoreAllCollection.slice(0, 3);
    mobileCollectionToShow = ignoreAllCollection.slice(0, 4);
  } else {
    collectionToShow = ignoreAllCollection;
  }
  if (!collectionToShow.length) return null;

  const skeleton = 'w-full h-full animate-pulse rounded bg-neutral-200 dark:bg-neutral-700';

  // Purposefully duplicating products to make the carousel loop and not run out of products on wide screens.
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* <div className="hidden md:flex items-end justify-between mb-12">
          <div>
            <h2 className="font-sans text-base lg:text-2xl font-normal mb-4 text-balance">New Collections</h2>
            <p className="text-muted-foreground text-sm">Curated selections for every occasion</p>
          </div>
          <Link
            href="/collections"
            className="hidden md:flex items-center gap-2 text-base font-semibold tracking-wider hover:gap-3 transition-all"
          >
            VIEW ALL
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div> */}

        <h2 className="mb-4 text-balance font-sans text-2xl font-normal lg:text-2xl text-center">
          New Collections
        </h2>

        <div className="hidden grid-cols-2 gap-6 md:grid md:grid-cols-3 lg:gap-8">
          {collectionToShow.map((collection) => (
            <>
            <Link
              key={collection.title}
              href={`/collections/${collection.handle}`}
              className="bg-muted group relative overflow-hidden"
            >
              <Suspense fallback={<div className={skeleton} />}>
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={collection?.image?.src || ''}
                    alt={collection.title}
                    fill
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="from-foreground/80 via-foreground/20 absolute inset-0 bg-gradient-to-t to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              </Suspense>
              <div className="text-background translate-y-2 p-6 transition-transform group-hover:translate-y-0 text-center">
                <h3 className="mb-2 font-sans text-xl text-black">{collection.title}</h3>
                <p className="text-sm text-black opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {collection.description}
                </p>
              </div>
            </Link>
            </>
          ))}
        </div>

        {mobileCollectionToShow?.length ? (
          <div className="grid grid-cols-2 gap-6 md:hidden lg:gap-8">
            {mobileCollectionToShow.map((collection) => (
              <Link
                key={collection.title}
                href={`/collections/${collection.handle}`}
                className="bg-muted group relative overflow-hidden"
              >
                <Suspense fallback={<div className={skeleton} />}>
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={collection?.image?.src || ''}
                      alt={collection.title}
                      fill
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="from-foreground/80 via-foreground/20 absolute inset-0 bg-gradient-to-t to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                </Suspense>
                <div className="text-background translate-y-2 transition-transform group-hover:translate-y-0">
                  <h3 className="mb-2 font-sans lg:text-2xl text-black text-center">{collection.title}</h3>
                  <p className="text-sm text-black opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    {collection.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : null}

        <div className="mb-8 flex justify-center">
          <Link
            className="flex transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            href="/collections"
          >
            <p className="my-4 mr-1 text-center text-base font-normal">See more</p>
            <ArrowRightIcon className="my-4 size-5 text-black" />
          </Link>
        </div>
      </div>
    </section>
  );
}
