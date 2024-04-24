import campwithusImg from '@/public/camp-with-us.png'
import carcatalogImg from '@/public/car-catalog.png'
import filedriveImg from '@/public/file-drive.png'
import projectmanagementImg from '@/public/project-management.png'
import reactfoodImg from '@/public/react-food.png'

export const links = [
  {
    name: 'Home',
    id: 'home',
  },
  {
    name: 'About',
    id: 'about',
  },
  {
    name: 'Projects',
    id: 'projects',
  },
  {
    name: 'Skills',
    id: 'skills',
  },
  {
    name: 'Contact',
    id: 'contact',
  },
] as const

export const projectsData = [
  {
    title: 'FileDrive',
    description:
      'FileDrive - File Storage App built using Next.js, leveraging Convex for decentralized storage, and TypeScript for robust code quality. With Convex and Clerk, manage user roles and permissions efficiently, controlling data flow and mutations seamlessly. Experience streamlined file management with our comprehensive solution.',
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'Convex',
      'Clerk',
      'Shadcn',
      'Tailwind',
    ],
    imageUrl: filedriveImg,
  },
  {
    title: 'AutoHub',
    description:
      'AutoHub is a sleek car catalog site built on TypeScript, Tailwind CSS, and Next.js. It delivers a seamless browsing experience, powered by efficient data fetching with Axios. The site integrates Headless UI for accessibility and user interaction.',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Axios', 'Headless'],
    imageUrl: carcatalogImg,
  },
  {
    title: 'CampWithUs',
    description:
      'As CampWithUs lead developer, Maksym Azimov wore multiple hats, handling design, development, and project management. He architected the backend with Express.js, crafted frontend features with HTML5/CSS, and facilitated smooth client-server communication via AJAX. Maksym excelled in integrating third-party services, improving user experience, and executing CRUD operations efficiently. ',
    tags: [
      'JavaScript',
      'Express.js',
      'MongoDB',
      'Cloudinary',
      'EJS',
      'Prisma',
    ],
    imageUrl: campwithusImg,
  },
  {
    title: 'ProjectManagement',
    description:
      'Project Management Project" is a robust web application showcasing essential functionalities of React, Tailwind CSS, and CSS. Leveraging the power of React for dynamic user interfaces, and Tailwind CSS along with custom CSS for styling, this project demonstrates fundamental features for efficient project management. ',
    tags: ['React', 'Tailwind', 'Framer'],
    imageUrl: projectmanagementImg,
  },
  {
    title: 'ReactFood',
    description:
      'ReactFood is a food order project spotlighting React Context API for efficient data handling and API integration. Combining fundamental and advanced techniques, it delivers a dynamic user interface, real-time data fetching, and seamless state management for a delightful ordering experience.',
    tags: ['React', 'JavaScript', 'Express.js', 'Axios'],
    imageUrl: reactfoodImg,
  },
] as const

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Shadcn',
  'Headless',
  'Prisma',
  'MongoDB',
  'Redux',
  'Express',
  'Cloudinary',
  'Clerk',
  'Convex',
  'Axios',
  'Framer Motion',
] as const
