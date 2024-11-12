import React from 'react';
import SideBar from './components/SIdeBar.tsx';
import Header from './components/Header.tsx';
import PostList from './components/PostList.tsx';

// Types
const BlogLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <Header />

        {/* Posts Grid */}
        <PostList />
      </div>
    </div>
  );
};

export default BlogLayout;
