import { findAllPublishedPosts } from '@/lib/post/queries';
import { PostDescription } from '../PostsList/PostDescription';
import { PostImageCover } from '../PostsList/PostImageCover';

export async function FeaturedPost() {
  const posts = await findAllPublishedPosts();
  const { slug, coverImageUrl, title, createdAt, excerpt } = posts[0];
  return (
    <>
      <PostImageCover
        linkProps={{ href: slug }}
        imageProps={{
          src: coverImageUrl,
          width: 1200,
          height: 720,
          alt: title,
          priority: true,
        }}
      />
      <PostDescription
        headerTag="h2"
        createdAt={createdAt}
        excerpt={excerpt}
        title={title}
        url={slug}
      />
    </>
  );
}
