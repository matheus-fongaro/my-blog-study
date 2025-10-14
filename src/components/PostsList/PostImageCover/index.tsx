import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';

type PostImageCoverProps = {
  imageProps: React.ComponentProps<typeof Image>;
  linkProps: React.ComponentProps<typeof Link>;
};
export function PostImageCover({ imageProps, linkProps }: PostImageCoverProps) {
  return (
    <Link
      {...linkProps}
      className={clsx(
        'w-full h-full overflow-hidden rounded-lg',
        linkProps.className
      )}
    >
      <Image
        {...imageProps}
        className={clsx(
          'group-hover:scale-105 transition duration-100 ease-in-out w-full h-full object-cover object-center',
          imageProps.className
        )}
      />
    </Link>
  );
}
