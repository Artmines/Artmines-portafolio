import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    css,
    reactjs,
    redux,
    tailwind,
    threejs,
    nodejs,
    mongodb,
    git,
    carrent,
    python,
    sv,
    zipy,
    coursera,
    udemy,
    udemyStack,
    pythonCoursera,
    duke,
    mimoWeb,
    mimo1,
    mimoSql,
    firstPort,
    gptWhatsapp,
    disney,
    svCertificate,
    bots,
    stealthTelegram,
    cross_platform,
    lua,
    csharp,
    svelte
  } from "../assets";

  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "certificates",
      title: "Certificates",
      },
    {
      id: "experience",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
    {
      id: "projects",
      title: "Projects",
    },
  ];
  
  const services = [
    {
      title: "Frontend developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: mobile,
    },
    {
      title: "Websites Developer",
      icon: backend,
    },
    {
      title: "Technology Solution Architect",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Python",
      icon: python,
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
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Lua",
      icon: lua,
    },
    {
      name: "C#",
      icon: csharp,
    },
    {
      name: "Svelte",
      icon: svelte,
    },
    {
      name: "git",
      icon: git,
    },
    
  ];
  
  const experiences = [
    {
      title: "Freelance Full Stack & FiveM Developer",
      company_name: "Self-Employed",
      icon: bots,
      iconBg: "#E6DEDD",
      date: "June 2025 - Present",
      points: [
        "Building custom websites, community platforms, and web applications for clients.",
        "Developing and maintaining FiveM/RedM frameworks, scripts, and server infrastructure.",
        "Core maintainer of Mythic Framework — documentation, development, and community support.",
        "Delivering projects like Solyx.org and Murkwood.org from design to deployment.",
      ]
    },
    {
      title: "Backend Developer",
      company_name: "Government — Public Schools",
      icon: zipy,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - June 2025",
      points: [
        "Maintained and supported backend software systems used across public school networks.",
        "Handled bug fixes, updates, and performance improvements on existing applications.",
        "Worked with internal teams to ensure system reliability and uptime.",
      ],
    },
    {
      title: "SECF — Submarine Reservist",
      company_name: "U.S. Navy (Reserve)",
      icon: sv,
      iconBg: "#383E56",
      date: "2022 - 2024",
      points: [
        "Transitioned to reserve duty after 4 years of active service.",
        "Continued training and readiness in submarine electronics and communications.",
        "Balanced military obligations with civilian career development in software engineering.",
      ],
    },
    {
      title: "SECF — Submarine Electronics / Communications",
      company_name: "U.S. Navy (Active Duty)",
      icon: sv,
      iconBg: "#383E56",
      date: "2018 - 2022",
      points: [
        "Served as a Submarine Electronics Computer Field technician on active duty.",
        "Maintained and operated advanced electronic and communication systems aboard submarines.",
        "Developed strong problem-solving, discipline, and teamwork skills in high-pressure environments.",
        "Gained hands-on technical experience with complex systems and troubleshooting.",
      ],
    },
    {
      title: "Full-Stack Student",
      company_name: "Sv-college",
      icon: sv,
      iconBg: "#383E56",
      date: "June 2022 - Jan 2023",
      points: [
        "Enrolled in a physical college to strengthen my foundation in React and full-stack development.",
        "Achieved a final grade of 85/100.",
        "Performance led to being placed in a professional internship.",
      ],
    },
    {
      title: "Self-Taught Developer",
      company_name: "Udemy / Coursera",
      icon: udemy,
      iconBg: "#E6DEDD",
      date: "2021 - 2023",
      points: [
        "Completed full-stack development courses covering JavaScript, React, Node.js, and databases.",
        "Studied data science math — linear algebra, calculus, probability, and statistics.",
        "Built a foundation in Python, data structures, and data manipulation.",
        "Applied learning through personal projects and open-source contributions.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Arturo built our entire community website from the ground up. The admin dashboard, forums, and application system he delivered are enterprise-level. He understood exactly what we needed and shipped it fast — couldn't recommend him more.",
      name: "Solyx",
      designation: "Owner",
      signedFile: "#",
      company: "Solyx.org",
      image: "",
    },
    {
      testimonial:
        "Arturo built our community website and brought a level of professionalism we didn't expect. He understood the Path of Titans community, delivered a clean modern site, and handled everything from design to deployment. A pleasure to work with.",
      name: "Murkwood",
      designation: "Owner",
      signedFile: "#",
      company: "Murkwood Realism",
      image: "",
    },
    {
      testimonial:
        "Artmines is a true monster when it comes to coding, helping, and just being all around awesome at what he does. The team of QC are all just as amazing. From helping noobs like me, to being full on ambassadors to the RSG and RedM community as a whole. If you need help, advice, or anything — don't waste a moment doubting if you should ask. There is no judgement, just help. I'm currently using 5 scripts and can't wait to see what else they make.",
      name: "Community Member",
      designation: "Server Owner",
      signedFile: "#",
      company: "RedM Community",
      image: "",
    },
  ];

  const tagsColors = {
    html: 'orange-text-gradient',
    css: 'pink-text-gradient',
    react: 'blue-text-gradient',
    js: 'green-text-gradient',
    node: 'orange-text-gradient',
    mongo: 'green-text-gradient',
    sql: 'orange-text-gradient',
    gql: 'green-text-gradient',
    next: 'blue-text-gradient',
    api: 'green-text-gradient',
    playwright: 'pink-text-gradient'
  }

  const projects = [
    {
      name: 'Solyx.org — FiveM Community Platform',
      description: "A custom-built enterprise-grade website for a FiveM server community. Features a full admin dashboard, forums, staff applications, and content management — all built from the ground up with Next.js 15, TypeScript, and Tailwind CSS. Performance optimized with lazy loading and image optimization.",
      tags: [
        {
          name: 'Next.js 15',
          color: tagsColors.next
        },
        {
          name: 'TypeScript',
          color: tagsColors.node
        },
        {
          name: 'Tailwind CSS',
          color: tagsColors.css
        }
      ],
      image: stealthTelegram,
      link: 'https://www.solyx.org/',
      source_code_link: 'https://www.solyx.org/'
    },
    {
      name: 'Murkwood Realism — Path of Titans',
      description: "A community website currently in development for a Path of Titans realism server. Features server info, community tools, and admin management — built with Next.js, TypeScript, React, and MongoDB as the backend database.",
      tags: [
        {
          name: 'Next.js',
          color: tagsColors.next
        },
        {
          name: 'TypeScript',
          color: tagsColors.node
        },
        {
          name: 'React',
          color: tagsColors.react
        },
        {
          name: 'MongoDB',
          color: tagsColors.mongo
        }
      ],
        image: cross_platform,
        link: 'https://www.murkwood.org/',
        source_code_link: 'https://www.murkwood.org/'
    },
    {
      name: "Mythic Framework — Docs & Maintenance",
      description:
        "Core maintainer of Mythic Framework, a professional-grade FiveM framework used by major servers like Prodigy RP and Circuit RP. Built and maintain the full documentation site, contribute to framework development, and support the ecosystem that powers large-scale roleplay communities.",
      tags: [
        {
          name: "Lua",
          color: tagsColors.node,
        },
        {
          name: "React",
          color: tagsColors.react,
        },
        {
          name: "JavaScript",
          color: tagsColors.js,
        },
        {
          name: "Documentation",
          color: tagsColors.css,
        },
      ],
      image: disney,
      source_code_link: "https://github.com/Starter-Starter/mythic-framework",
      link: 'https://github.com/Starter-Starter/mythic-framework',
    },
    {
      name: "Kitchen Chaos",
      description:
        "A 2.5D cooking simulation game built in Unity with C#. Slice tomatoes, chop lettuce, and cook full recipes with interactive visual UI — progress bars, timers, and real-time feedback bring the kitchen to life. Covers core game dev fundamentals: state machines, input handling, UI systems, and game loop architecture.",
      tags: [
        {
          name: "C#",
          color: tagsColors.node,
        },
        {
          name: "Unity",
          color: tagsColors.api
        },
        {
          name: "Game Dev",
          color: tagsColors.react
        }
      ],
      image: gptWhatsapp,
      source_code_link: "https://r2.fivemanage.com/BkKrN1m7N9VFzzQ3Ht2i7/Recording2026-01-30184220.mp4",
      link: 'https://r2.fivemanage.com/BkKrN1m7N9VFzzQ3Ht2i7/Recording2026-01-30184220.mp4',
    },
    {
      name: "CYG RP — FiveM Server",
      description:
        "My first large-scale FiveM project — a 100K or Die server averaging 20–50 concurrent players, founded by Choosy, a Twitch-partnered content creator. Built and maintained server infrastructure, custom scripts, and gameplay systems. Now discontinued, but it kicked off my journey into the FiveM ecosystem.",
      tags: [
        {
          name: "Lua",
          color: tagsColors.node,
        },
        {
          name: "JavaScript",
          color: tagsColors.js,
        },
        {
          name: "CSS",
          color: tagsColors.css,
        },
        {
          name: "HTML",
          color: tagsColors.html,
        },
        {
          name: "FiveM",
          color: tagsColors.api,
        },
      ],
      image: carrent,
      source_code_link: "https://www.twitch.tv/choosymk",
      link: 'https://www.twitch.tv/choosymk'
    },
    {
      name: "QC-AdvancedMedic — RedM Medical System",
      description:
        "My first public open-source script — a realistic medical roleplay system for RedM. Tracks injuries across 15 body parts with bleeding, infection stages, and treatment mechanics. Features a React-based NUI for body examination, an optimized 5-table database schema, and support for 128 concurrent players. Built on RSG-Core with full documentation.",
      tags: [
        {
          name: "Lua",
          color: tagsColors.node,
        },
        {
          name: "React",
          color: tagsColors.react,
        },
        {
          name: "SQL",
          color: tagsColors.mongo,
        },
        {
          name: "RedM",
          color: tagsColors.api,
        },
      ],
      image: firstPort,
      source_code_link: "https://github.com/Quantum-Projects-RedM/QC-AdvancedMedic",
      link: 'https://github.com/Quantum-Projects-RedM/QC-AdvancedMedic'
    },

  ];
  
  const certificates = [
    {
      name: "Full-Stack Development",
      image: svCertificate,
      verifyLink: svCertificate,
    },
    {
      name: "Full-Stack Bootcamp",
      image: udemyStack,
      verifyLink: udemyStack,
    },
    {
      name: "Python For Everybody with honor",
      image: pythonCoursera,
      verifyLink: pythonCoursera,
    },
    {
      name: "Data Science Math Skills",
      image: duke,
      verifyLink: duke,
    },
    {
      name: "Python",
      image: mimoWeb,
      verifyLink: mimoWeb,
    },
    {
      name: "Web Development",
      image: mimo1,
      verifyLink: mimo1,
    },
    {
      name: "SQL",
      image: mimoSql,
      verifyLink: mimoSql,
    },



  ];

  export { services, technologies, experiences, testimonials, projects, certificates };