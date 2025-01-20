import React, { useEffect, useState } from 'react';
import { Post } from '../models/Post.ts';
import PostCard from './PostCard.tsx';

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);

        const queryParams = new URLSearchParams({}).toString();

        const response = await fetch('http://localhost:8080/api/postings', {
          method: 'GET',
          credentials: 'include',
        });
        if (!response.ok) {
          throw new Error('게시물을 불러오는데 실패했습니다');
        }
        const data = await response.json();
        setPosts(data.content);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);
  // const posts: Post[] = [
  //   {
  //     id: '1',
  //     title: '내 맘대로 위클리 뉴스 - 2024년 43주',
  //     writer: 'user1',
  //     date: '2024.11.11',
  //     tags: [{ id: '1', name: '일반 개발' }],
  //     imageUrl: '/api/placeholder/400/300',
  //     url: 'http://localhost:5173',
  //     isRead: false,
  //     category: { id: '1', name: 'java' },
  //   },
  //   {
  //     id: '2',
  //     title: 'Elasticsearch 는 어떻게 위치 검색도 빠를까',
  //     writer: 'user2',
  //     date: '2024.11.11',
  //     tags: [
  //       { id: '2', name: 'Infra Structure' },
  //       { id: '3', name: 'ElasticSearch' },
  //     ],
  //     url: 'http://localhost:5173',
  //     imageUrl: '/api/placeholder/400/300',
  //     isRead: false,
  //     category: { id: '2', name: 'aws' },
  //   },
  //   // Add more posts as needed
  // ];

  return (
    <div className="p-6 grid grid-cols-3 gap-6">
      {loading && <p className="text-gray-400">Loading categories...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};
export default PostList;
