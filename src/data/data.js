const data = {
  name: "Vania Alejandra Elizondo Martínez",
  title: "Digital Systems and Robotics Engineer",
  email: "vaniaelizondomartinez@gmail.com",
  cel: "8110295364",
  location: "Monterrey, México",
  locationURL:
    "https://www.google.com/maps/place/Monterrey,+N.L./@23.8890021,-104.1290895,5.55z/data=!4m5!3m4!1s0x86629531b437f8f5:0xa3d3d3ca6ac89894!8m2!3d25.6866142!4d-100.3161126",
  github: "https://github.com/vaniaelizondo",
  linkedin: "https://www.linkedin.com/in/vania-elizondo/",
  bio: `I'm Vania, nice to meet you! A little bit about me: I'm an organized & responsible person who enjoys challenges, teamwork and travelling. Feel free to contact me so we can meet again :)`,
  education: [
    {
      degree:
        "Digital Systems and Robotics Bachelor's Degree (GPA: 92)",
      campus: "Tecnológico de Monterrey, Campus Monterrey",
      date: "August 2015 - December 2019",
    },
    {
      degree: "International Baccalaureate (IB) Certificate",
      campus: "Prepa Tec, Campus Cumbres",
      date: "August 2011 - May 2014",
    }
  ],
  courses: [
    {
      name: "Deep Learning Specialization",
      place: "Deep Learning.AI",
      url: "https://coursera.org/verify/specialization/LQ8PDP3CZM4R",
      date: "",
    },
    {
      name: "AWS S3 Basics",
      place: "Coursera",
      url: "https://coursera.org/verify/J6G4XCBYRB57",
      date: "",
    },
    {
      name: "UI / UX Design Specialization",
      place: "California Institute of the Arts",
      url: "https://coursera.org/verify/specialization/6MYRCXUNJK4G",
      date: "",
    },
    {
      name: "Big data and new technologies in cities Certificate",
      place: "University of British Columbia, Vancouver",
      date: "June 2019",
      url: "",
    },
  ],
  experience: [
    {
      title: "Developer",
      company: "Kalypso",
      date: "May 2021 - Present",
      logo: require("../images/kalypso.jpeg"),
      description: [
        {
          line: "Windchill customization, build and deployment."
        },
        {
          line: "Java development for Windchill's personalization and expansion."
        },
        {
          line: "Creation of Python scripts for data organization."
        }
      ]
    },
    {
      title: "Front-end engineer",
      company: "Envia.com",
      date: "April 2020 - April 2021",
      logo: require("../images/envia.png"),
      description: [
        {
          line:
            "Continuous JavaScript and jQuery improvement on the main site envia.com."
        },
        {
          line:
            "Design, creation and implementation of new PHP views."
        },
        {
          line: "Fix of daily functionality and design bugs."
        },
        {
          line: "Creation of Prestashop and Magento2 modules for integration."
        }
      ]
    },
    {
      title: "Embedded software internship",
      company: "John Deere",
      date: "September - December 2019",
      logo: require("../images/john_deere.png"),
      description: [
        {
          line:
            "Developed Python scripts to automate reports view saving 10% of developers time. "
        },
        {
          line:
            "Continuous Jenkins support enhancing deployment time. Corrections on pipeline syntax and added features such as HTML reports."
        },
        {
          line: "PowerBI support to verify employees' work hours."
        }
      ]
    },
    {
      title: "Web development internship",
      company: "Neoris",
      date: "October 2018 - May 2019",
      logo: require("../images/neoris.png"),
      description: [
        {
          line: "Photo portfolio developed in React.js as initial trainning."
        },
        {
          line:
            "Developed mtydigitalhub.com website with React.js. Creation of fields with Strapi and queries with GraphQL."
        },
        {
          line: "MongoDB continuous support."
        }
      ]
    },
    {
      title: "i Semester: Design of smart devices using Internet of Things",
      company: "Ternium",
      date: "August - December 2018",
      logo: require("../images/ternium.jpg"),
      description: [
        {
          line: "Team's project manager."
        },
        {
          line:
            "Electronic PCB design of locator device whose battery lasts up for 2 years using Eagle."
        },
        {
          line: "Coded WiFi communication protocol for the NodeMCU in Arduino."
        }
      ]
    }
  ],
  skills: [
    {
      title: "Programming",
      tools: [
        {
          name: "C++",
          level: "80"
        },
        {
          name: "Python",
          level: "75"
        },
        {
          name: "Arduino",
          level: "70"
        },
        {
          name: "VHDL",
          level: "50"
        },
        {
          name: "Assembly",
          level: "60"
        }
      ]
    },
    {
      title: "Web Development",
      tools: [
        {
          name: "HTML",
          level: "95"
        },
        {
          name: "React.js",
          level: "50"
        },
        {
          name: "JavaScript",
          level: "90"
        }, 
        {
          name: "jQuery",
          level: "80"
        }, 
        {
          name: "Git",
          level: "70"
        }, 
        {
          name: "MySQL",
          level: "40"
        },
        {
          name: "MongoDB",
          level: "30"
        }
      ]
    },
    {
      title: "Modelling and Simulation",
      tools: [
        {
          name: "Matlab",
          level: "60"
        },
        {
          name: "R",
          level: "40"
        },
        {
          name: "Unity",
          level: "30"
        },
        {
          name: "LabView",
          level: "45"
        },
        {
          name: "LTSpice",
          level: "50"
        },
        {
          name: "Eagle",
          level: "25"
        }
      ]
    },
    {
      title: "Languages",
      tools: [
        {
          name: "Spanish",
          level: "100"
        },
        {
          name: "English",
          level: "95"
        },
        {
          name: "French",
          level: "50"
        },
        {
          name: "German",
          level: "25"
        }
      ]
    }
  ],
  projects: [
    {
      title: "Compiler",
      language: "Python",
      website: "https://github.com/vaniaelizondo/MyCompiler",
      description: "Designed the syntax and grammar of my own compiler to perform simple mathematical equations."
    }, 
    {
      title: "Digital Control Loop Simulator",
      language: "Python",
      website: "https://github.com/vaniaelizondo/DigitalControl",
      description: "Simulation of a real-time system control in its manual and automatic operation mode."
    },
    {
      title: "Sports Club Reservation Program",
      language: "C++",
      website: "https://github.com/vaniaelizondo/SportsClub",
      description: "Simple object-oriented program that shows equipment and sports fields availability at a sports club."
    },
    {
      title: "Mahjong Game",
      language: "C++",
      website: "https://github.com/vaniaelizondo/MahjongGame",
      description: "Introductory programming project that lets the user play a Mahjong game."
    }
  ],
  extras: [
    {
      title: "HTML, CSS and JavaScript Tutor",
      place: "Superprof.com",
      date: "September 2020"
    },
    {
      title: "Rural missions in low-income communities",
      place: "México, United States, Colombia",
      date: "2010 - 2018"
    },
    {
      title: "Cerebral palsy children tuition",
      place: "Instituto Nuevo Amanecer",
      date: "June 2017"
    },
    {
      title: "Children game therapy",
      place: "Hospital Regional Materno Infantil",
      date: "June 2017"
    }, 
    {
      title: "IEEE Student Committee",
      place: "Tecnológico de Monterrey",
      date: "August 2016 - May 2017"
    },
    {
      title: "Regnum Christi Coworker",
      place: "Medellín, Colombia",
      date: "August 2014 - July 2015",
    }
  ]
};

export default data;