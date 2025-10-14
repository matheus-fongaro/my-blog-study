import {
  formatDatetime,
  formatRelativeDatetime,
  isOlderThanDays,
} from '@/utils/datetime';
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
  url,
}: PostDescriptionProps) {
  const isOlderThanWeekPost = isOlderThanDays(dateTime, 7);
  const formattedDate = isOlderThanWeekPost
    ? formatDatetime(dateTime)
    : formatRelativeDatetime(dateTime);
  const timeTitle = isOlderThanWeekPost
    ? formatRelativeDatetime(dateTime)
    : formatDatetime(dateTime);
  return (
    <div className="flex flex-col gap-2 sm:justify-center">
      <time
        className="text-slate-600 text-sm/tight block"
        dateTime={dateTime}
        title={timeTitle}
      >
        {formattedDate}
      </time>
      <PostHeading url={url} as={as}>
        {title}
      </PostHeading>
      {excerpt}
    </div>
  );
}
