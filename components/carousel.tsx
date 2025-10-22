import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { getCollectionProductsAndCollectionInfo } from 'lib/shopify';
import Link from 'next/link';
import { GridTileImage } from './grid/tile';

export async function Carousel({ handle }: { handle: string }) {
  // Collections that start with `hidden-*` are hidden from the search page.
  const res = await getCollectionProductsAndCollectionInfo({
    collection: handle || 'new-arrival'
  });

  const { collection, products } = res;

  const data = {
    handle: collection?.handle,
    title: collection?.title,
    description: collection?.description,
    src: collection?.image?.src
  };

  if (!products?.length) return null;

  // Purposefully duplicating products to make the carousel loop and not run out of products on wide screens.
  const carouselProducts = [...products, ...products, ...products];

  return (
    <div className="scrollbar-hide w-full overflow-x-auto pb-6 pt-1 py-16">
      <h2 className="font-serif text-4xl lg:text-5xl font-light mb-4 text-balance text-center">{collection?.title}</h2>
      <ul className="flex animate-carousel gap-4 pb-4">
        {carouselProducts.map((product, i) => (
          <li
            key={`${product.handle}${i}`}
            className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px]"
          >
            <Link href={`/product/${product.handle}`} className="relative h-full w-full">
              <GridTileImage
                alt={product.title}
                // label={{
                //   title: product.title,
                //   amount: product.priceRange.maxVariantPrice.amount,
                //   currencyCode: product.priceRange.maxVariantPrice.currencyCode
                // }}
                src={product.featuredImage?.url}
                fill
                sizes="(min-width: 1024px) 55vw, (min-width: 768px) 53vw, 50vw"
              />
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex justify-center mb-8">
        <Link
          className="flex transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          href={{ pathname: `/collections/${handle}`, query: data }}
        >
          <p className="my-4 mr-1 text-center text-base font-semibold">See more</p>
          <ArrowRightIcon className="my-4 size-5 text-black" />
        </Link>
      </div>
    </div>
  );
}
