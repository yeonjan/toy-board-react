import React, { useEffect, useState } from 'react';
import { Category } from '../models/category.ts';
import { ChevronDown, ChevronRight } from 'lucide-react';

const SideBar: React.FC = () => {
  //TODO: UseState 공부
  //TODO: UseState -> 사이드바 서브 카테고리 / Zustand -> 다크&라이트 모드 적용
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => (prev.includes(categoryId) ? prev.filter(id => id !== categoryId) : [...prev, categoryId]));
  };
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);

        const response = await fetch('http://localhost:8080/api/categories', {
          method: 'GET',
          credentials: 'include',
        });

        if (!response.ok) {
          throw new Error('카테고리를 불러오는데 실패했습니다');
        }
        const data = await response.json();
        setCategories(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  // const categories: Category[] = [
  //   {
  //     id: '1',
  //     name: '웹 개발',
  //   },
  //   {
  //     id: '2',
  //     name: 'Java',
  //     subCategories: [
  //       { id: '9', name: 'Spring' },
  //       { id: '10', name: 'JPA' },
  //     ],
  //   },
  //   {
  //     id: '3',
  //     name: 'Infra Structure',
  //     subCategories: [
  //       { id: '11', name: 'Docker' },
  //       { id: '12', name: 'Kubernetes' },
  //     ],
  //   },
  //   {
  //     id: '4',
  //     name: 'Database',
  //     subCategories: [
  //       { id: '13', name: 'MySQL' },
  //       { id: '14', name: 'MongoDB' },
  //     ],
  //   },
  //   {
  //     id: '5',
  //     name: 'Git',
  //     subCategories: [
  //       { id: '15', name: '기본 명령어' },
  //       { id: '16', name: '브랜치 전략' },
  //     ],
  //   },
  // ];

  return (
    /* Sidebar */
    <div className="w-64 p-4 border-r border-gray-700">
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4 px-4">Categories</h2>
        {loading && <p className="text-gray-400">Loading categories...</p>}
        {error && <p className="text-red-500">{error}</p>}

        <div className="space-y-1">
          {categories.map(category => (
            <div key={category.id}>
              <div
                className="flex items-center justify-between py-2 px-4 rounded cursor-pointer hover:bg-gray-800"
                onClick={() => category.subCategories && toggleCategory(category.id)}
              >
                <span>{category.name}</span>
                {category.subCategories &&
                  (expandedCategories.includes(category.id) ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />)}
              </div>
              {/* Subcategories */}
              {category.subCategories && expandedCategories.includes(category.id) && (
                <div className="ml-4 mt-1 space-y-1">
                  {category.subCategories.map(subCategory => (
                    <div key={subCategory.id} className="py-1.5 px-4 rounded cursor-pointer text-sm text-gray-300 hover:bg-gray-800">
                      {subCategory.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
