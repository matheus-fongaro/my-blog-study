import { PostDescription } from '../PostsList/PostDescription';
import { PostImageCover } from '../PostsList/PostImageCover';

export function FeaturedPost() {
  return (
    <>
      <PostImageCover
        linkProps={{ href: '#' }}
        imageProps={{
          src: '/images/bryen_2.png',
          width: 1200,
          height: 720,
          alt: 'Titulo do post',
          priority: true,
        }}
      />
      <PostDescription
        as="h2"
        dateTime="2025-10-10T17:29:00"
        excerpt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, dolorum."
        title="Título do post"
        url="#"
      />
    </>
  );
}
