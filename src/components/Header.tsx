import { Bell, Search, Heart, Settings } from 'lucide-react';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="p-4 border-b border-gray-700">
      <div className="flex items-center justify-between">
        <div className="relative">
          <input type="text" placeholder="네이버에서 검색" className="w-96 px-4 py-2 bg-gray-800 rounded-full text-sm" />
          <Search className="absolute right-4 top-2.5 w-4 h-4 text-gray-400" />
        </div>
        <div className="flex items-center gap-4">
          <Bell className="w-5 h-5" />
          <Heart className="w-5 h-5" />
          <Settings className="w-5 h-5" />
        </div>
      </div>
    </header>
  );
};

export default Header;
