import Grid from 'components/grid';
import ProductGridItems from 'components/layout/product-grid-items';
import { getProducts } from 'lib/shopify';

const PromotionPage = async () => {
  const products = await getProducts({ query: 'tag:sale' });

  return (
    <main className="mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4">
      <h2 className="mx-auto my-4 text-center text-2xl font-serif font-bold">Promotions</h2>
      {products.length > 0 ? (
        <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <ProductGridItems products={products} />
        </Grid>
      ) : null}
    </main>
  );
};

export default PromotionPage;