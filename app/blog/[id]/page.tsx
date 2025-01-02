import { posts } from '@/data/posts';
import { BlogPost } from './BlogPost';

interface PageProps {
  params: { id: string };
}

export default async function Page({ params }: PageProps) {
  const postId = Number(params.id);

  // Ensure the ID is correctly parsed and used to find the post
  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-muted-foreground">Post not found</p>
      </div>
    );
  }

  return <BlogPost post={post} />;
}

// Generate static params for the dynamic routes
export async function generateStaticParams() {
  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}
