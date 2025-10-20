import { getFiles } from 'lib/shopify';
import Image from 'next/image';

export async function HeroSection() {
  const files = await getFiles('filename:image-hero*');

  const imgUrl1st = files.length > 0 ? files[0]?.image?.url : '';
  if (!imgUrl1st) {
    return <></>;
  }
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gray-900 h-[85vh] w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image fill className="h-full w-full object-cover" src={imgUrl1st} alt="Image of a clothing rack" />
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      </div>

      {/* Content */}
      {/* <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light mb-6 tracking-tight text-balance">
          Elevate Your Style
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
          Discover the latest trends and timeless classics crafted for the modern wardrobe
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-base px-8 group">
            Shop Collection
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="text-base px-8 bg-transparent">
            Explore Lookbook
          </Button>
        </div>
      </div> */}

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex animate-bounce flex-col items-center gap-2">
          <span className="text-muted-foreground text-xs tracking-widest">SCROLL</span>
          <div className="bg-muted-foreground/30 h-12 w-px" />
        </div>
      </div> */}
    </section>
  );
}
