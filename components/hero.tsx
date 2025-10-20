import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <div className="relative bg-gray-900">
      <div className="absolute inset-0">
        <Image
          fill
          className="h-full w-full object-cover"
          src=""
          alt="Image of a clothing rack"
        />
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      </div>
      <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          <span className="block">Elevate Your Style</span>
        </h1>
        <p className="mt-6 max-w-lg text-xl text-gray-300">
          Discover the latest trends and timeless classics.
        </p>
        <div className="mt-12">
          <Link
            href="/search"
            className="inline-block rounded-md border border-transparent bg-blue-600 py-3 px-8 text-base font-medium text-white hover:bg-blue-700"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
}
