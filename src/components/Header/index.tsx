import clsx from 'clsx';
import Link from 'next/link';

export function Header() {
  return (
    <header>
      <h1
        className={clsx(
          'text-3xl/normal font-extrabold py-8',
          'md:text-6xl md:py-11',
          'lg:text-7xl lg:py-12'
        )}
      >
        <Link href="#">Matheus Fongaro</Link>
      </h1>
    </header>
  );
}
