import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Post } from '@/data/posts';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="bg-card rounded-lg shadow-lg overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 relative">
          <img
            src={post.image}
            alt={post.title}
            className="h-48 w-full object-cover transition-transform transform hover:scale-105"
          />
        </div>
        <div className="p-6 md:w-2/3">
          <div className="flex items-center text-sm text-muted-foreground mb-2">
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>{post.author}</span>
          </div>
          <h2 className="text-2xl font-semibold text-foreground mb-2">
            {post.title}
          </h2>
          <p className="text-muted-foreground mb-4">{post.excerpt}</p>
          <Link
            href={`/blog/${post.id}`}
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
          >
            Read more <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
