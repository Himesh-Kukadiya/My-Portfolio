import {
  mobile,
  backend,
    javascript,
    html,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    express,
    git,
    css,
    csharp,
    aspnet,
    java,
    php,
    rku,
    mkbu,
    crickzone,
    ecosystem,
    pts,
    mim,
    fda
  } from "../assets";
  
  export const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "about",
      title: "About",
    },
    {
      id: "education",
      title: "Resume",
    },
    {
      id: "project",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Express.js",
      icon: express,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "JAVA",
      icon: java,
    },
    {
      name: "GitHub",
      icon: git,
    },
    {
      name: "PHP",
      icon: php,
    },
    {
      name: "ASP.net",
      icon: aspnet,
    },
    {
      name: "C#.net",
      icon: csharp,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "HTML 5",
      icon: html,
    },
  ];
  
  const education = [
    {
      title: "Master of Computer Application",
      company_name: "SCHOOL OF ENGINEERING, RK UNIVERSITY (RKU)",
      icon: rku,
      iconBg: "#383E56",
      date: "August 2023 - May 2025",
      points: [
        "The School of Engineering at RK University (RKU) offers an intensive Master of Computer Application program with an upgraded syllabus.",
        "I have completed my half of the course with 8.95 CGPA.",
        "I have completed four projects during this course and gained a lot of experience in software development.",
        "I gained excellent knowledge of MERN stack development, ASP.NET, and Flutter through project-based learning.",
        "I have also learned OOP with Java, database concepts like SQL and PL/SQL using Oracle Apex, C#.NET, and full-stack development using HTML, CSS, JavaScript, and PHP.",
      ],
    },
    {
      title: "Bachelor of Computer Application",
      company_name: "KRISHNAKUMARSINHJI BHAVNAGAR UNIVERSITY",
      icon: mkbu,
      iconBg: "#383E56",
      date: "August 2023 - May 2025",
      points: [
        "Krishnakumarsinhji Bhavnagar University (MKBU) offers a comprehensive Bachelor of Computer Application program, providing students with a strong foundation in computer science and its applications.",
        "I have completed my bachelor's degree with first class.",
        "I have completed one project during this course and gained my first experience in software development.",
        "Throughout the course, I delved into a range of topics including programming languages like JAVA, JS, C, C++, PHP, VB.NET, ASP.NET, as well as database management systems.",
      ],
    },
    // {
    //   title: "Higher Secondary Education",
    //   company_name: "GS & HSEB (GUJARAT)",
    //   icon: gshscb,
    //   iconBg: "#383E56",
    //   date: "August 2023 - May 2025",
    //   points: [
    //     "The Gujarat Secondary and Higher Secondary Education Board (GSEB) is responsible for conducting the examinations in the state of Gujarat.",
    //     "I got as result 61.43% in my higher secondary education.",
    //     "In 12th grade, I specialized in Commerce from three tracks.",
    //     "The curriculum includes subjects such as Accounting, Statistics, B.A, SP & CC, languages, and more, providing a comprehensive education to students.",
    //   ],
    // },
    // {
    //   title: "Secondary Education",
    //   company_name: "GS & HSEB (GUJARAT)",
    //   icon: gshscb,
    //   iconBg: "#383E56",
    //   date: "August 2023 - May 2025",
    //   points: [
    //     "The Gujarat Secondary and Higher Secondary Education Board (GSEB) is responsible for conducting the examinations in the state of Gujarat.",
    //     "I got as result 56.17% in my secondary education.",
    //     "The curriculum includes subjects such as mathematics, science, social science, gujarati, sanskrit, english, Hindi and more, providing a comprehensive education to students.",
    //   ],
    // },
    
  ];
    
  const projects = [
    {
      name: "CrickZone's",
      description:"The MERN stack-powered CrickZone Project simplifies cricket box booking for users, empowers box keepers with inventory management, and offers administrators oversight. Join us for a convenient and innovative cricket experience, enhanced by real-time updates, personalized recommendations, and insightful graphical visualizations.",
      tags: [
        {
          name: "react.js",
          color: "blue-text-gradient",
        },
        {
          name: "node.js",
          color: "pink-text-gradient",
        },
        {
          name: "express.js",
          color: "blue-text-gradient",
        },
        {
          name: "mongo",
          color: "pink-text-gradient",
        },
      ],
      image: crickzone,
      source_code_link: "https://github.com/Himesh-Kukadiya/CrickZone",
    },
    {
      name: "EcoS's",
      description:"The MERN-based eco-friendly item selling platform is facilitated user authentication, product browsing, ordering, and seller management. Provided graphical insights for sellers and administrators. Key features include OTP authentication, product filtering, cart functionality, and graphical business analytics.",
      tags: [
        {
          name: "mern",
          color: "blue-text-gradient",
        },
        {
          name: "teamwork",
          color: "pink-text-gradient",
        },
        {
          name: "github",
          color: "blue-text-gradient",
        },
        {
          name: "backend",
          color: "pink-text-gradient",
        },
      ],
      image: ecosystem,
      source_code_link: "https://github.com/Himesh-Kukadiya/Eco-Friendly-items-sealling-platform",
    },
    {
      name: "Food Delivery Application",
      description:"The flutter based food delivery aplication alows usrs to sign up, sign in, change pasword via email, see food list, chek food details, add to cart, remove from the cart, place order, add mony into walet, see and update profil. And it also alows Admin to login, see food list, add new food item, update and delete exsting food item.",
      tags: [
        {
          name: "Flutter",
          color: "blue-text-gradient",
        },
        {
          name: "Mobile application",
          color: "pink-text-gradient",
        },
        {
          name: "FireBase",
          color: "blue-text-gradient",
        },
      ],
      image: fda,
      source_code_link: "https://github.com/Himesh-Kukadiya/food_delevery-fllutter-",
    },
    {
      name: "PTS's",
      description:"The Node.js-based Public Transport Setup’s website allows users to easily book tickets for their desired bus seats and view prices. The system provides a seating arrangement to show seat availability. The conductor module facilitates ticket issuance, including the allocation of free seats.",
      tags: [
        {
          name: "node.js",
          color: "blue-text-gradient",
        },
        {
          name: "electric.js",
          color: "pink-text-gradient",
        },
        {
          name: "express.js",
          color: "blue-text-gradient",
        },
        {
          name: "mongo",
          color: "pink-text-gradient",
        },
      ],
      image: pts,
      source_code_link: "https://github.com/Himesh-Kukadiya/PublicTransportSetup-s",
    },
    {
      name: "MIM",
      description:"The PHP-based Medicine Inventory Management System for pharmacists, streamlining data management with easy stock entry, timely notifications for expiring medicines and low stock, and automated patient bill generation.",
      tags: [
        {
          name: "php",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "pink-text-gradient",
        },
        {
          name: "js",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: mim,
      source_code_link: "https://github.com/Himesh-Kukadiya/MIM",
    },
  ];

  export { services, technologies, education, projects };