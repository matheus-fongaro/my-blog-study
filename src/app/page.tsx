import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default async function Home() {
  return (
    <Container>
      <Header />
      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
        <Link href="#" className="w-full h-full overflow-hidden rounded-lg">
          <Image
            src="/images/bryen_0.png"
            className="group-hover:scale-105 transition duration-100 ease-in-out"
            width={1200}
            height={720}
            alt="Titulo do post"
          />
        </Link>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
          voluptate necessitatibus deserunt, quod nostrum perferendis error
          quisquam sed debitis nulla cupiditate quas suscipit est et laboriosam
          dignissimos officiis possimus vel!
        </div>
      </section>
      <Suspense fallback={<SpinLoader className="min-h-40" />}>
        <PostsList />
      </Suspense>
      <footer className="text-6xl font-bold text-center py-8">
        footer aqui
      </footer>
    </Container>
  );
  // return <SpinLoader containerClasses={clsx('min-h-[500px]')} />;
}
