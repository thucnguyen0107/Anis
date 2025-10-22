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
          {saleAmount}
        </span>
        <span className="mx-2 inline-block font-semibold">
          {amount}
        </span>
      </>
    ) : (
      amount
    )}
    <span className={clsx('ml-1 inline', currencyCodeClassName)}>{`${currencyCode}`}</span>
  </p>
);

// {`${new Intl.NumberFormat(undefined, {
//             style: 'currency',
//             currency: currencyCode,
//             currencyDisplay: 'narrowSymbol'
//           }).format(parseFloat(saleAmount))}`}

export default Price;
