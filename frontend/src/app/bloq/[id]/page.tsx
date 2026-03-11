import { fetchData } from '@/lib/api';
import { BlogPost } from '@/types';
import Link from 'next/link';

export default async function BlogDetailPage({ params }: { params: { id: string } }) {
  let post: BlogPost | null = null;
  try {
    post = await fetchData(`blog/${params.id}`);
  } catch (error) {
    console.error(error);
  }

  if (!post) {
    return <div className="text-center py-24">Məqalə tapılmadı.</div>;
  }

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Link href="/bloq" className="text-pink-600 mb-8 inline-block">← Geri qayıt</Link>
        <div className="flex items-center gap-x-4 text-xs mb-4">
            <time className="text-gray-500">
                {new Date(post.created_at).toLocaleDateString('az-AZ')}
            </time>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-8">{post.title}</h1>
        <img src={post.image} alt={post.title} className="rounded-3xl shadow-xl w-full mb-12" />
        <div className="prose prose-pink max-w-none text-gray-700 leading-relaxed whitespace-pre-wrap">
          {post.content}
        </div>
      </div>
    </div>
  );
}
