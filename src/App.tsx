import React, { useEffect, useState } from 'react';
import SideBar from './components/SIdeBar.tsx';
import Header from './components/Header.tsx';
import PostList from './components/PostList.tsx';
import { useAuth } from './hooks/useAuth.ts';
import LoginModal from './components/LoginModal.tsx';

// Types
const BlogLayout: React.FC = () => {
  const { isLoggedIn } = useAuth();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!isLoggedIn) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [isLoggedIn]);

  if (!isLoggedIn && !showModal) {
    return null;
  }

  return (
    <>
      {showModal && <LoginModal />}

      {isLoggedIn && (
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
      )}
    </>
  );
};

export default BlogLayout;
