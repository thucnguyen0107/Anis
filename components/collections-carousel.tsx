import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { getCollections } from 'lib/shopify';
import Link from 'next/link';
import { GridTileImage } from './grid/tile';

export async function CollectionsCarousel() {
  // Collections that start with `hidden-*` are hidden from the search page.

  const collections = await getCollections();
    const ignoreAllCollection = collections.filter(
      (collection) => !collection.title.toLowerCase().includes('all')
    );

  if (!ignoreAllCollection?.length) return null;


  // Purposefully duplicating products to make the carousel loop and not run out of products on wide screens.
  const carouselCollections = [...ignoreAllCollection, ...ignoreAllCollection, ...ignoreAllCollection];
  

  return (
    <div>
    <h2 className="mx-auto my-4 text-2xl font-bold font-serif text-center">Collections</h2>
    <div className="scrollbar-hide w-full overflow-x-auto pb-6 pt-1">
      <ul className="flex animate-carousel gap-4">
        {carouselCollections.map((collection, i) => (
          <li
            key={`${collection.handle}${i}`}
            className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px]"
          >
            <Link href={`/collections/${collection.handle}`} className="relative h-full w-full">
              <GridTileImage
                alt={collection.title}
                src={collection.image?.src}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
    <div className="flex justify-center mb-8">
        <Link
          className="flex transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          href={"/collections"}
        >
          <p className="my-4 mr-1 text-center text-base font-semibold">See more</p>
          <ArrowRightIcon className="my-4 size-5 text-black" />
        </Link>
    </div>
    </div>
  );
}
