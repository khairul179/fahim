export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with khairul islam b was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Abdul Rahman',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Khairul Islam B\'s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John bradin',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Khairul Islam B. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Khairul Islam B was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'Speedline Auto parts',
    desc: 'GearXpert is a modern ecommerce platform for auto parts built for performance and usability. It helps users quickly find parts for cars and trucks with a sleek, bold UI.',
    subdesc:
      'Developed with React.js, Tailwind CSS, and modern ecommerce best practices, GearXpert is designed for vehicle enthusiasts and sellers.',
    href: 'https://speedlineautoparts.netlify.app/',
    texture: '/textures/project/speedline.webp',
    logo: '/assets/speedline-logo.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },

      {
        id: 3,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
      {
        id: 4,
        name: 'gsap',
        path: '/assets/gsap.png',
      },
    ],
  },
  {
    title: 'Tekisky Mart – Vendor-Based Marketplace',
    desc: 'An advanced eCommerce system supporting multi-vendor capabilities and user dashboards.',
    subdesc:
      'Full-stack platform built using MERN stack with secure authentication and admin controls.',
    href: 'https://tekiskymart.com/',
    texture: '/textures/project/Tekiskymart.webp',
    logo: '/assets/tekiskyMart-logo.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Node.js',
        path: '/assets/nodejs.png',
      },
      {
        id: 4,
        name: 'express.js',
        path: '/assets/express.png',
      },
      {
        id: 5,
        name: 'mongodb.js',
        path: '/assets/mongodb.png',
      },
    ],
  }
  ,
  {
    title: 'GoGroove – Trendy Online Store',
    desc: 'A vibrant and engaging eCommerce website with smooth UX and powerful UI, perfect for digital retail.',
    subdesc:
      'Created using the MERN stack with responsive design and smooth animations.',
    href: 'https://your-gogroove-link.com',
    texture: '/textures/project/GoGroove.webp',
    logo: '/assets/G.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Node.js',
        path: '/assets/nodejs.png',
      },
      {
        id: 4,
        name: 'express.js',
        path: '/assets/express.png',
      },
      {
        id: 5,
        name: 'mongodb.png',
        path: '/assets/mongodb.png',
      },
    ],
  },



];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 2,
    name: 'BRAC University 370 Lab Project',
    pos: 'Group Manager',
    duration: 'January 2025 – May 2025',
    title:
      'Spearheaded the development of a feature-rich admin panel, supervised cross-functional team operations, and onboarded new talent efficiently.',
    icon: '/assets/bracu.png', // Make sure this file exists in public/assets
    animation: 'typing',
  }


];
