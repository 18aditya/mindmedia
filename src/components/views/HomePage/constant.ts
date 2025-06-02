// Constants for HomePage
export const HOME_PAGE_CONSTANTS = {
  container: {
    maxWidth: 'max-w-full',
    padding: {
      mobile: 'px-4',
      tablet: 'sm:px-6',
      desktop: 'lg:px-8'
    }
  },
  spacing: {
    section: 'py-8',
    mobile: 'space-y-6',
    tablet: 'sm:space-y-8',
    desktop: 'lg:space-y-12'
  },
  
  // Typography constants
  typography: {
    heading: {
      h1: 'text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white',
      h2: 'text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-gray-100',
      h3: 'text-xl sm:text-2xl font-medium text-gray-700 dark:text-gray-200'
    },
    body: {
      large: 'text-base sm:text-lg text-gray-600 dark:text-gray-300',
      medium: 'text-sm sm:text-base text-gray-600 dark:text-gray-300',
      small: 'text-xs sm:text-sm text-gray-500 dark:text-gray-400'
    }
  },

  // Content constants
  content: {
    title: 'Welcome to MindMedia',
    subtitle: 'Your digital media platform',
    sections: [
      {
        id: 'featured',
        title: 'Featured Content',
        description: 'Discover our latest and most popular content'
      },
      {
        id: 'trending',
        title: 'Trending Now',
        description: 'See what\'s popular in the community'
      }
    ]
  },

  // Grid constants
  grid: {
    card: {
      mobile: 'grid-cols-1',
      tablet: 'sm:grid-cols-2',
      desktop: 'lg:grid-cols-3'
    },
    gap: {
      mobile: 'gap-4',
      tablet: 'sm:gap-6',
      desktop: 'lg:gap-8'
    }
  }
}; 