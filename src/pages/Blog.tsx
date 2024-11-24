import React from 'react';
import { Calendar, User } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'Getting Started with TypeScript and React',
      excerpt: 'Learn how to set up a new project with TypeScript and React, including best practices and common pitfalls to avoid.',
      author: 'John Doe',
      date: '2024-03-10',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Modern Express.js Development',
      excerpt: 'Explore modern Express.js development techniques and patterns for building scalable backend applications.',
      author: 'Jane Smith',
      date: '2024-03-08',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 pt-4">Blog</h1>

      <div className="grid gap-8">
        {posts.map(post => (
          <article key={post.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-48 w-full object-cover md:w-48"
                  src={post.image}
                  alt={post.title}
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {post.author}
                  </div>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <button className="text-indigo-600 hover:text-indigo-700 font-medium">
                  Read more →
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;