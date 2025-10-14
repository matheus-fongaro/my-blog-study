import clsx from 'clsx';
import Link from 'next/link';

type PostHeadingProps = {
  children: React.ReactNode;
  url: string;
  as?: 'h1' | 'h2' | 'h3';
};
export function PostHeading({
  children,
  url,
  as: Tag = 'h1',
}: PostHeadingProps) {
  const headingClassesMap = {
    h1: 'text-3xl/normal md:text-6xl lg:text-7xl font-extrabold',
    h2: 'text-2xl/tight sm:text-5xl/tight font-extrabold',
    h3: 'text-md/tight sm:text-xl/tight font-bold',
  };
  return (
    <Tag className={clsx(headingClassesMap[Tag])}>
      <Link className='hover:text-slate-600 transition' href={url}>{children}</Link>
    </Tag>
  );
}
