import { posts } from "@/data/posts";
import { PostCard } from './components/PostCard';

export default function Home() {
  return (
    <main className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-8">Latest Blog Posts</h1>
        <div className="grid gap-8">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
}