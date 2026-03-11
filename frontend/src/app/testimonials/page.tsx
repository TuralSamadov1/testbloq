import { fetchData } from '@/lib/api';
import { Testimonial } from '@/types';

export default async function TestimonialsPage() {
  let testimonials: Testimonial[] = [];
  try {
    testimonials = await fetchData('testimonials');
  } catch (error) {
    console.error(error);
  }

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Pasiyent Rəyləri</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Bizi seçən pasiyentlərin fikirləri.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex flex-col justify-between bg-white p-6 shadow-lg ring-1 ring-gray-900/5 rounded-2xl">
              <div>
                <div className="flex gap-x-1 text-orange-500">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="mt-4 text-lg leading-8 text-gray-600 italic">"{testimonial.comment}"</p>
              </div>
              <div className="mt-6 flex items-center gap-x-4">
                <div className="text-sm font-semibold leading-6 text-gray-900">{testimonial.name}</div>
              </div>
            </div>
          ))}
        </div>
        {testimonials.length === 0 && (
            <p className="text-center mt-10 text-gray-500">Hələlik heç bir rəy əlavə edilməyib.</p>
        )}
      </div>
    </div>
  );
}
