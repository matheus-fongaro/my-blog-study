import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import { Suspense } from 'react';

export default async function Home() {
  return (
    <div>
      <header className="text-6xl font-bold text-center py-8">
        header aqui
      </header>
      <Suspense fallback={<SpinLoader className="min-h-40" />}>
        <PostsList />
      </Suspense>
      <footer className="text-6xl font-bold text-center py-8">
        footer aqui
      </footer>
    </div>
  );
  // return <SpinLoader containerClasses={clsx('min-h-[500px]')} />;
}
