import Grid from 'components/grid';
import { GridTileImage } from 'components/grid/tile';
import { Product } from 'lib/shopify/types';
import Link from 'next/link';

export default function ProductGridItems({ products }: { products: Product[] }) {
  return (
    <>
      {products.map((product) => (
        <Grid.Item key={product.handle} className="animate-fadeIn">
          <Link className="relative inline-block h-full w-full" href={`/product/${product.handle}`}>
            <GridTileImage
              alt={product.title}
              // label={{
              //   title: product.title,
              //   amount: product.priceRange.maxVariantPrice.amount,
              //   currencyCode: product.priceRange.maxVariantPrice.currencyCode
              // }}
              src={product.featuredImage?.url}
              fill
              sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
            <div className="space-y-1 mt-2">
                <h3 className="font-medium">{product.title}</h3>
                <p className="text-sm">{parseFloat(product.priceRange.maxVariantPrice.amount)} {product.priceRange.maxVariantPrice.currencyCode}</p>
            </div>
          </Link>
        </Grid.Item>
      ))}
    </>
  );
}
