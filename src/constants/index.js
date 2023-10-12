import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  reactjs,
  tailwind,
  git,
  figma,
  sameer,
  abdul,
  aslam,
  knk,
  agripoint,
  dotcom,
  elearning,
  knkbd,
  reactportfolio,
  python,
  django,
  aws,
  firebase,
  photoshop,
  illustrator,
  aftereffects,
  arrowlink,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Graphic Designer",
    icon: backend,
  },
  {
    title: "Video Editor",
    icon: mobile,
  },
  {
    title: "Freelancer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "Javascript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "aws",
    icon: aws,
  },
  {
    name: "firebase",
    icon: firebase,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Photoshop",
    icon: photoshop,
  },
  {
    name: "Illustrator",
    icon: illustrator,
  },
  {
    name: "After Effects",
    icon: aftereffects,
  },
];

// const experiences = [
//   {
//     title: "React.js Developer",
//     company_name: "Starbucks",
//     icon: starbucks,
//     iconBg: "#383E56",
//     date: "March 2020 - April 2021",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "React Native Developer",
//     company_name: "Tesla",
//     icon: tesla,
//     iconBg: "#E6DEDD",
//     date: "Jan 2021 - Feb 2022",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Web Developer",
//     company_name: "Shopify",
//     icon: shopify,
//     iconBg: "#383E56",
//     date: "Jan 2022 - Jan 2023",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Full stack Developer",
//     company_name: "Meta",
//     icon: meta,
//     iconBg: "#E6DEDD",
//     date: "Jan 2023 - Present",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
// ];

const testimonials = [
  {
    testimonial:
      "Thanks to Arshad's visually appealing marketing materials, our restaurant has seen a significant increase in customers. The app has also solved our major problem of taking orders on phone calls and keeping track of our delivery boys. The animated restaurant promo created by him was loved by both me and our customers. Overall, he has been instrumental in enhancing our restaurant's brand and customer experience.",
    name: "Sameer Sarguroh",
    designation: "Owner",
    company: "Hotel Dot Com",
    image: sameer,
  },
  {
    testimonial:
      "The boy understood our needs very well and always produced impressive designs which were never questioned. His work was even posted as a poster multiple times and was included in a TV ad once. We were fully satisfied with his work and will recommend his work to others.",
    name: "Aslam Khan",
    designation: "President",
    company: "Harnai College",
    image: aslam,
  },
  {
    testimonial:
      "My brother's consultation was professional and effective in growing my Youtube channel 'Islamic Knowledge'. We reached 12.5k+ views and 330+ subscribers in our first month and started another channel where he edited some amazing videos for us. Our new channel is also doing very well. I highly recommend my brother for his expertise and dedication to his work.",
    name: "Abdul Basit",
    designation: "Owner",
    company: "Islamic Knowledge",
    image: abdul,
  },
];

export const project_group = [
  {
    name: 'Web Development',
    group: 'web'
  },
  {
    name: 'Graphic Design',
    group: 'graphics'
  },
  {
    name: 'Video Editing',
    group: 'video'
  },
]

const projects = [
  {
    name: "Food Order & Delivery",
    description:
      "A PWA for a restaurant that allows users to browse the menu, place orders, and track them. The app has Admin panel that allows restaurant owner to manage the catalog and user roles, and track orders. It also has a delivery panel for delivery boys to pick up and deliver orders, ensuring timely delivery.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "sanity",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
    ],
    image: dotcom,
    source_code_link: "",
    project_link: 'https://dc-user.web.app',
    group: 'web'
  },
  {
    name: "React Portfolio",
    description:
      "Built a personal portfolio using react js to showcase my skills, experience, and qualification.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "styledcomponents",
        color: "green-text-gradient",
      },
      {
        name: "framermotion",
        color: "pink-text-gradient",
      },
    ],
    image: reactportfolio,
    source_code_link: "https://github.com/IamArshadAli/react-portfolio",
    project_link: 'https://iamarshadali.github.io/react-portfolio/',
    group: 'web'
  },
  {
    name: "Company Portfolio",
    description:
      "Developed a portfolio for a startup in Industrial Contracting that showcases the services provided by them in the industry.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "jquery",
        color: "orange-text-gradient",
      },
    ],
    image: knk,
    source_code_link: "https://github.com/IamArshadAli/knkindustrialcontractors",
    project_link: 'https://knkindustrialcontractors.com',
    group: 'web'
  },
  {
    name: "E-Commerce",
    description:
      "An E-Commerce web application that allows users to purchase goat feed and related products online. The application is built to cater to the needs of farmers and entrepreneurs who are interested in goat farming.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "aws",
        color: "pink-text-gradient",
      },
      {
        name: "razorpay",
        color: "orange-text-gradient",
      },
    ],
    image: agripoint,
    source_code_link: "",
    project_link: 'https://agripointfarmandfeeds.com',
    group: 'web'
  },
  {
    name: "Real Estate Portfolio",
    description:
      "Built a portfolio website for a real estate company that showcases their completed, ongoing, and upcoming real-estate projects. The website also included a form for users to make an enquiry about the projects.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "formsubmit",
        color: "orange-text-gradient",
      },
    ],
    image: knkbd,
    source_code_link: "https://github.com/IamArshadAli/knkbuildersanddevelopers",
    project_link: 'https://iamarshadali.github.io/knkbuildersanddevelopers/',
    group: 'web'
  },
  {
    name: "E-Learning",
    description:
      "An E-Learning platform that provides short courses for students on various subjects like web designing, painting, ms excel, video editing, and graphic design, etc.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "ajax",
        color: "pink-text-gradient",
      },
      {
        name: "razorpay",
        color: "orange-text-gradient",
      },
    ],
    image: elearning,
    source_code_link: "",
    project_link: '',
    group: 'web'
  },
];

export { services, technologies, testimonials, projects, arrowlink }; //experiences
