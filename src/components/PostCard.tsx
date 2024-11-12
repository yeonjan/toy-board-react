import { Post } from '../models/Post.ts';
import React from 'react';

const PostCard: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div key={post.id} className="bg-gray-800 rounded-lg overflow-hidden">
      {post.imageUrl && (
        <div className="relative h-48">
          <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
        <div className="flex items-center justify-between text-sm text-gray-400">
          <span>{post.writer}</span>
          <span>{post.date}</span>
        </div>
        {post.tags && post.tags.length > 0 && (
          <div className="mt-3 flex gap-2">
            {post.tags.map(tag => (
              <span key={tag.id} className="px-2 py-1 bg-gray-700 rounded-full text-xs">
                {tag.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PostCard;
