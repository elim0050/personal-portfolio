import Image from "next/image";
import Link from "next/link";
import { RESUME_URL } from "@/data/constants";

// Replace with "/profile.jpg" once you add your photo to public/
const PROFILE_IMAGE = "/photo.jpeg";

export default function IntroSection() {
  return (
    <section
      id="intro"
      className="min-h-[calc(100vh-100px)] px-4 py-16 md:px-6 md:py-20 lg:px-8 lg:py-34"
      style={{ minHeight: "calc(100dvh - 100px)" }}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
        <div className="flex flex-col justify-center gap-6">
        <h1 className="text-2xl tracking-tight text-gray-900 sm:text-5xl lg:text-3xl">
        Hey there, welcome to my portfolio! 👋
              </h1>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
          I'm Ethel  
        </h1>
        <p className="max-w-md text-md text-gray-600 text-justify">
        A curious and driven Software Engineer passionate about building clean, scalable solutions. I enjoy working across Full-Stack, Backend, and AI to create software that makes a real impact.
        Feel free to explore my projects and download my resume below — I’d love to connect!
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-green-600"
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
      </div>
    </section>
  );
}
