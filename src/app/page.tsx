import { FeaturedPost } from '@/components/FeaturedPost';
import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import { Suspense } from 'react';

export default async function Home() {
  return (
    <>
      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
        <Suspense fallback={<SpinLoader className="min-h-40" />}>
          <FeaturedPost />
        </Suspense>
      </section>
      <section>
        <Suspense fallback={<SpinLoader className="min-h-40" />}>
          <PostsList />
        </Suspense>
      </section>
    </>
  );
}
