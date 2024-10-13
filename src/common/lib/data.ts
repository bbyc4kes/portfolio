import React from 'react';

import beachwaver from '@/../public/images/beachwaver.jpg';
import slp from '@/../public/images/slp.png';
import infosoft from '@/../public/images/infosoft.png';
import slnvy from '@/../public/images/slnvy.png';
import thinkless from '@/../public/images/thinkless.jpeg';
import carcatalogImg from '@/../public/images/car-catalog.png';
import cpfb from '@/../public/images/cpfb.png';
import projectmanagementImg from '@/../public/images/project-management.png';
import reactfoodImg from '@/../public/images/react-food.png';
import jitsi from '@/../public/images/jitsi.png';
import ukg from '@/../public/images/ukg.png';
import mas from '@/../public/images/mas.png';
import {
  BicepsFlexed,
  BookOpenText,
  Cog,
  GitFork,
  HandHelping,
  Handshake,
  SquareActivity
} from 'lucide-react';

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
    name: 'Experience',
    id: 'experience',
  },
  {
    name: 'Education',
    id: 'education',
  },
  {
    name: 'Skills',
    id: 'skills',
  },
  {
    name: 'Contact',
    id: 'contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'System Analyst',
    location: 'Central Provident Fund Board, Singapore',
    description: `
    This position main responsibility is to make sure the entire CPFB website is 
    running in smooth condition without having any daily basis issues. In this role 
    I have to monitor, investigate and fix issues as well as contribute to the recurrent 
    routines like verifying security threats, monitor system misbehavior and remedy them. 
    `,
    icon: React.createElement(SquareActivity),
    date: 'Jan 2024–Now',
  },
  {
    title: 'Associate Tech Lead',
    location: 'Zone24x7, Colombo',
    description: `
    Main role is to work with the team architect and deliver the holistic goals with the help 
    of the rest of the team members and work with cross functional teams and lead the entire team 
    towards short-term as well as long-term goals.
    `,
    icon: React.createElement(GitFork),
    date: 'May 2023–Dec 2023',
  },
  {
    title: 'Senior Software Engineer',
    location: 'KEEN MIND MOBILE, Colombo',
    description: `Role was to complete one project which I used to work in IronOne Technologies, previously. They wanted
    my help to complete this ongoing project before timeline. I and IronOne Technologies
    were working through Keen Mind Mobile Solutions to complete it. This was mainly a part-time contract`,
    icon: React.createElement(Handshake),
    date: 'Jun 2023 - Dec 2023',
  },
  {
    title: 'Senior Software Engineer',
    location: 'IronOne Technologies, Colombo',
    description: `This role focuses on leading the frontend development team, 
    contributing to backend projects, and representing the company in client 
    meetings to build strong relationships. Key responsibilities include mentoring
     junior engineers, solving technical problems, and ensuring on-time project 
     delivery within budget by collaborating with cross-functional teams. 
     Additionally, it involves staying updated with technology trends and 
     working closely with the team leader to overcome development challenges.`,
    icon: React.createElement(Cog),
    date: 'Oct 2021 - May 2023',
  },
  {
    title: 'Senior Software Engineer',
    location: 'Infosoft Lanka Pvt Ltd, Colombo',
    description: `This role involved managing a small front-end team and working directly with client
    to understand the requirements and directly handle, design, develop, test and deploy all the phases within the team.
    This role did not have any cross-functional support for any other day to day job.`,
    icon: React.createElement(BicepsFlexed),
    date: 'Apr 2020 - Oct 2021',
  },
  {
    title: 'Software Engineer',
    location: 'Infosoft Lanka Pvt Ltd, Colombo',
    description: `Understand the requirements clearly from the BA teams and work with senior players 
    by implementing the design demonstrated by the lead roles. Support cross-functional teams to 
    collaborate with technical teams to make the work flow smoother.`,
    icon: React.createElement(Cog),
    date: 'Jul 2017 - Apr 2020',
  },
  {
    title: 'Associate Software Engineer',
    location: 'Infosoft Lanka Pvt Ltd, Colombo',
    description: `The role was a part-time one. After my internship ended my boss wanted me to 
    stay and work in the projects to be commenced at that time. Since I was also working in my final year academics
    I had to take this as a part-time opportunity. It was on-premise so I worked in office at night and on weekends to 
    complete the office hours. Main job was to contribute to the development duties, implementation and bug fixing.`,
    icon: React.createElement(HandHelping),
    date: 'Aug 2016 - Jul 2017',
  },
  {
    title: 'Software Engineering Trainee',
    location: 'Infosoft Lanka Pvt Ltd, Colombo',
    description: `This role was my very first job role and was my internship. Role was to understand the requirements of the given projects,
    understand the corporate work-flow and how's is the whole software development process is working out. And contribute
    to the implementation of the code with the given scopes and occasional challenges.`,
    icon: React.createElement(BookOpenText),
    date: 'Feb 2016 - Jul 2016',
  },
] as const;

export const educationsData = [
  {
    title: 'BSc (Hons) in Information Technology',
    location: 'University of Moratuwa, Colombo',
    description: `
    After completing my advanced level examination with good grades, I got selected
     for the degree program of BSc (Hons) in Information Technology at the University of 
     Moratuwa, Sri Lanka. Which I completed successfully with a second-class degree in 2017.
    `,
    icon: React.createElement(SquareActivity),
    date: '2013-2017',
  },
  {
    title: 'Advanced Level',
    location: 'Vijayaba National College, Maho',
    description: `
    Seated for my advanced level examination in physical science stream with combined maths, Physics and chemistry in 2011.
    `,
    icon: React.createElement(GitFork),
    date: '2007-2011',
  },
  {
    title: 'Ordinary Level',
    location: 'Yapahuwa Central College, Yapahuwa',
    description: `
    Seated for my ordinary level examination in 2011. I took Maths, Sinhala language, English language,
    Science, Buddhism, History, Social Studies, Drama and Theatre 
    `,
    icon: React.createElement(GitFork),
    date: '2007-2011',
  }
] as const;

export const images = {
  campwithusImg: beachwaver,
  carcatalogImg,
  filedriveImg: cpfb,
  projectmanagementImg,
  reactfoodImg,
};

export const projectsData = [
  {
    title: 'Central Provident Fund Board',
    role: "System Analyst",
    company: "Central Provident Fund Board, Singapore",
    description:
      `A very comprehensive and complex application for managing the
       entire provident fund process. There are various modules/ products
        like healthcare, housing, retirement etc. The different modules are
         handled by totally different departments as products. My team is though, 
         responsible for the whole application throughout every product.`,
    tags: [
      '.NET Core',
      'Microservice',
      'Azure Cloud',
      'Windows service',
      'Azure DevOps',
      'Angular',
      'Redis',
      'MS SQL',
      'SonarCube',
    ],
    imageUrl: cpfb,
    teamSize: "500+",
    responsibilities: [
      "Supporting the cross-functional teams to perform day to day functions",
      "Provide testing support for the testers",
      "Daily maintenance of the application background services like scheduled jobs",
      "Investigating critical production bugs and providing solutions as well as fixes in a timely manner",
      "Investigating and fixing the non-prod bugs so the internal users can test the product smoothly",
      "Working with the front-line staff of the application to manage the production queries of the CPF members",
      "Monitoring and clearing the security threats towards the system and analyze the impacts",
    ],
    startDate: "Jan 2024",
    endDate: "Now"
  },
  {
    title: 'Banking and Credit Union System',
    role: "Associate Tech Lead",
    company: "Zone24x7, Colombo",
    description: `A very comprehensive and security concern 
    financial application that provides appointment support, 
    lobby assistance, final stage data analysis, and detailed 
    reports for each employee working in each sector. Cybersecurity 
    plays a larger role in this, as it is a bigger concern for the client 
    with regular PEN tests and other types of audits like SonarCube, etc. 
    And the project is planned to move forward with a large boost by providing 
    data analytics with predictive models`,
    tags: [
      '.NET Core',
      'Ocelot',
      'CQRS',
      'RabbitMQ',
      'Azure DevOps',
      'Angular',
      'MS SQL',
      'SonarCube'
    ],
    imageUrl: ukg,
    teamSize: 53,
    responsibilities: [
      "Supporting the team leads to managing the team",
      "Give support to the team as needed in tech stack",
      "Implement the core logics in the given task break down",
      "Introduce and implement a whole new security layer to prevent data breaches",
      "Update the Angular version from 9 to 16 in terms of security threats as well as application slickness",
      "Lead regular dev syncs, keep everyone upto date with new tech used, and support developers through technical barriers",
      "Plan the data analysis with artificial intelligence using the collected data throughout the lifetime of the application, which was about 10 years",
      "Do regular PR review to maintain the code quality and spot any kind of security threat that can be problematic during PEN test and other cyber security audits",
    ],
    startDate: "May 2023",
    endDate: "Dec 2023"
  },
  {
    title: 'Garment Factory Management and Printing System',
    role: "Senior Software Engineer",
    company: "IronOne Technologies and through KeenMMS, Colombo",
    description: `A very comprehensive cloth printing management 
    suit was created for a popular Sri Lankan apparel exporter brand. 
    This contains everything from the designer end (who designs the 
      artwork to print on the given cloth) to the warehouse end 
      (who prints the artwork and sends it to distribution). In between, 
      there are a few other roles that manage various tasks needed in the underlying process`,
    tags: [
      '.NET Core',
      'Azure AD',
      'Azure Service Bus',
      'Azure Functions',
      'Azure DevOps',
      'Angular',
      'MS SQL',
    ],
    imageUrl: mas,
    teamSize: 12,
    responsibilities: [
      "Leading the front-end team",
      "Designing and planning the states and front - end architecture",
      "Developing the front-end with Angular 13, as well as contributing to back-end design and development with.NET Core",
      "Write Azure functions, Swagger documentation, Azure service bus implementation, and Azure cloud handling",
      "Do code reviews for junior developers and colleagues",
      "Recently, I've been given the responsibility of leading both front-end and back-end teams and attending client meetings as well",
    ],
    startDate: "October 2021",
    endDate: "Dec 2023"
  },
  {
    title: 'Video Consultation Platform',
    role: "Senior Software Engineer",
    company: "IronOne Technologies and through KeenMMS, Colombo",
    description:
      `A video consultation application for a European healthcare 
      brand was developed with a dashboard integrated for the 
      various user roles to interact, maintain the history, 
      and record the consultation process. The application can be used by
       the consultants to interact with their patients through a video call
        based on their subscription and record certain events of the session, 
        progress, and various other domain concerns.`,
    tags: [
      'NodeJS',
      'Cognito',
      'ReactJs',
      'Angular',
      'Docker',
      'Jitsi',
      'MySQL'
    ],
    imageUrl: jitsi,
    teamSize: 9,
    responsibilities: [
      "Personalize Customize the Jitsi Meet app to meet the customer's requirements",
      "Develop a new dashboard with Angular 12 to manage the organizational structure and other business concerns",
      "Debug and fix bugs in the NodeJs backend",
      "Support client with custom configurations for the app",
    ],
    startDate: "January 2022",
    endDate: "Dec 2023"
  },
  {
    title: 'Brand Ambassador Platform',
    role: "Senior Software Engineer",
    company: "IronOne Technologies, Colombo",
    description:
      `Developed a brand ambassador platform for a popular beauty care brand in Australia. 
      The client needed to distribute plans and information among the brand ambassadors, 
      manage their tasks, and track progress as well`,
    tags: ['.NET Core', 'Angular', 'Cognito', 'Flutter', 'My SQL'],
    imageUrl: beachwaver,
    teamSize: 12,
    responsibilities: ["Contribute to the back-end development of the application using.NET Core"],
    startDate: "July 2022",
    endDate: "Dec. 2022"
  },
  {
    title: 'An API-Based Solution Collection',
    role: "Software Engineer/ Senior Software Engineer",
    company: "Infosoft Lanka Pvt. Ltd, Colombo",
    description:
      `Contributed to developing a comprehensive API solution set for a 
      client in Australia as an outsourced talent. The project had a unique 
      business case and an interesting business approach. The application contained 
      many simple to medium-scale software tools and solutions on an API basis, 
      including agriculture and farming tools, questionnaire-creating tools, a 
      content management system, health care-providing tools, and various other business
       needs. Even though the main product was the API, we've developed the Angular 8 
       front-end as well to do the testing, POC, DOD, and demonstrations`,
    tags: ['.NET Framework', 'Azure Cloud', 'Angular', 'Azure DevOps', 'Orient DB'],
    imageUrl: thinkless,
    teamSize: 6,
    responsibilities: [
      "Lead a small front-end team and develop the front-end",
      "Handle deployments from Azure DevOps and demonstrate the DOD to our client or product owner in each release we have planned after the iteration",
      "Demonstrate the feature at the end of the feature's development on UAT",
  ],
    startDate: "August 2019",
    endDate: "Sept. 2021"
  },
  {
    title: 'Suspect Management System',
    role: "Software Engineer",
    company: "Infosoft Lanka Pvt. Ltd, Colombo",
    description:
      `This web-based solution was created for an authorized government body to 
      deploy at several sensitive locations where suspects can be identified to 
      track people who could possibly be suspects. We used a few biometric methods 
      to record and search for possible suspects. Hardware infrastructure support was also included`,
    tags: ['.NET MVC','Entity Framework', 'jQuery', 'Semantic UI', 'Military-grade biometric tools', 'My SQL'],
    imageUrl: slp,
    teamSize: 4,
    responsibilities: [
      "Design and create the application's back-end and front-end with.NET MVC",
      "Contribute to the suspect record and search functionality development as well",
      "Develop the frontend using SemanticUI and JavaScript",
      "Implement a data security layer for the security of the collected data as well as the application infrastructure",
    ],
    startDate: "April 2018",
    endDate: "Dec. 2019"
  },
  {
    title: 'Fund Management System: Large Scale',
    role: "Associate Software Engineer/ Software Engineer",
    company: "Infosoft Lanka Pvt. Ltd, Colombo",
    description:
      `A large-scale fund management system developed for the Sri Lanka Navy's 
      other ranks managed nearly 100,000 active users and many more financial accounts 
      at the time of the deployment. This project consisted of pretty much the same 
      basic business model as the fund management system I worked on for the Navy's 
      officers. But some of the logic, policy requirements, implementation, and 
      security concerns were somewhat different from that project`,
    tags: ['.NET MVC', 'Entity Framework,', 'jQuery', 'Bootstrap', 'MS SQL'],
    imageUrl: slnvy,
    teamSize: 10,
    responsibilities: [
      "Contribute to the development of the application with .NET MVC 5",
      "Understand and deliver the financial use cases within the scope of the application",
      "Create the frontend using bootstrap and jQuery",
    ],
    startDate: "January 2017",
    endDate: "Jan. 2018"
  },
  {
    title: 'Fund Management System: Medium Scale',
    role: "Associate Software Engineer",
    company: "Infosoft Lanka Pvt. Ltd, Colombo",
    description:
      `Developed a medium-scale fund management system for Sri Lanka Navy 
      officers . At the time of the first release, over 10,000 members had 
      registered in the application . This included monthly and annual contributions, 
      debit-credit account balancing, pay-record maintenance, loan management, communication 
      between banking APIs to get in sync, and several other critical financial features to develop for the client's concern`,
    tags: ['.NET MVC', 'Entity Framework,', 'jQuery', 'Bootstrap', 'MS SQL'],
    imageUrl: slnvy,
    teamSize: 10,
    responsibilities: [
      "Contribute to the development of the .NET MVC application",
      "Create the frontend using bootstrap and jQuery"
    ],
    startDate: "July 2016",
    endDate: "Jan. 2017"
  },
  {
    title: 'HR Management System',
    role: "Trainee Software Engineer",
    company: "Infosoft Lanka Pvt. Ltd, Colombo",
    description:
      `Developed a compact HR management system 
      for the employer company (Infosoft Lanka Pvt. Ltd.). 
      Attendance registry, employee lookup, leave module, company calendar, 
      branches, and notice posting features were included.`,
    tags: ['.NET MVC', 'Entity Framework,', 'jQuery', 'Bootstrap', 'MS SQL'],
    imageUrl: infosoft,
    teamSize: 10,
    responsibilities: [
      "Go through the existing old desktop application",
      "Understand the requirement and develop a web-based solution for that requirement",
      "Add new features as requested by the stakeholder.",
    ],
    startDate: "February 2016",
    endDate: "July 2016"
  },
] as const;

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
  ['MySQL', '/svgs/MySQL.svg'],
  ['Tanstack Query', '/svgs/react-query-seeklogo.svg'],
  ['Tanstack Table', '/svgs/db-table-svgrepo-com.svg'],
  ['Cloudinary', '/svgs/cloudinary.svg'],
  ['Docker', '/svgs/Docker.svg'],
  ['Clerk', '/svgs/clerk.svg'],
  ['Axios', '/svgs/axios.svg'],
  ['HTML', '/svgs/file-type-html.svg'],
  ['CSS', '/svgs/file-type-css.svg'],
  ['Sass', '/svgs/Sass.svg'],
  ['Git', '/svgs/git.svg'],
  ['GitHub', '/svgs/github.svg'],
  ['', '/svgs/etc.svg'],
] as const;
