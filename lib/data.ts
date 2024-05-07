import campwithusImg from '@/public/images/camp-with-us.png'
import carcatalogImg from '@/public/images/car-catalog.png'
import filedriveImg from '@/public/images/file-drive.png'
import projectmanagementImg from '@/public/images/project-management.png'
import reactfoodImg from '@/public/images/react-food.png'

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
    link: 'https://github.com/bbyc4kes/file-drive',
  },
  {
    title: 'AutoHub',
    description:
      'AutoHub - Car catalog site built on TypeScript, Tailwind CSS, and Next.js, with efficient data fetching using Axios.',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Axios', 'Headless'],
    imageUrl: carcatalogImg,
    link: 'https://github.com/bbyc4kes/car-catalog-NEXT.js',
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
    link: 'https://github.com/bbyc4kes/campwithus',
  },
  {
    title: 'ProjectManagement',
    description:
      'Project Management Project - React app demonstrating core functionalities using Tailwind CSS and custom CSS for styling.',
    tags: ['React', 'Tailwind', 'Framer'],
    imageUrl: projectmanagementImg,
    link: 'https://github.com/bbyc4kes/project-management-project',
  },
  {
    title: 'ReactFood',
    description:
      'ReactFood - Food order project using React Context API for data handling and API integration.',
    tags: ['React', 'JavaScript', 'Express.js', 'Axios'],
    imageUrl: reactfoodImg,
    link: 'https://github.com/bbyc4kes/reactfood',
  },
] as const

export const skillsData = [
  ['JavaScript', '/svgs/javascript-js.svg'],
  ['TypeScript', '/svgs/typescript-icon.svg'],
  ['React', '/svgs/react.svg'],
  ['Next.js', '/svgs/nextjs.svg'],
  ['Node.js', '/svgs/node-js.svg'],
  ['Express', '/svgs/express-original.svg'],
  ['Tailwind', '/svgs/tailwind-css.svg'],
  ['Framer', '/svgs/framer.svg'],
  ['Shadcn', '/svgs/shadcnui.svg'],
  ['Headless', '/svgs/brand-headlessui.svg'],
  ['Redux', '/svgs/redux-original.svg'],
  ['Prisma', '/svgs/file-type-light-prisma.svg'],
  ['MongoDB', '/svgs/mongodb-original.svg'],
  ['PostgreSQL', '/svgs/postgresql.svg'],
  ['Cloudinary', '/svgs/cloudinary.svg'],
  ['Clerk', '/svgs/clerk.svg'],
  ['Axios', '/svgs/axios.svg'],
  ['HTML', '/svgs/file-type-html.svg'],
  ['CSS', '/svgs/file-type-css.svg'],
  ['Git', '/svgs/git.svg'],
  ['GitHub', '/svgs/github.svg'],
  ['', '/svgs/etc.svg'],
] as const
