import Grid from 'components/grid';
import { GridTileImage } from 'components/grid/tile';
import { ShopifyCollection } from 'lib/shopify/types';
import Link from 'next/link';

export default function CollectionGridItems({ collections }: { collections: ShopifyCollection[] }) {
  return (
    <>
      {collections.map((collection) => {
        if (!collection?.handle) return null;
        const data = {
          handle: collection.handle,
          title: collection.title,
          description: collection.description,
          src: collection?.image?.src
        }
        return (  
        <Grid.Item key={collection.handle} className="animate-fadeIn">
          <Link
            className="relative inline-block h-full w-full"
            href={{pathname: `/collections/${collection.handle}`, query: data}}
          >
            <GridTileImage
              alt={collection.title}
              label={{
                title: collection.title,
                amount: '0',
                currencyCode: 'VND'
              }}
              isCollection={true}
              src={collection?.image?.src}
              fill
              sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          </Link>
        </Grid.Item>
    )})}
    </>
  );
}
