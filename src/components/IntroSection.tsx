import Image from "next/image";
import Link from "next/link";
import { RESUME_URL } from "@/data/constants";

// Replace with "/profile.jpg" once you add your photo to public/
const PROFILE_IMAGE = "https://placehold.co/400x400/e5e7eb/6b7280?text=Photo";

export default function IntroSection() {
  return (
    <section
      id="intro"
      className="grid min-h-[calc(100vh-60px)] grid-cols-1 content-center gap-8 px-4 pt-20 pb-16 md:grid-cols-2 md:gap-12 md:px-6 md:pt-28 lg:px-8 lg:pt-32"
      style={{ minHeight: "calc(100dvh - 60px)" }}
    >
      <div className="flex flex-col justify-center gap-6">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
          Your Name
        </h1>
        <p className="max-w-md text-lg text-gray-600">
          Software engineer building clean, accessible web experiences.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800"
          >
            Download Resume
          </Link>
          <a
            href="#contact"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:border-gray-400"
          >
            Contact Me
          </a>
        </div>
      </div>
      <div className="relative flex items-center justify-center md:justify-end">
        <div className="relative h-64 w-64 overflow-hidden rounded-full border-2 border-gray-200 bg-gray-100 sm:h-80 sm:w-80 md:h-96 md:w-96">
          <Image
            src={PROFILE_IMAGE}
            alt="Profile"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 256px, 384px"
            priority
            unoptimized={PROFILE_IMAGE.startsWith("http")}
          />
        </div>
      </div>
    </section>
  );
}
