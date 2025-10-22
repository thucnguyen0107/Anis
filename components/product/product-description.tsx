import { TagIcon } from '@heroicons/react/24/outline';
import Price from 'components/price';
import Prose from 'components/prose';
import { Product } from 'lib/shopify/types';
import { convertPrice } from 'lib/utils';
import { Suspense } from 'react';
import { VariantSelector } from './variant-selector';

export function ProductDescription({ product }: { product: Product }) {
  const saleAmount = product.compareAtPriceRange.maxVariantPrice.amount
  const amount = product.priceRange.maxVariantPrice.amount
  const isShowSale = parseFloat(saleAmount) > parseFloat(amount)
  return (
    <>
      <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700 relative">
        <h1 className="mb-2 text-5xl font-medium">{product.title}</h1>
        <div className="mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white">
          <Price
            amount={convertPrice(amount)}
            currencyCode={product.priceRange.maxVariantPrice.currencyCode}
            saleAmount={isShowSale ? convertPrice(saleAmount) : ""}
          />
        </div>
        {isShowSale && (
          <div className="flex rounded bg-red-500 absolute top-0 right-0 rotate-12 transform p-2 justify-center items-center">
            <TagIcon className='size-5 text-white'/>
            <span className="text-xs font-semibold text-white">
              Sale
            </span>
          </div>
        )}
      </div>
      <Suspense fallback={null}>
        <VariantSelector options={product.options} variants={product.variants} />
      </Suspense>

      {product.descriptionHtml ? (
        <Prose
          className="mb-6 text-sm leading-tight dark:text-white/[60%]"
          html={product.descriptionHtml}
        />
      ) : null}

      {/* <Suspense fallback={null}>
        <AddToCart variants={product.variants} availableForSale={product.availableForSale} />
      </Suspense> */}
    </>
  );
}
