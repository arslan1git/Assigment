import { posts } from '@/data/posts';
import { BlogPost } from './BlogPost';

export default function Page({ params }: { params: { id: string } }) {
  const post = posts.find((p) => p.id === Number(params.id));

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-muted-foreground">Post not found</p>
      </div>
    );
  }

  return <BlogPost post={post} />;
}

export function generateStaticParams() {
  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}