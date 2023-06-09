import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
  FeedbackType,
  BlogCardType,
} from './types/sections';
 import nodejs from './nodejs.png'
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
    progressPercentage: '80',
  },
  {
    Stack: 'TypeScript',
    progressPercentage: '60',
  },
  {
    Stack: 'Node.js',
    progressPercentage: '75',
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
    desc: 'Participated in the research of innovative and automated automobile washing systems..',
    grade: 'Grade A',
    descBullets: [
      'Fundamental Engineering Principles',
      'Design and CAD Software',
      'Manufacturing Processes and Materials'
    ],
  },

];

export const experience: ExperienceType[] = [
  {
    role: 'Backend Trainee',
    company: 'FunctionUp',
    companyLogo: 'https://media.licdn.com/dms/image/C4D0BAQHn-mst7Jf8Pw/company-logo_200_200/0/1638195127235?e=2147483647&v=beta&t=PDDQjWKWpGJwb8n_r4PG7kBXblPtJYzC-Dtyy_oA0B8',
    date: 'May 2022 - Nov 2022',
    desc: 'The individual has received training in core web backend technologies including JavaScript, Node.js, and Express.js. i have practical experience working with NoSQL database MongoDB for efficient data management. i are familiar with cloud technologies, particularly AWS S3, for seamless file upload and read operations. Additionally, i have hands-on experience with data caching using Redis. i possess a solid understanding of distributed version control systems such as Git and GitHub for effective collaboration and code management. Furthermore, i have intermediate knowledge of Data Structures and Algorithms, enabling them to optimize system performance and efficiency..',
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },

  {
    role: 'Software Developer',
    company: 'Apera Solutions',
    companyLogo: 'https://i.pinimg.com/736x/72/3d/da/723dda1879c5a3c2171992e69d810d7e.jpg',
    date: 'dec 2022',
    desc: "As a backend developer at Apera Software, I design, implement, and maintain server-side code for the software's applications and services. My expertise lies in Node.js, frameworks like Express and Nest.js, and writing graphQL and rest APIs. I work with databases like PostgreSQL or MongoDB, ensuring data integrity and optimal performance. API development and integration are crucial for seamless communication between software ecosystem components. My focus is on system architecture, scalability, and thorough testing to deliver reliable and high-performing software solutions.",
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

export const feedbacks: FeedbackType[] = [

  {
    name: 'John Smith',
    feedback:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  },
  // {
  //   name: 'John Smith',
  //   feedback:
  //     'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  // },
];
export const BlogsContent: BlogCardType[] = [

  {
    name: 'Backend JavaScript: Unveiling the Powerhouse of Web Development',
    discription:
      'Welcome, fellow adventurers of the digital realm! Today, we embark on an exhilarating journey through the world of backend JavaScript. But fear not, for this adventure will be as easy to follow as a friendly guide and as engaging as a captivating story.....',
    link: "https://link.medium.com/pwCY1IZoHAb" ,
    blogImage:"https://miro.medium.com/v2/resize:fit:1100/format:webp/1*BCtxoa2InpbdBo92b3X9xg.png"
  },
  {
    name: 'Node.js: The Fun and Friendly Magician of Web Development…',
    discription:
      'Hello, fellow programmers! Prepare yourself for an exciting journey as we explore the magnificent world of Node.js. It’s like having a hilarious magician at your disposal who can easily perform spectacular web development feats by simply waving their wand.',
    link: "https://link.medium.com/PEf1CC1oHAb" , 
    blogImage:"https://buddy.works/guides/covers/test-nodejs-app/share-nodejs-logo.png"
  },
];
// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Himanshu Supare',
  description:
    'A passionate Backend Web Developer.',
  author: 'Himanshu Supare',
  image: "https://photos.app.goo.gl/gmLQnYPE3uU4EUjV7",
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
