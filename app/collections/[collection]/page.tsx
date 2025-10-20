import Grid from 'components/grid';
import { HeaderHero } from 'components/header-hero';
import ProductGridItems from 'components/layout/product-grid-items';
import { defaultSort, sorting } from 'lib/constants';
import { getCollection, getCollectionProducts } from 'lib/shopify';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateMetadata({
  params
}: {
  params: { collection: string };
}): Promise<Metadata> {
  const collection = await getCollection(params.collection);

  if (!collection) return notFound();

  return {
    title: collection.seo?.title || collection.title,
    description:
      collection.seo?.description || collection.description || `${collection.title} products`
  };
}

export default async function CollectionPage({
  params,
  searchParams
}: {
  params: { collection: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { sort, title, description, src } = searchParams as { [key: string]: string };
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;
  const products = await getCollectionProducts({ collection: params.collection, sortKey, reverse });

  return (
    <>
      <HeaderHero
        title={title || 'Collection'}
        description={description || 'Explore our exclusive collection of products'}
        src={src || ''}
      />
      <section className="mx-auto my-8 grid max-w-screen-2xl gap-4 px-4 pb-4">
        {products.length === 0 ? (
          <div className='text-center justify-center'>
          <p className="py-3 text-lg text-center">{`No products found in this collection`}</p>
          <div className="mt-12">
          <Link
            href="/"
            className="inline-block rounded-md border border-transparent bg-blue-600 py-3 px-8 text-base font-medium text-white hover:bg-blue-700"
          >
            Back to Home
          </Link>
        </div>
          </div>
        ) : (
          <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <ProductGridItems products={products} />
          </Grid>
        )}
      </section>
    </>
  );
}
