import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { FaComputer } from "react-icons/fa6";
import { GrDocumentPdf } from "react-icons/gr";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { MdLaunch } from "react-icons/md";
import { GrMail } from "react-icons/gr";
import { MdCall } from "react-icons/md";

import profileImage from "./assets/images/empty_profile_picture.jpeg";
// import profileImage from "./assets/images/profile_picture.jpg";

import python from "./assets/images/techstack/python.png"
import cplusplus from "./assets/images/techstack/c++.png"
import c from "./assets/images/techstack/c.png"
import java from "./assets/images/techstack/java.png"
import javascript from "./assets/images/techstack/javascript.webp"
import linux from "./assets/images/techstack/linux.png"
import windows from "./assets/images/techstack/windows.png"
import macos from "./assets/images/techstack/macos.png"
import matlab from "./assets/images/techstack/matlab.png"
import perl from "./assets/images/techstack/perl.png"
import react from "./assets/images/techstack/react.png"
import django from "./assets/images/techstack/django.png"
import docker from "./assets/images/techstack/docker.png"
import aws from "./assets/images/techstack/aws.png"
import sql from "./assets/images/techstack/sql.png"
import mysql from "./assets/images/techstack/mysql.svg"
import mongodb from "./assets/images/techstack/mongodb.svg"
import tensorflow from "./assets/images/techstack/tensorflow.png"
import keras from "./assets/images/techstack/keras.png"
import vba from "./assets/images/techstack/vba.png"
import git from "./assets/images/techstack/git.png"
import powershell from "./assets/images/techstack/powershell.png"
import mips from "./assets/images/techstack/mips.png"

import siteselect1 from "./assets/images/site_select/1.png"
import siteselect2 from "./assets/images/site_select/2.png"
import siteselect3 from "./assets/images/site_select/3.png"
import siteselect4 from "./assets/images/site_select/4.png"
import siteselect5 from "./assets/images/site_select/5.png"

import riddleroom from "./assets/images/riddle_room/1.png"

import compiler from "./assets/images/compiler.jpeg"

import transducer1 from "./assets/images/transducer_application/mainGUI.png"
import transducer2 from "./assets/images/transducer_application/sinwave generator.png"
import transducer3 from "./assets/images/transducer_application/createMultiWaveform.png"
import transducer4 from "./assets/images/transducer_application/createMultiWaveformCustom1.png"
import transducer5 from "./assets/images/transducer_application/createPulseCodeCustom1.png"
import transducer6 from "./assets/images/transducer_application/L7-4Flash_Control.png"
import transducer7 from "./assets/images/transducer_application/L7-4 Linear Probe.jpg"
import transducer8 from "./assets/images/transducer_application/biaxial custom transducer.jpg"

import mri1 from "./assets/images/mri/1.png"
import mri2 from "./assets/images/mri/2.png"
import mri3 from "./assets/images/mri/3.png"
import mri4 from "./assets/images/mri/4.png"

import stock1 from "./assets/images/stock_research/1.png"

export const content = {
    nav: [
      {
        link: "#home",
        name: "Home",
        icon: TbSmartHome,
      },
      {
        link: "#about",
        name: "About",
        icon: BiUser,
      },
      {
        link: "#projects",
        name: "Projects",
        icon: FaComputer,
      },

      {
        link: "#resume",
        name: "Resume",
        icon: GrDocumentPdf,
      },
      {
        link: "#contact",
        name: "Contact",
        icon: MdOutlineMailOutline,
      },
    ],
    home: 
        {
            title: "Software Engineer",
            firstName: "Jinseo",
            LastName: "Lee",
            image:profileImage,
        },
    techstack:[
        {
            name: "Python",
            logo: python,
            description: "My strongest and favorite programming language. I have done variety of projects using python from web application, ML/AI, data visualization, etc.",
            projects:[]
        },
        {
            name: "Java",
            logo: java,
            description: "Most used programming language throughout my school career. I have done projects in Software Design and Computer Networks.",
            projects: [],
        },
        {
            name: "C",
            logo: c,
            description: "I have done projects in Embedded System Interfacing and Compiler Design.",
            projects: [],

        },
        {
            name: "C++",
            logo: cplusplus,
            description: "I have done projects in Computer Graphics.",
            projects: [],

        },
        {
            name: "JavaScript",
            logo: javascript, 
            description: "Essential programming language that I have used for web development.",
            projects: [],
        },
        {
          name: "Linux",
          logo: linux, 
          description: "I have written bash scripts for automating tasks in file management using Linux.",
          projects: [],
        },
        {
          name: "Windows",
          logo: windows, 
          description: "I am well versed in Windows as it was the primary OS used at TC Energy for my internship.",
          projects: [],
        },        
        {
          name: "MacOS",
          logo: macos, 
          description: "All my personal projects are coded using my macbook.",
          projects: [],
        },
        {
          name: "Perl",
          logo: perl, 
          description: "Translated Backup Program in Perl to Powershell.",
          projects: [],
        },
        {
          name: "MatLab",
          logo: matlab, 
          description: "I have done projects in GUI, computation and graph visualization.",
          projects: [],
        },
        {
          name: "PowerShell",
          logo: powershell, 
          description: "Essential Tool for automating tasks in Windows. I have leveraged powershell for asset maangement.",
          projects: [],
        },
        {
          name: "Git",
          logo: git, 
          description: "Essential Tool for version control that have been with me since the start of learning Software Engineering.",
          projects: [],
        },
        {
          name: "SQL",
          logo: sql, 
          description: "Essential programming language for Database Management that I have used since taking Database Management System Course.",
          projects: [],
        },
        {
          name: "MySQL",
          logo: mysql, 
          description: "Most used Database Management System. MySQL was my primary option when I needed a database for a project.",
          projects: [],
        },
        {
          name: "MongoDB",
          logo: mongodb, 
          description: "I have used MongoDB for cases when table structuring was not important. Recent Project is the Riddle Room for storing riddle questions.",
          projects: [],
        },
        {
          name: "Tensorflow",
          logo: tensorflow, 
          description: "I have used Tensorflow with Keras for implementing CNN and LSTM Models.",
          projects: [],
        },
        {
          name: "Keras",
          logo: keras, 
          description: "See Tensorflow.",
          projects: [],
        },
        {
          name: "VBA",
          logo: vba, 
          description: "I have written VBA scripts for automating workflow in Excel. I have used it for IT Asset Management reports from Solarwind and McAfee.",
          projects: [],
        },
        {
          name: "Docker",
          logo: docker, 
          description: "I have used Docker for Load Testing.",
          projects: [],
        },
        {
          name: "React",
          logo: react, 
          description: "This site is built using React with React Bootstrap.",
          projects: [],
        },
        {
          name: "Django",
          logo: django, 
          description: "I have used Django for building RESTful APIs for project on Database Management System.",
          projects: [],
        },
        {
          name: "AWS",
          logo: aws, 
          description: "I am AWS Certified Developer - Associate",
          projects: [],
        },
        {
          name: "MIPS",
          logo: mips, 
          description: "I am proficient in MIPs Assembly.",
          projects: [],
        },


    ],
    projects: [
        {
            name: "Stock Market Research Tool",
            tools: ["Python", "Plot.ly", "Alpha Vantage"],
            description: "Stock Market Research Tool for analyzing stock prices using historic data with indicators such as Volume, RSI and MACD. Leveraged Alphavantage for downloading historic stock data for 1-min chart and leveraged yfinance for downloading daily stock data.",
            source: "https://github.com/jinseo99/Stock-Market-Research-Tool",
            image: stock1,
            video: true,
        },
        {
            name: "Site Select",
            tools: ["Unreal Engine", "C++", "Python"], 
            description: "Simulation tool for determining radar coverage from a specified geographic location. Leveraging Unreal Engine and the Cesium plugin, the project create a realistic environment to conduct calculations and generate outputs representing radar coverage for a specified area. Implemented grid generation and raycasting algorithm to calculate solution heights, enabling the creation of heatmaps that users can use to assess the extent of radar coverage for an area.",
            source: "",
            image: siteselect1,
            preview: [
              {
                image: siteselect1,
                description: "Site Select's user interface",
              },
              {
                image: siteselect2,
                description: "Radars spawned in Unreal Engine",
              },
              {
                image: siteselect3,
                description: "Heat-map result from Multiple Radars",
              },
              {
                image: siteselect4,
                description: "KML file on Google Earth",
              },
              {
                image: siteselect5,
                description: "Cubes generated in Unreal Engine representing the heat-map",
              },

            ]
        },
        {
            name: "Riddle Room",
            tools: ["Node.js", "React.js", "MongoDB", "AWS"],
            description: "Web application where players play against each other in solving riddles. Leverage Node.js and Socket.io to establish a persistent, low-latency connection between client and server. Implemented Passive Replication Model, Fault Tolerance for client/server and database and Weak Consistency to support high scalability and high availabiity.",
            source: "",
            image:riddleroom,
            preview: "",

        },
        {
            name: "GoLF Compiler",
            tools: ["C", "MIPS", "Flex", "Bison"],
            description: "GoLF stands for \"Go Language Fragment\" and is a subset of the Go programming language, with minor changes to make it more amenable to implementation in a one-semester course. Leveraged C with Flex and Bison to translate GoLF to MIPS Assembly.",
            source: "",
            image:compiler,
            preview: "",

        },
        {
            name: "Multi-axial Transducer Application",
            tools: ["Matlab", "Verasonics Vantage System"],
            description: "Verasonics Vantage system is a flexible ultrasound research platform that provides direct access to raw ultrasound data, while preserving the ability to perform high quality real-time imaging with custom software, at clinically useful frame rates. Leveraged Matlab to perform ultrasound experiments and gather data.",
            source: "",
            image:transducer1,
            preview: [
              {
                image: transducer1,
                description: "Main GUI",
              },
              {
                image: transducer2,
                description: "Sinusoidal Wave Generation Tool",
              },
              {
                image: transducer3,
                description: "Combine single waveforms (? x 1 double) into multi-waveform (1000 x 128 double). The multi-waveform is then saved as a file.",
              },
              {
                image: transducer4,
                description: "Combine single waveforms (? x 1 double) into multi-waveform (1000 x 6 double). The multi-waveform is then saved as a file.",
              },
              {
                image: transducer5,
                description: "Convert multi-waveform (1000 x 6 double) to Transmit Waveform using PulseCode. The Transmit Waveform is then saved as a file.",
              },
              {
                image: transducer6,
                description: "L7-4Flash_Control control pane",
              },
              {
                image: transducer7,
                description: "L7-4 Linear Probe",
              },
              {
                image: transducer8,
                description: "Biaxial Custom Transducer",
              },

            ],
        },
        {
          name: "HumanLikeScraper",
          tools: ["Python", "Selenium", "BeautifulSoup"],
          description: "Web Scraper Tool for scraping websites that block conventional web scraping using robot.txt. Leverages Selenium and Chromedriver to simulate human actions to bypass robot.txt.",
          source: "https://github.com/jinseo99/HumanLikeScraper",
          preview: "",

      },
      {
          name: "Characterization of Deep Learning Features for Advanced Interpretation of Disease Properties in Magnetic Resonance Imaging",
          tools: ["Python", "Tensorflow", "Keras"],
          description: "Heatmap Generation Tool for Characterizing Features on various layers of Convolutional Neural Network Models. Leveraged CAM, GradCAM and GradCAM++ at higher generalization in respective order. Higher generalization of heat-map allow easier human interpretation of Model predictions.",
          source: "https://github.com/jinseo99/2019SummerResearch",
          image: mri1,
          preview: [
            {
              image: mri1,
              description: "Class Activation Map (CAM) overview on VGG19 model with Global Average Pooling (GAP). Sample data: Patient 1 with all 3 MRI sequences as the input.",
            },
            {
              image: mri2,
              description: "Grad-CAM generated heatmap from patient 1 from trained classification models: a) AlexNet. b) ResNet50 with GAP. c) ResNet50 with FC layers. d) ResNet18. e) VGG16 with GAP. f) VGG19 with GAP. g) VGG19 with FC layers (ILSVRC weights). h) VGG19 with FC layers. Legends: Red = very high activated region; Yellow = high activated region; Green = low activated region; Blue = very low activated region",
            },
            {
              image: mri3,
              description: "Heatmap generated from Patient 1 (SPMS) data. Wrongly classified slices have been highlighted with red borders on Grad-CAM generated heatmaps. VGG16 with GAP: a) CAM. b) Grad-CAM. c) Grad-CAM++. VGG19 with GAP: d) CAM. e) Grad-CAM. f) Grad-CAM++. Each section contains 135 slices of brain MRI, index numbering from top to bottom left to right.",
            },
            {
              image: mri4,
              description: "Heatmap generated from Patient 15 (RRMS) data. Wrongly classified slices have been highlighted with red borders on Grad-CAM generated heatmaps. VGG16 with GAP: a) CAM. b) Grad-CAM. c) Grad-CAM++. VGG19 with GAP: d) CAM. e) Grad-CAM. f) Grad-CAM++. Each section contains 135 slices of brain MRI, index numbering from top to bottom left to right.",
            },

        ],
      },

    ],
    project_icon: {
        github: FaGithub,
        launch: MdLaunch,
    },
    contact: {
        title: "Contect Me",
        subtitle: "GET IN TOUCH",
        social_media: [
          {
            text: "jinseo_lee@outlook.com",
            icon: GrMail,
            link: "mailto:jinseo_lee@outlook.com",
          },
          {
            text: "1-587-889-8735",
            icon: MdCall,
            link: "https://wa.me/5878898735",
          },
        ],
    
    }
  };