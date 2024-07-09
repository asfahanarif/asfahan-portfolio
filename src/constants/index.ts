import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from '../types';

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from '../assets';

export const navLinks: TNavLink[] = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services: TService[] = [
  {
    title: 'React Js Developer',
    icon: mobile,
  },
  {
    title: 'Mern Stack Developer',
    icon: backend,
  },
  {
    title: 'CMS Developer',
    icon: web,
  },
  {
    title: 'Graphic Designer',
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: 'Frontend Developer',
    companyName: 'Cyber Natix',
    icon: starbucks,
    iconBg: '#E6DEDD',
    date: 'Sep 2021 - April 2023',
    points: [
      'Created and refined user interfaces using HTML, CSS, JavaScript, and Bootstrap.',
      'Implemented modern front-end frameworks and libraries.',
      'Collaborated with cross-functional teams to deliver high-quality web solutions.',
    ],
  },
  {
    title: 'Frontend Web Developer',
    companyName: 'InventPeers',
    icon: tesla,
    iconBg: '#383E56',
    date: 'July 2023 - Nov 2023',
    points: [
"Gained experience in various Tech Stacks, including CMS platforms.",
"Specialized in WordPress and Shopify.",
"Developed and optimized user interfaces.",
"Ensured responsive design across different devices.",
"Enhanced overall user experience on multiple client projects.",

    ],
  },
  {
    title: 'Web Application Developer',
    companyName: 'Cybros.Dev',
    icon: shopify,
    iconBg: '#383E56',
    date: 'Nov 2023 - Present',
    points: [
"Working with different testing tools and frameworks, content management systems and cross-functional teams to smoothly complete projects.",
"Using (Mern) React Js, Node Js, Express Js, Next Js, HTML, CSS, Bootstrap, Java Script, ES7-13 and XML to structure web pages and provide smooth navigation of internet.",

    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it's impossible to make a website as beautiful as our product, but Asfahan proved me wrong.",
    name: 'Zohaib Ahmad',
    designation: 'CTO',
    company: 'TheOrganio',
    image: 'https://alaliffoundation.com/assets/zohaib-BuKo3r0f.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Asfahan does.",
    name: 'Yasmeen Khan',
    designation: 'MD',
    company: 'CTC Real Estate Dubai',
    image: 'https://alaliffoundation.com/assets/female-TZPvFuuL.jpg',
  },
  {
    testimonial:
      "After Asfahan optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Aashir Ali',
    designation: 'OM',
    company: 'Al Alif Foundation',
    image: 'https://media.licdn.com/dms/image/C4E03AQHMt-CcENHqYA/profile-displayphoto-shrink_200_200/0/1598433956589?e=2147483647&v=beta&t=h4Q1gVk5juFwgWi7OiC75zGpbr2FvqpytQ660gmXUy4',
  },
  {
    testimonial:
      "Asfahan is a great web developer, who consistently delivers top-quality results on time",
    name: 'Ata Sultani',
    designation: 'CEO',
    company: 'inventPeers',
    image: 'https://media.licdn.com/dms/image/D4E03AQFjZAvZD9ervg/profile-displayphoto-shrink_200_200/0/1706852284282?e=2147483647&v=beta&t=8BtD6NlpIGBqryRYLiIUVB310LXpy9K_0Xd0ZtLuINw',
  },
];

const projects: TProject[] = [
  {
    name: 'Sky Arena',
    description:
      'Web-based platform that provides travel reviews, trip fares, or a combination of both. Over 1.5 billion people book travel per year, 70% of which is done online.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    sourceCodeLink: 'https://skyarena.vercel.app',
  },
  {
    name: 'Al Alif Foundation',
    description:
      'A website that increases the legitimacy of Non-profit organization, helps supporters better understand the cause, and solidifies the professionalism when soliciting support.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'tsx',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    sourceCodeLink: 'https://alaliffoundation.com/',
  },
  {
    name: 'Bookify',
    description:
      'Web application that allows customers to buy books online. Customers can search for a book by title or author using a web browser, add it to their shopping cart, and then purchase it using a debit or credit card transaction.',
    tags: [
      {
        name: 'mern',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    sourceCodeLink: 'https://thebookify.vercel.app',
  },
  
  
];

export { services, technologies, experiences, testimonials, projects };
