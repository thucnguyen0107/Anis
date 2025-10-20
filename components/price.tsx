import clsx from 'clsx';

const Price = ({
  amount,
  className,
  currencyCode = 'USD',
  currencyCodeClassName,
  saleAmount
}: {
  amount: string;
  className?: string;
  currencyCode: string;
  currencyCodeClassName?: string;
  saleAmount?: string;
} & React.ComponentProps<'p'>) => (
  <p suppressHydrationWarning={true} className={className}>
    {saleAmount ? (
      <>
        <span className="inline-block line-through opacity-70">
          {`${new Intl.NumberFormat(undefined, {
            style: 'currency',
            currency: currencyCode,
            currencyDisplay: 'narrowSymbol'
          }).format(parseFloat(saleAmount))}`}
        </span>
        <span className="mx-2 inline-block font-semibold">
          {`${new Intl.NumberFormat(undefined, {
            style: 'currency',
            currency: currencyCode,
            currencyDisplay: 'narrowSymbol'
          }).format(parseFloat(amount))}`}
        </span>
      </>
    ) : (
      `${new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: currencyCode,
        currencyDisplay: 'narrowSymbol'
      }).format(parseFloat(amount))}`
    )}
    <span className={clsx('ml-1 inline', currencyCodeClassName)}>{`${currencyCode}`}</span>
  </p>
);

export default Price;
