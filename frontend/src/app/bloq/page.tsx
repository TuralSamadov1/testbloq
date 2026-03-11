import { fetchData } from '@/lib/api';
import { BlogPost } from '@/types';
import Link from 'next/link';

export default async function BlogPage() {
  let posts: BlogPost[] = [];
  try {
    posts = await fetchData('blog');
  } catch (error) {
    console.error(error);
  }

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Bloq</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Faydalı məlumatlar və ən son tibbi yeniliklər.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col items-start border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="relative w-full aspect-video">
                <img src={post.image} alt={post.title} className="object-cover w-full h-full" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.created_at} className="text-gray-500">
                    {new Date(post.created_at).toLocaleDateString('az-AZ')}
                  </time>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-pink-600">
                    <Link href={`/bloq/${post.id}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.content}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
        {posts.length === 0 && (
            <p className="text-center mt-10 text-gray-500">Hələlik heç bir məqalə əlavə edilməyib.</p>
        )}
      </div>
    </div>
  );
}
