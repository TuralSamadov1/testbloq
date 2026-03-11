import { fetchData } from '@/lib/api';
import { Service } from '@/types';
import Link from 'next/link';
import Image from 'next/image';

export default async function ServicesPage() {
  let services: Service[] = [];
  try {
    services = await fetchData('services');
  } catch (error) {
    console.error(error);
  }

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Xidmətlərimiz</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Sizin sağlamlığınız üçün təklif etdiyimiz professional xidmətlər.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.id} className="flex flex-col items-start justify-between border p-6 rounded-2xl hover:shadow-lg transition">
              <div className="relative w-full aspect-video overflow-hidden rounded-xl bg-gray-100 mb-6">
                {service.image && (
                    <img
                        src={service.image}
                        alt={service.title}
                        className="object-cover w-full h-full"
                    />
                )}
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-pink-600">
                  <Link href={`/xidmetler/${service.id}`}>
                    <span className="absolute inset-0" />
                    {service.title}
                  </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{service.description}</p>
              </div>
              <Link href={`/xidmetler/${service.id}`} className="mt-4 text-pink-600 font-medium text-sm">
                Ətraflı oxu →
              </Link>
            </article>
          ))}
        </div>
        {services.length === 0 && (
            <p className="text-center mt-10 text-gray-500">Hələlik heç bir xidmət əlavə edilməyib.</p>
        )}
      </div>
    </div>
  );
}
