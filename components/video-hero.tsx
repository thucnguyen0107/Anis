import { getFiles } from "lib/shopify";

export async function VideoHero() {
  const files = await getFiles("filename:video-hero*")
  
  const videoUrl = files.length > 0 ? files[0]?.originalSource?.url : "https://static.videezy.com/system/resources/previews/000/044/487/original/31.mp4";
  return (
    <div className="relative bg-gray-900 h-[85vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src={videoUrl}
        />
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      </div>
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          <span className="block">Elevate Your Style</span>
        </h1>
        <p className="mt-6 max-w-lg text-xl text-gray-300">
          Discover the latest trends and timeless classics.
        </p>
        <div className="mt-12">
          <a
            href="/search"
            className="inline-block rounded-md border border-transparent bg-blue-600 py-3 px-8 text-base font-medium text-white hover:bg-blue-700"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
}
