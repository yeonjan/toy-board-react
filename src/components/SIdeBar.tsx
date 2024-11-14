import React from 'react';
import { Category } from '../models/category.ts';

const SideBar: React.FC = () => {
  const categories: Category[] = [
    {
      id: '1',
      name: '웹 개발',
      subCategories: [
        { id: '6', name: 'React' },
        { id: '7', name: 'Vue' },
        { id: '8', name: 'Angular' },
      ],
    },
    {
      id: '2',
      name: 'Java',
      subCategories: [
        { id: '9', name: 'Spring' },
        { id: '10', name: 'JPA' },
      ],
    },
    {
      id: '3',
      name: 'Infra Structure',
      subCategories: [
        { id: '11', name: 'Docker' },
        { id: '12', name: 'Kubernetes' },
      ],
    },
    {
      id: '4',
      name: 'Database',
      subCategories: [
        { id: '13', name: 'MySQL' },
        { id: '14', name: 'MongoDB' },
      ],
    },
    {
      id: '5',
      name: 'Git',
      subCategories: [
        { id: '15', name: '기본 명령어' },
        { id: '16', name: '브랜치 전략' },
      ],
    },
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
