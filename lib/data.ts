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

export const images = {
  campwithusImg,
  carcatalogImg,
  filedriveImg,
  projectmanagementImg,
  reactfoodImg,
}
export const projectsData = [
  {
    title: 'FileDrive',
    description:
      'FileDrive - Next.js app using Convex for decentralized storage, TypeScript for code quality, and Clerk for user management.',
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
      'AutoHub - Car catalog site built on TypeScript, Tailwind CSS, and Next.js, with efficient data fetching using Axios.',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Axios', 'Headless'],
    imageUrl: carcatalogImg,
  },
  {
    title: 'CampWithUs',
    description:
      'Architected backend with Express.js, frontend features with HTML5/CSS, and facilitated smooth client-server communication via AJAX.',
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
      'Project Management Project - React app demonstrating core functionalities using Tailwind CSS and custom CSS for styling.',
    tags: ['React', 'Tailwind', 'Framer'],
    imageUrl: projectmanagementImg,
  },
  {
    title: 'ReactFood',
    description:
      'ReactFood - Food order project using React Context API for data handling and API integration.',
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
