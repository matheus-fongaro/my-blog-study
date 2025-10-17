import {
  formatDatetime,
  formatRelativeDatetime,
  isOlderThanDays,
} from '@/utils/datetime';
import { PostHeading } from '../PostHeading';

type PostDescriptionProps = {
  createdAt: string;
  title: string;
  excerpt: string;
  headerTag: 'h1' | 'h2' | 'h3';
  url: string;
};
export function PostDescription({
  createdAt,
  title,
  excerpt,
  headerTag = 'h3',
  url,
}: PostDescriptionProps) {
  const isOlderThanWeekPost = isOlderThanDays(createdAt, 7);
  const formattedDate = isOlderThanWeekPost
    ? formatDatetime(createdAt)
    : formatRelativeDatetime(createdAt);
  const timeTitle = isOlderThanWeekPost
    ? formatRelativeDatetime(createdAt)
    : formatDatetime(createdAt);
  return (
    <div className="flex flex-col gap-2 sm:justify-center">
      <time
        className="text-slate-600 text-sm/tight block"
        dateTime={createdAt}
        title={timeTitle}
      >
        {formattedDate}
      </time>
      <PostHeading url={url} as={headerTag}>
        {title}
      </PostHeading>
      {excerpt}
    </div>
  );
}
