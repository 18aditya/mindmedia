import { ContentItem } from '../types/content';

export const HOME_PAGE_CONSTANTS = {
  typography: {
    heading: {
      h3: 'text-xl font-semibold text-gray-900 dark:text-white',
    },
    body: {
      medium: 'text-base text-gray-600 dark:text-gray-300',
      small: 'text-sm text-gray-500 dark:text-gray-400',
    }
  }
};

export const trendingContent: ContentItem[] = [
  {
    "id": "tc1",
    "title": "Social Media Trends 2024",
    "description": "The most impactful social media trends this year",
    "imageUrl": "/images/trending-1.jpg",
    "category": "Social Media",
    "readTime": "4 min read"
  },
  {
    "id": "tc2",
    "title": "Content Creation Tips",
    "description": "Expert tips for creating engaging content",
    "imageUrl": "/images/trending-2.jpg",
    "category": "Tips & Tricks",
    "readTime": "6 min read"
  }
]; 