import React from 'react';
import { useAuth } from '../hooks/useAuth.ts';

const LoginModal: React.FC = () => {
  const { login } = useAuth();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative bg-gray-800 rounded-lg w-96 p-6 text-center pb-8">
        {/* Title */}
        <h2 className="text-2xl font-bold mb-8 text-gray-100">시작하기</h2>

        {/* Vertical Buttons */}
        <div className="space-y-4">
          <button onClick={login} className="w-full bg-white py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-50">
            <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google Logo" className="w-6 h-6" />
            <span>Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
