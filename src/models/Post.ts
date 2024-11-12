import { Tag } from './tag.ts';
import { Category } from './category.ts';

export interface Post {
  id: number;
  title: string;
  memo?: string;
  url: string;
  writer?: string;
  isRead: boolean;
  category: Category;
  date: string;
  imageUrl?: string;
  tags?: Tag[];
}
