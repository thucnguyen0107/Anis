import { getFiles } from 'lib/shopify';
import Image from 'next/image';

export async function BrandStory() {
  const files = await getFiles('filename:brand-story*');
  const imgUrl = files.length > 0 ? files[0]?.image?.url : '';
  if (!imgUrl) {
    return <></>;
  }
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="bg-muted relative aspect-[4/5] overflow-hidden">
            <Image
              src={imgUrl}
              alt="ANIS Atelier"
              fill
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-muted-foreground text-sm tracking-widest">OUR STORY</p>
              <h2 className="text-balance font-serif text-4xl font-light lg:text-5xl">
                Crafting Timeless Elegance
              </h2>
            </div>
            <div className="text-muted-foreground space-y-4 leading-relaxed">
              <p>
                Founded with a vision to redefine modern elegance, ANIS brings together exceptional
                craftsmanship and contemporary design. Each piece in our collection is thoughtfully
                created to transcend seasonal trends.
              </p>
              <p>
                We believe in the power of quality over quantity, creating garments that become
                cherished parts of your wardrobe for years to come. Our commitment to sustainable
                practices and ethical production ensures that every purchase makes a positive
                impact.
              </p>
              <p>
                From the finest fabrics to meticulous attention to detail, ANIS represents a new
                standard in fashion—where style meets substance.
              </p>
            </div>
            <div className="pt-4">
              {/* <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm tracking-wider border-b border-foreground pb-1 hover:border-muted-foreground transition-colors"
              >
                DISCOVER MORE
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
