import { fetchData } from '@/lib/api';
import { FAQ } from '@/types';

export default async function FAQPage() {
  let faqs: FAQ[] = [];
  try {
    faqs = await fetchData('faqs');
  } catch (error) {
    console.error(error);
  }

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Tez-tez Verilən Suallar</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Ən çox soruşulan suallar və onların cavabları.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl divide-y divide-gray-900/10">
          <dl className="space-y-10">
            {faqs.map((faq) => (
              <div key={faq.id} className="pt-6">
                <dt>
                  <span className="text-lg font-semibold leading-7 text-gray-900">{faq.question}</span>
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{faq.answer}</dd>
              </div>
            ))}
          </dl>
          {faqs.length === 0 && (
              <p className="text-center mt-10 text-gray-500">Hələlik heç bir sual əlavə edilməyib.</p>
          )}
        </div>
      </div>
    </div>
  );
}
