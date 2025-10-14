import { postRepository } from '@/repositories/post';
import { PostImageCover } from './PostImageCover';
import { PostDescription } from './PostDescription';

export async function PostsList() {
  const posts = await postRepository.findAll();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => {
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
              as="h3"
              dateTime={post.updatedAt}
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
