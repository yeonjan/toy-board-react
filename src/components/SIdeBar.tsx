import React from 'react';
import { Category } from '../models/category.ts';

const SideBar: React.FC = () => {
  const categories: Category[] = [
    { id: 1, name: '관심 카테고리' },
    { id: 2, name: '웹 개발' },
    { id: 3, name: 'Java' },
    { id: 4, name: 'Infra Structure' },
    { id: 5, name: 'Database' },
    { id: 6, name: 'Git' },
    { id: 7, name: '일반 스터디' },
    { id: 8, name: '투자' },
    { id: 9, name: '프로덕트 소식' },
  ];
  return (
    /* Sidebar */
    <div className="w-64 p-4 border-r border-gray-700">
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Categories</h2>
        {categories.map(category => (
          <div key={category.id} className="py-2 px-4 hover:bg-gray-800 rounded cursor-pointer">
            {category.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
