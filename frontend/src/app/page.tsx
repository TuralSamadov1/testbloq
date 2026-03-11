import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-pink-100/20 to-orange-100/20 pt-14">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Sizin Sağlamlığınız Bizim <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">Prioritetimizdir</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Professional xidmət, müasir yanaşma və fərdi müalicə planları ilə xidmətinizdəyik.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/elaqe"
                className="rounded-md bg-gradient-to-r from-pink-500 to-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
              >
                Əlaqəyə Keç
              </Link>
              <Link href="/xidmetler" className="text-sm font-semibold leading-6 text-gray-900">
                Xidmətlərimiz <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Highlights / Features */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-pink-600">Peşəkar yanaşma</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Niyə bizi seçməlisiniz?
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                Təcrübəli Həkimlər
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">Uzun illərin təcrübəsinə malik peşəkar komandamız sizin sağlamlığınızın keşiyindədir.</p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                Müasir Avadanlıq
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">Ən son texnoloji yeniliklərdən istifadə edərək dəqiq diaqnoz və effektiv müalicə təklif edirik.</p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                Fərdi Yanaşma
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">Hər bir pasiyent üçün fərdi müalicə və profilaktika proqramları hazırlayırıq.</p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
