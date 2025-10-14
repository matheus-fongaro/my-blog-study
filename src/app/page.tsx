import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import { Suspense } from 'react';
import { FeaturedPost } from '@/components/FeaturedPost';

export default async function Home() {
  return (
    <Container>
      <Header />
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
      <footer className="text-6xl font-bold text-center py-8">
        footer aqui
      </footer>
    </Container>
  );
  // return <SpinLoader containerClasses={clsx('min-h-[500px]')} />;
}
