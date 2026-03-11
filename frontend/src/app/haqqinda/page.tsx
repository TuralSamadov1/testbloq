export default function About() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Haqqımızda</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Biz peşəkar tibbi xidmətlər təqdim edən bir komandayıq. Məqsədimiz insanların sağlamlıqlarını qorumalarına və bərpa etmələrinə kömək etməkdir.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-12">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">Missiyamız</h3>
              <p className="mt-4 text-base leading-7 text-gray-600">
                Pasiyentlərimizə ən yüksək səviyyəli tibbi xidmət göstərmək, onların həyat keyfiyyətini artırmaq və etibarlı tibbi tərəfdaş olmaqdır.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">Vizyonumuz</h3>
              <p className="mt-4 text-base leading-7 text-gray-600">
                Regionda ən etibarlı və innovativ tibbi mərkəz olaraq tanınmaq, tibbi sahədəki yenilikləri tətbiq edərək nümunə olmaqdır.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
