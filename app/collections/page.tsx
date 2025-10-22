import Grid from 'components/grid';
import CollectionGridItems from 'components/layout/collection-grid-items';
import { getCollections } from 'lib/shopify';

const CollectionPage = async () => {
  const collections = await getCollections();
  const ignoreAllCollection = collections.filter(
    (collection) => !collection.title.toLowerCase().includes('all')
  );

  return (
    <main className="mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4">
      <h2 className="mx-auto my-4 text-center text-2xl font-bold">Collections</h2>
      {ignoreAllCollection.length > 0 ? (
        <Grid className="grid-cols-2 sm:grid-cols-2 lg:grid-cols-3">
          <CollectionGridItems collections={ignoreAllCollection} />
        </Grid>
      ) : null}
    </main>
  );
};

export default CollectionPage;
