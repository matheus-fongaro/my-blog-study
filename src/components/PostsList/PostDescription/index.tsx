import { PostHeading } from '../PostHeading';

type PostDescriptionProps = {
  dateTime: string;
  title: string;
  excerpt: string;
  as: 'h1' | 'h2' | 'h3';
  url: string;
};
export function PostDescription({
  dateTime,
  title,
  excerpt,
  as = 'h3',
  url
}: PostDescriptionProps) {
  return (
    <div className="flex flex-col gap-2 sm:justify-center">
      <time className="text-slate-600 text-sm/tight block" dateTime={dateTime}>
        {dateTime}
      </time>
      <PostHeading url={url} as={as}>
        {title}
      </PostHeading>
      {excerpt}
    </div>
  );
}
