'use client';

import { ContentItem } from '@/lib/types/content';
import { HOME_PAGE_CONSTANTS } from '@/lib/constants/home';

interface ContentCardProps {
  item: ContentItem;
}

export default function ContentCard({ item }: ContentCardProps) {
  const { typography } = HOME_PAGE_CONSTANTS;
  
  return (
    <div
      className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 sm:p-6 hover:shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
    >
      <h3 className={typography.heading.h3}>{item.title}</h3>
      <p className={`mt-2 ${typography.body.medium}`}>{item.description}</p>
      <div className="mt-4 flex flex-wrap items-center gap-2 sm:gap-4">
        <span
          className={`${typography.body.small} bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded-full whitespace-nowrap hover:scale-[1.05] transition-transform duration-200`}
        >
          {item.category}
        </span>
        <span className={`${typography.body.small} whitespace-nowrap`}>{item.readTime}</span>
      </div>
    </div>
  );
} 