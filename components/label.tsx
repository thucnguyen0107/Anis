import clsx from 'clsx';
import Price from './price';

const Label = ({
  title,
  amount,
  currencyCode,
  isCollection = false,
  position = 'bottom'
}: {
  title: string;
  amount: string;
  isCollection?: boolean;
  currencyCode: string;
  position?: 'bottom' | 'center';
}) => {
  if (isCollection) {
    return (
      <div
        className={clsx('absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label justify-center', {
          'lg:px-20 lg:pb-[35%]': position === 'center'
        })}
      >
        <div className="flex items-center rounded-full p-1 text-2xl font-semibold text-black backdrop-blur-md bg-slate-300 dark:border-neutral-800 dark:bg-black/70 dark:text-white">
          <h3 className="mr-4 line-clamp-2 text-center flex-grow pl-2 leading-none tracking-tight">{title}</h3>
        </div>
      </div>
    );
  }
  return (
    <div
      className={clsx('absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label', {
        'lg:px-20 lg:pb-[35%]': position === 'center'
      })}
    >
      <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
        <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">{title}</h3>
        <Price
          className="flex-none rounded-full bg-blue-600 p-2 text-white"
          amount={amount}
          currencyCode={currencyCode}
          currencyCodeClassName="hidden @[275px]/label:inline"
        />
      </div>
    </div>
  );
};

export default Label;
