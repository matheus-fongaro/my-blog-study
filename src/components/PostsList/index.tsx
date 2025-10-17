import { findAllPublishedPosts } from '@/lib/post/queries';
import { PostDescription } from './PostDescription';
import { PostImageCover } from './PostImageCover';

export async function PostsList() {
  const posts = await findAllPublishedPosts();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.slice(1).map((post) => {
        return (
          <div className="grid grid-cols-1 gap-4 group" key={post.id}>
            <PostImageCover
              linkProps={{ href: `/post/${post.slug}` }}
              imageProps={{
                src: post.coverImageUrl,
                width: 1200,
                height: 720,
                alt: post.title,
                priority: true,
              }}
            />
            <PostDescription
              headerTag="h3"
              createdAt={post.createdAt}
              excerpt={post.excerpt}
              title={post.title}
              url={`/post/${post.slug}`}
            />
          </div>
        );
      })}
    </div>
  );
}
