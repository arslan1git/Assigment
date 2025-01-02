export interface Post {
    id: number;
    title: string;
    content: string;
    excerpt: string;
    date: string;
    author: string;
    image: string;
  }
  
  export const posts: Post[] = [
    {
      id: 1,
      title: 'Getting Started with Next.js 14',
      excerpt: 'Learn the basics of Next.js 14 and its powerful features.',
      content: `Next.js 14 introduces several groundbreaking features that revolutionize the way we build web applications. From improved routing to enhanced server components, this version brings significant improvements to the developer experience.
  
  The new App Router provides a more intuitive way to handle routing in your applications, while server components enable better performance through reduced client-side JavaScript.
  
  Key features include:
  - Improved routing system
  - Enhanced server components
  - Better streaming capabilities
  - Simplified data fetching
  - Improved caching mechanisms`,
      date: '2024-03-20',
      author: 'Daniyal',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 2,
      title: 'Building Dynamic Web Applications',
      excerpt: 'Explore advanced techniques for creating interactive web apps.',
      content: `Creating dynamic web applications requires a solid understanding of modern web technologies and best practices. This post explores advanced techniques and patterns for building interactive and responsive web applications.
  
  We'll cover important topics such as state management, component architecture, and performance optimization strategies that will help you create better web applications.
  
  Key topics covered:
  - State management patterns
  - Component composition
  - Performance optimization
  - User interaction handling
  - Data synchronization`,
      date: '2024-03-21',
      author: 'Arslan Ahmed',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 3,
      title: 'Mastering React Hooks',
      excerpt: 'Deep dive into React hooks and state management.',
      content: `React Hooks have transformed the way we write React components. This comprehensive guide explores how to effectively use hooks for state management and side effects in your applications.
  
  We'll dive deep into the most commonly used hooks and explore advanced patterns that will help you write more maintainable and efficient React code.
  
  Topics covered:
  - useState and useEffect
  - Custom hooks
  - Context and reducers
  - Performance optimization
  - Common pitfalls and solutions`,
      date: '2024-03-22',
      author: 'Adnan',
      image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80&w=800',
    },
  ];