/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

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
    "A passionate Full Stack Developer 🚀 with experience in building Web, Mobile, and Desktop applications using JavaScript / ReactJS / NodeJS / Google Script / Kotlin Native / Jetpack Compose / C# WinUI. Proficient in backend development and desktop application development."
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
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Full Stack Developer specializing in Mobile, Web, and Desktop Development",
  skills: [
    emoji(
      "⚡ Develop Frontend Applications across Mobile, Web, and Desktop platforms"
    ),
    emoji("⚡ Backend Development with NodeJS, Ktor, Google Script, and Laravel"),
    emoji(
      "⚡ Integration of third-party services and system architecture design"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

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
      skillName: "SASS",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "NodeJS Backend",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "SQL-Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Google Script",
      fontAwesomeClassname: "fab fa-google"
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
      skillName: "Katalon",
      fontAwesomeClassname: "fab fa-cog"
    }, 
    {
      skillName: "NextJS",
      fontAwesomeClassname: "fab fa-js"
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
      desc: "Participate in the thesis",
      descBullets: [
        "Skin Disease Expert System Using Backward Chaining and Certainty Factor Methods"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Computer Teacher",
      company: "Miftahul Huda",
      companylogo: require("./assets/images/miftada.png"),
      date: "July 2019 – July 2021",
      desc: "I am a passionate and experienced computer teacher with 2 years of experience in educating students of all ages. Throughout my career, I have honed my skills in teaching a wide range of computer subjects, including fundamental web develop, mobile develop, etc.",
      descBullets: [
        "Blog Teaching",
        "Drag And Drop Mobile Develop",
        "Basic Office Tools"
      ]
    },
    {
      role: "Mobile Developer",
      company: "AnterAja",
      companylogo: require("./assets/images/anteraja.jpg"),
      date: "July 2021 – Agu 2023",
      desc: "While working at AnterAja, I held the role of Mobile Developer and was responsible for developing several projects, including the Staging App, Warehouse App, and Rider App. These three apps support the delivery of goods. Additionally, I have experience using Katalon for automation testing.",
      descBullets: [
        "Native Mobile Programming",
        "Agile And Scrum FrameWork",
        "Automation Testing"
      ]
    },
    {
      role: "Mobile Developer - EDC Developer & Desktop Developer",
      company: "BNI Agen 46",
      companylogo: require("./assets/images/bni.png"),
      date: "Sept 2023 – Present",
      desc: "During my time at BNI Agen 46, I have been involved in multiple projects: developing the Agen 46 application as a Mitra Payment platform and creating Windows desktop applications. The mobile application integrates with various devices including EDC, MicroATM, and NFC, while utilizing both native and hybrid development with Flutter. Additionally, I developed desktop applications using C# WinUI 3 for HID U are U fingerprint authentication system, providing seamless biometric integration.",
      descBullets: [
        "EDC & MicroATM Integration",
        "Mobile App Development with Flutter",
        "C# WinUI 3 Desktop Development",
        "HID U are U Biometric Integration",
        "Native & Cross-platform Development"
      ]
    }, 
    {
      role: "Web Developer - FrontEnd",
      company: "ZappleRepair",
      companylogo: require("./assets/images/zapplerepairindonesia_logo.jpg"),
      date: "Aug 2024 – January 2025",
      desc: "Frontend Web Developer at Zapplerepair, responsible for developing applications using Next.js as the frontend framework, while supporting backend integration built with Laravel and Node.js. Focused on creating responsive user interfaces and delivering optimal user experiences.",
      descBullets: [
        "EDC Develop",
        "MICRO ATM Develop",
        "Jetpack Compose",
        "Native Mobile Programming"
      ]
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
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
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
  userName: "yo_azzazel", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  resumeSection
};
