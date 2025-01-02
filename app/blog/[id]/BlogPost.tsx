'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, MessageSquare } from 'lucide-react';
import { CommentForm } from '@/app/components/CommentForm';
import type { Comment } from '@/types/comments';
import type { Post } from '@/data/posts';

interface BlogPostProps {
  post: Post;
}

export function BlogPost({ post }: BlogPostProps) {
  const [comments, setComments] = useState<Comment[]>([]);

  const handleAddComment = (newComment: Omit<Comment, 'id'>) => {
    const comment: Comment = {
      ...newComment,
      id: Date.now(),
    };
    setComments([...comments, comment]);
  };

  return (
    <main className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <article className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to posts
        </Link>

        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[400px] object-cover rounded-lg mb-8"
        />

        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-foreground mb-4">{post.title}</h1>
          <div className="flex items-center text-sm text-muted-foreground mb-8">
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>{post.author}</span>
          </div>
          <div className="text-foreground whitespace-pre-line">{post.content}</div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-foreground mb-8 flex items-center">
            <MessageSquare className="mr-2 h-6 w-6" />
            Comments ({comments.length})
          </h2>

          <CommentForm onSubmit={handleAddComment} />

          <div className="space-y-6">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="bg-card p-4 rounded-lg border border-border"
              >
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <span className="font-semibold text-foreground">
                    {comment.author}
                  </span>
                  <span className="mx-2">•</span>
                  <span>{comment.date}</span>
                </div>
                <p className="text-foreground">{comment.content}</p>
              </div>
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}