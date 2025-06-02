import { Metadata } from 'next';

export const generateMetadata = (): Metadata => {
  return {
    title: 'MindMedia - Your Digital Media Platform',
    description: 'Discover the latest trends in digital media, creative storytelling, and content creation tips.',
    keywords: ['digital media', 'content creation', 'social media', 'trending content'],
    openGraph: {
      title: 'MindMedia - Your Digital Media Platform',
      description: 'Discover the latest trends in digital media, creative storytelling, and content creation tips.',
      type: 'website',
      locale: 'en_US',
      siteName: 'MindMedia',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'MindMedia - Your Digital Media Platform',
      description: 'Discover the latest trends in digital media, creative storytelling, and content creation tips.',
    },
  };
}; 