import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { GridTileImage } from 'components/grid/tile';
import { getCollectionProductsAndCollectionInfo } from 'lib/shopify';
import type { Product } from 'lib/shopify/types';
import Link from 'next/link';

function ThreeItemGridItem({
  item,
  size,
  priority
}: {
  item: Product;
  size: 'full' | 'half';
  priority?: boolean;
}) {
  return (
    <div
      className={size === 'full' ? 'md:col-span-4 md:row-span-2' : 'md:col-span-2 md:row-span-1'}
    >
      <Link className="relative block aspect-square h-full w-full" href={`/product/${item.handle}`}>
        <GridTileImage
          src={item?.featuredImage?.url || ""}
          fill
          sizes={
            size === 'full' ? '(min-width: 768px) 66vw, 100vw' : '(min-width: 768px) 33vw, 100vw'
          }
          priority={priority}
          alt={item.title}
          // label={{
          //   position: size === 'full' ? 'center' : 'bottom',
          //   title: item.title as string,
          //   amount: item.priceRange.maxVariantPrice.amount,
          //   currencyCode: item.priceRange.maxVariantPrice.currencyCode
          // }}
        />
      </Link>
    </div>
  );
}

export async function ThreeItemGrid({ handle }: { handle: string }) {
  // Collections that start with `hidden-*` are hidden from the search page.
  const homepageItems = await getCollectionProductsAndCollectionInfo({
    collection: handle || 'dress-in-summer'
  });

  const { collection, products } = homepageItems;

  const data = {
    handle: collection?.handle,
    title: collection?.title,
    description: collection?.description,
    src: collection?.image?.src
  };

  if (!products[0] || !products[1] || !products[2] || !products[3]) return null;

  const [firstProduct, secondProduct, thirdProduct, mobileProduct] = products;

  return (
    <div className='py-16'>
      <p className="font-serif text-4xl lg:text-5xl font-light mb-4 text-balance text-center">{collection?.title || 'Hot Trending'}</p>
      <section className="mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 grid-cols-2 md:grid-cols-6 md:grid-rows-2">
        <ThreeItemGridItem size="full" item={firstProduct} priority={true} />
        <ThreeItemGridItem size="half" item={secondProduct} priority={true} />
        <ThreeItemGridItem size="half" item={thirdProduct} />
        <div className="md:hidden">
          <ThreeItemGridItem size="half" item={mobileProduct} />
        </div>
      </section>
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
