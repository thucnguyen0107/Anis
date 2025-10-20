import Footer from 'components/layout/footer';

export default function CollectionsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="mx-auto flex max-w-screen-2xl flex-col px-4 pb-4 text-black md:flex-row dark:text-white">
        <div className="order-last min-h-screen w-full md:order-none">{children}</div>
      </div>
      <Footer />
    </>
  );
}
