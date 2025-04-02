import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mx-auto my-32 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
      <div className="px-4">
        <div className="flex flex-col items-center justify-between md:flex-row">
          {/* Logo and Tagline */}
          <div className="mb-4 text-center md:mb-0 md:text-start">
            <Link href="/" className="font-lobster text-2xl">
              Foodieland
              <span className="text-orange-500">.</span>
            </Link>
            <p className="mt-3 text-sm text-black/60">
              Lorem ipsum dolor sit amet, consectetuipiscing elit,
            </p>
          </div>

          {/* Navigation */}
          <nav className="hidden space-x-8 md:flex">
            <Link href="/recipes" className="text-black hover:text-gray-600">
              Recipes
            </Link>
            <Link href="/blog" className="text-black hover:text-gray-600">
              Blog
            </Link>
            <Link href="/contact" className="text-black hover:text-gray-600">
              Contact
            </Link>
            <Link href="/about" className="text-black hover:text-gray-600">
              About us
            </Link>
          </nav>
        </div>

        <div className="mt-8 flex items-center border-t border-gray-100">
          {/* Copyright */}
          <div className="mt-8 w-full text-center text-sm text-gray-500">
            © 2025 Flowbase. Powered by{' '}
            <a
              href="https://webflow.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:underline"
            >
              Webflow
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
