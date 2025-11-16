/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ananda Lukman",
  title: "Hi all, I'm Lukman",
  subTitle: emoji(
    "A passionate Full Stack Developer 🚀 specializing in creating high-performance Web, Mobile, and Desktop applications. Expert in building dynamic frontends with Next.js and cross-platform mobile solutions with Flutter, managed efficiently using Melos. Proficient in developing robust backend services with Node.js and integrating real-time features using technologies like Pusher and MongoDB."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/anandalukman33",
  linkedin: "https://www.linkedin.com/in/ananda-muhamad-lukman/",
  gmail: "ananda.muhamad.lukman@gmail.com",
  gitlab: "https://gitlab.com/ananda.muhamad.lukman",
  facebook: "https://www.facebook.com/anandalukmann",
  medium: "https://medium.com/@ananda_muhamad_lukman",
  stackoverflow: "https://stackoverflow.com/users/16860134/paijo-anita-sari",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "FULL STACK DEVELOPER WHO LOVES TO BUILD END-TO-END SOLUTIONS",
  skills: [
    emoji(
      "⚡ Building responsive and modern front-end applications for Web, Mobile, and Desktop"
    ),
    emoji(
      "⚡ Developing scalable backend systems using Node.js and Next.js, with expertise in real-time communication via Pusher"
    ),
    emoji(
      "⚡ Creating cross-platform mobile apps with Flutter and managing complex monorepos with Melos"
    ),
    emoji(
      "⚡ Architecting and managing databases with MongoDB and other SQL/NoSQL solutions"
    )
  ],

  softwareSkills: [
    {
      skillName: "HTML",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Flutter",
      fontAwesomeClassname: "fab fa-flutter" // Note: fab fa-flutter might require Font Awesome Pro
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "NextJS",
      fontAwesomeClassname: "fab fa-js-square"
    },
    {
      skillName: "NodeJS",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "Pusher",
      fontAwesomeClassname: "fas fa-broadcast-tower"
    },
    {
      skillName: "SQL-Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "C# WinUI",
      fontAwesomeClassname: "fab fa-windows"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Universitas Budi Luhur",
      logo: require("./assets/images/bl.png"),
      subHeader: "Bachelor of Information Technology",
      duration: "July 2016 - April 2021",
      desc: "Focused my thesis on Artificial Intelligence.",
      descBullets: [
        "Developed a Skin Disease Expert System using Backward Chaining and Certainty Factor methods."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend Development", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend Development",
      progressPercentage: "80%"
    },
    {
      Stack: "Mobile & Desktop Development",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Mobile, EDC & Desktop Developer",
      company: "BNI Agen 46",
      companylogo: require("./assets/images/bni.png"),
      date: "Sept 2023 – Present",
      desc: "At BNI Agen 46, I develop and maintain multiple critical applications. My responsibilities include the Agen 46 mobile app, a payment platform integrating with EDC, MicroATM, and NFC devices using both native Kotlin and Flutter. I also build secure Windows desktop applications with C# WinUI 3 for biometric authentication using HID U are U fingerprint scanners.",
      descBullets: [
        "EDC & MicroATM Device Integration",
        "Hybrid Mobile App Development with Flutter",
        "C# WinUI 3 Desktop Application Development",
        "Secure Biometric System Integration (HID U are U)"
      ]
    },
    {
      role: "Frontend Web Developer",
      company: "ZappleRepair",
      companylogo: require("./assets/images/zapplerepairindonesia_logo.jpg"),
      date: "Aug 2024 – January 2025",
      desc: "As a Frontend Web Developer, I was responsible for building a responsive and high-performance user interface for Zapplerepair's main application using Next.js. I worked closely with the backend team to ensure seamless API integration and deliver an exceptional user experience.",
      descBullets: [
        "Developed responsive and interactive user interfaces using Next.js and React.",
        "Collaborated with backend teams to integrate RESTful APIs built with Laravel and Node.js.",
        "Implemented state management solutions for a seamless user experience.",
        "Ensured cross-browser compatibility and optimized application performance."
      ]
    },
    {
      role: "Mobile Developer",
      company: "AnterAja",
      companylogo: require("./assets/images/anteraja.jpg"),
      date: "July 2021 – Aug 2023",
      desc: "As a Mobile Developer at AnterAja, I was responsible for developing and maintaining several key Android applications (Staging, Warehouse, and Rider App) that are crucial for the goods delivery ecosystem. I also contributed to quality assurance by implementing automation testing using Katalon.",
      descBullets: [
        "Native Android Development (Kotlin)",
        "Worked within Agile and Scrum Frameworks",
        "Automation Testing with Katalon"
      ]
    },
    {
      role: "Computer Teacher",
      company: "Miftahul Huda",
      companylogo: require("./assets/images/miftada.png"),
      date: "July 2019 – July 2021",
      desc: "I taught foundational computer science and programming concepts to students, covering topics from basic office tools to fundamental web and mobile development principles.",
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Aplikasi Play Store Saya",
  subtitle:
    "BEBERAPA APLIKASI YANG PERNAH SAYA PUBLIKASIKAN DI GOOGLE PLAY STORE",
  projects: [
    {
      image: require("./assets/images/kicau_pro.png"), // <-- PENTING: Lihat Langkah 2
      projectName: "Kicau Pro",
      projectDesc:
        "Asisten pribadi cerdas untuk pecinta burung, dilengkapi jadwal perawatan berbasis AI, sistem 'leveling', studio remix audio 'Masteran', dan ensiklopedia burung offline.",
      footerLink: [
        {
          name: "Lihat di Play Store",
          url: "https://play.google.com/store/apps/details?id=id.park_yasha.app_kicaupro"
        }
      ]
    },
    {
      image: require("./assets/images/obasaka.png"), // <-- PENTING: Lihat Langkah 2
      projectName: "Obasaka (Server Offline)",
      projectDesc:
        "Aplikasi Streaming Anime untuk penggemar di Indonesia dengan fitur seperti dark mode, mode offline, dan bookmark. (Catatan: Server saat ini sedang tidak aktif).",
      footerLink: [
        {
          name: "Lihat di Play Store",
          url: "https://play.google.com/store/apps/details?id=com.obasaka.nime.stream"
        }
      ]
    }
  ],
  display: true // Diubah dari false menjadi true
};

// Achievement Section
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",
  achievementsCards: [],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", 
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),
  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+62-895363780972",
  email_address: "ananda.muhamad.lukman@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection // <--- INI YANG LUPA REINA TAMBAHIN TADI
};
