import { fetchData } from '@/lib/api';
import { Service } from '@/types';
import Link from 'next/link';

export default async function ServiceDetailPage({ params }: { params: { id: string } }) {
  let service: Service | null = null;
  try {
    service = await fetchData(`services/${params.id}`);
  } catch (error) {
    console.error(error);
  }

  if (!service) {
    return <div className="text-center py-24">Xidmət tapılmadı.</div>;
  }

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Link href="/xidmetler" className="text-pink-600 mb-8 inline-block">← Geri qayıt</Link>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <img src={service.image} alt={service.title} className="rounded-3xl shadow-xl w-full" />
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-6">{service.title}</h1>
            <div className="prose prose-pink max-w-none text-gray-600 leading-relaxed whitespace-pre-wrap">
              {service.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
