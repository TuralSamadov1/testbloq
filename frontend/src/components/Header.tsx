import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
              Dr. Bloq
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link href="/" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-orange-500 text-sm font-medium">
              Ana Səhifə
            </Link>
            <Link href="/haqqinda" className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-orange-500 text-sm font-medium">
              Haqqında
            </Link>
            <Link href="/xidmetler" className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-orange-500 text-sm font-medium">
              Xidmətlər
            </Link>
            <Link href="/bloq" className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-orange-500 text-sm font-medium">
              Bloq
            </Link>
            <Link href="/faq" className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-orange-500 text-sm font-medium">
              FAQ
            </Link>
            <Link href="/testimonials" className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-orange-500 text-sm font-medium">
              Rəylər
            </Link>
            <Link href="/elaqe" className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-orange-500 text-sm font-medium">
              Əlaqə
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
