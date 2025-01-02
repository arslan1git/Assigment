'use client';

import { Send } from 'lucide-react';
import { useState } from 'react';
import type { Comment } from '@/types/comments';

interface CommentFormProps {
  onSubmit: (comment: Omit<Comment, 'id'>) => void;
}

export function CommentForm({ onSubmit }: CommentFormProps) {
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim() || !author.trim()) return;

    onSubmit({
      author,
      content,
      date: new Date().toISOString().split('T')[0],
    });

    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="mb-4">
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Your name"
          className="w-full p-3 rounded-lg border border-input bg-background text-foreground"
          required
        />
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Add a comment..."
          className="flex-1 p-3 rounded-lg border border-input bg-background text-foreground"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
        >
          <Send className="h-5 w-5" />
        </button>
      </div>
    </form>
  );
}