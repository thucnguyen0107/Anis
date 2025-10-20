'use client';

import Image from "next/image";
import { useSearchParams } from "next/navigation";

export function HeaderHero({
  title,
  description,
  src
}: {
  title: string;
  description: string;
  src: string;
}) {
const paramsData = useSearchParams();
  const titleA = paramsData.get('title');
  const srcA = paramsData.get('src');
  const descriptionA = paramsData.get('description');
  console.log('[AAAA] ', titleA, srcA, descriptionA);
  
  const imageSrc = src
    ? src
    : '';
  return (
    <div className="relative items-center justify-center bg-gray-900">
      <div className="absolute inset-0">
        <Image fill className="h-full w-full object-cover" src={imageSrc} alt="Image of a clothing rack" />
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          <span className="block">{title}</span>
        </h1>
        <p className="mt-6 max-w-lg text-xl text-gray-300">{description}</p>
      </div>
    </div>
  );
}
