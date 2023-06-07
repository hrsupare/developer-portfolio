import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Himanshu Supare',
  title: "Hi, I'm Himanshu",
  description:
    "In addition to Node.js, Express, TypeScript, Nest.js, REST API, GraphQL, MongoDB, and PostgreSQL, I am a backend software developer. I design and implement scalable and effective backend systems using my expertise in these technologies, ensuring smooth data communication and efficient database management. I approach my work with a meticulous approach, delivering solid solutions that adhere to the highest requirements for performance and dependability.",
  resumeLink:
    'https://drive.google.com/file/d/1TOlcxH2FV_8jJS-z00rcrJz9gBB0jDoi/view?usp=drivesdk',
};

export const openSource = {
  githubUserName: 'hrsupare',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://github.com/hrsupare',
  linkedin: 'https://www.linkedin.com/in/himanshusupare',
  github: 'https://github.com/hrsupare',
  instagram: 'https://instagram.com/its_mr.him_?igshid=MzNlNGNkZWQ4Mg==',
  twitter: 'https://twitter.com/hsupare313?t=xzaJB0XKPbP6xjfz84pdAw&s=09',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'An adventurous backend developer with an insatiable curiosity for exploring various technology stacks.',
  data: [
    {
      title: 'Backend Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ primary focus is on building scalable and performant backend systems. Leveraging the power of Node.js and its event-driven architecture'
        ),
        emoji('⚡ Creating RESTful and GraphQL APIs, enabling smooth data transmission and integration with different front-end systems'),
        emoji('⚡  Writing cleaner code, easier testing, and better code maintainability.'),
        emoji('⚡ Building RESTful APIs in Express.js & Nest.js REST Framework'),
        emoji('⚡ Working with MongoDB, a popular NoSQL database, known for its flexibility and scalability And PostgreSQL, a powerful open-source relational database . '),
      ],
      softwareSkills: [
        {
          skillName: 'JavaScript',
          fontAwesomeClassName: 'logos:javascript',
        },
        {
          skillName: 'TypeScript',
          fontAwesomeClassName: 'logos:typescript',
        },
        {
          skillName: 'Nodejs',
          fontAwesomeClassName: 'logos:nodejs',
        },
        {
          skillName: 'expressjs',
          fontAwesomeClassName: 'logos:express',
        },
        {
          skillName: 'nestjs',
          fontAwesomeClassName: 'logos:nestjs',
        },
        {
          skillName: 'RestApi',
          fontAwesomeClassName: 'logos:rest',
        },
        {
          skillName: 'graphQL',
          fontAwesomeClassName: 'logos:graphql',
        },
       
        {
          skillName: 'mongodb',
          fontAwesomeClassName: 'logos:mongodb',
        },
        {
          skillName: 'PostgreSQL',
          fontAwesomeClassName: 'logos:postgresql',
        },
        {
          skillName: 'NPM',
          fontAwesomeClassName: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          fontAwesomeClassName: 'logos:yarn',
        },
        {
          skillName: 'Github',
          fontAwesomeClassName: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          fontAwesomeClassName: 'logos:docker-icon',
        },
        {
          skillName: 'Github Actions',
          fontAwesomeClassName: 'logos:github-actions',
        },
        {
          skillName: 'AWS',
          fontAwesomeClassName: 'logos:aws',
        },
      ],
    },
    
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Software Development', //Insert stack or technology you have experience in
    progressPercentage: '90', //Insert relative proficiency in percentage
  },
  {
    Stack: 'JavaScript',
    progressPercentage: '70',
  },
  {
    Stack: 'TypeScript',
    progressPercentage: '60',
  },
  {
    Stack: 'Node.js',
    progressPercentage: '60',
  },
  {
    Stack: 'Frameworks',
    progressPercentage: '80',
  },
  {
    Stack: 'Database',
    progressPercentage: '80',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'RTMNU University Nagpur',
    subHeader: 'Bachelor in Mechanical Engineering',
    duration: 'September 2019 - April 2022',
    desc: 'Participated in the research of XXX and published 3 papers.',
    grade: 'Grade A',
    descBullets: [
      'Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    ],
  },
   
];

export const experience: ExperienceType[] = [
  {
    role: 'Backend Trainee',
    company: 'FunctionUp',
    companyLogo: 'https://media.licdn.com/dms/image/C4D0BAQHn-mst7Jf8Pw/company-logo_200_200/0/1638195127235?e=2147483647&v=beta&t=PDDQjWKWpGJwb8n_r4PG7kBXblPtJYzC-Dtyy_oA0B8',
    date: 'Sept 2021',
    desc: 'Worked as a Django Developer to integrate Stripe payment gateway in wapidu.com and Created REST APIs using Django REST Framework to integrate Django Stripe backend to Vue.js Frontend and Deployed it on Azure based Docker container registry.',
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
   
  {
    role: 'Software Developer',
    company: 'Apera Solutions',
    companyLogo: 'https://i.pinimg.com/736x/72/3d/da/723dda1879c5a3c2171992e69d810d7e.jpg',
    date: 'Sept 2021',
    desc: 'Worked as a Django Developer to integrate Stripe payment gateway in wapidu.com and Created REST APIs using Django REST Framework to integrate Django Stripe backend to Vue.js Frontend and Deployed it on Azure based Docker container registry.',
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
];

export const projects: ProjectType[] = [
  {
    name: 'Email Based authentication System',
    desc: 'The Email-Based Authentication System project implements a secure method of verifying user identities by utilizing email addresses as the primary authentication factor.',
    github: 'https://github.com/hrsupare/EmailBasedAuthentication',
     
  },
  {
    name: 'Blogging Site',
    desc: 'The Blogging Site project is a web-based platform where users can create, publish, and share their own articles or blog posts. It offers features  categorization, and user profiles, fostering community for content creators and readers alike.',
    github: 'https://github.com/hrsupare/Project-1-BloggingSite',
  },
  {
    name: 'URL Shortner',
    desc: 'The URL Shortener project provides a convenient way to shorten long URLs into concise and manageable links, making them easier to share and remember.',
    github: 'https://github.com/hrsupare/Project-4-URL-Shortner',
  },
  {
    name: 'Ecommerce Site',
    desc: 'The Ecommerce Site project is an online platform that enables businesses to showcase and sell products or services to customers, facilitating seamless transactions and a convenient shopping experience.',
    github: 'https://github.com/hrsupare/E-cartSite',
  },
];
/*
export const feedbacks: FeedbackType[] = [
  {
    name: 'John Smith',
    feedback:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  },
  {
    name: 'John Smith',
    feedback:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  },
];*/

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Himanshu Supare',
  description:
    'A passionate Backend Web Developer.',
  author:  'Himanshu Supare',
  image: 'https://avatars3.githubusercontent.com/u/59178380?v=4',
  url: 'https://developer-portfolio-hrsupare.vercel.app',
  keywords: [
    'Himanshu',
    'Himanshu Supare',
    '@hsupare313',
    'hrsupare',
    'Portfolio',
    'Himanshu Portfolio ',
    'Himanshu Supare Portfolio',
  ],
};
