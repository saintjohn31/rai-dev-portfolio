import {
    Globe,
    Gamepad2,
    Library,
} from 'lucide-react';

import astroclashPreview from '../images/astroclash-preview.jpg';
import libraryPreview from '../images/edp-preview.jpg';
import masPreview from '../images/mas-preview.png';
import soamcPreview from '../images/soamc-preview.jpg';
import stayscapePreview from '../images/stayscape-preview.png';


export const projects = [

    /* =========================================
       01 — ASTRO CLASH
    ========================================= */

    {
        id: 1,

        number: '01',

        title:
            'Astro Clash',

        subtitle:
            'Unity 2D · Top-Down Space Game',

        category:
            'GAME DEVELOPMENT',

        liveUrl:
            'https://astroclash-mu.vercel.app/',

        repoUrl:
            null,

        image:
            astroclashPreview,

        description:
            'A 2D top-down game developed in Unity using C#, featuring player-controlled movement, interactive gameplay mechanics, and a space-themed game environment.',

        fullDescription:
            'Astro Clash is a 2D top-down game developed using the Unity game engine and C#. The project focuses on implementing core game development concepts such as player movement, gameplay interactions, collision-based mechanics, game logic, and real-time player input. The game is built around a space-themed top-down experience and was deployed to the web so it can be played directly through a browser.',

        tags: [
            'Unity',
            'C#',
            '2D Game',
            'Top-Down',
            'Game Development',
            'WebGL',
        ],

        features: [
            '2D top-down gameplay',
            'Player-controlled movement and input',
            'Interactive gameplay mechanics',
            'Collision and game logic implementation',
            'Space-themed game environment',
            'Unity WebGL browser deployment',
        ],

        icon:
            Gamepad2,
    },


    /* =========================================
       02 — LIBRARY MANAGEMENT SYSTEM
    ========================================= */

    {
        id: 2,

        number: '02',

        title:
            'Library Management System',

        subtitle:
            'Java Desktop Application · Team Project',

        category:
            'JAVA APPLICATION',

        liveUrl:
            null,

        repoUrl:
            'https://github.com/Luckyyy-spd/LibraryManagementSystem',

        image:
            libraryPreview,

        description:
            'A Java-based desktop Library Management System developed as a collaborative project for organizing books, members, librarians, borrowing transactions, returned books, and library records.',

        fullDescription:
            'A collaborative Java desktop application designed to support common library management operations through an administrative interface. The system organizes book information, member and librarian records, borrowing and return transactions, reports, and other library-related information in one application. This project was developed as a team project, with the source code available through the project repository.',

        tags: [
            'Java',
            'Desktop Application',
            'Library System',
            'Team Project',
            'CRUD',
        ],

        features: [
            'Book information management',
            'Member record management',
            'Librarian management',
            'Borrowed book transaction monitoring',
            'Returned book record management',
            'Reports and administrative tools',
        ],

        icon:
            Library,
    },


    /* =========================================
       03 — MAS-SNP
    ========================================= */

    {
        id: 3,

        number: '03',

        title:
            'Ministry of Altar Servers — Sto. Niño Parish (MAS-SNP)',

        subtitle:
            'Bustos, Bulacan Parish Community Platform',

        category:
            'COMMUNITY WEB APP',

        liveUrl:
            'https://mas-snp.vercel.app/',

        repoUrl:
            null,

        image:
            masPreview,

        description:
            'Official web application for the Ministry of Altar Servers (MAS) at Sto. Niño Parish (SNP), Bustos, Bulacan. Built to organize ministry information, liturgical assignments, announcements, and community resources.',

        fullDescription:
            'Developed specifically for the Ministry of Altar Servers at Sto. Niño Parish in Bustos, Bulacan. The platform provides a centralized digital space for liturgical schedules, ministry announcements, parish information, historical archives, formation resources, and other content relevant to members of the ministry. The interface was designed to remain accessible and responsive across desktop and mobile devices.',

        tags: [
            'React',
            'Vite',
            'Tailwind CSS',
            'Vercel',
            'Responsive UI',
        ],

        features: [
            'Official Sto. Niño Parish ministry platform',
            'Liturgical duties, assignments and event schedules',
            'Responsive interface for desktop and mobile',
            'Parish and ministry information',
            'Formation resources and digital announcements',
        ],

        icon:
            Globe,
    },


    /* =========================================
       04 — SOAMC
    ========================================= */

    {
        id: 4,

        number: '04',

        title:
            'SOAMC — Cadet Registration & Monitoring System',

        subtitle:
            'Capstone Project · Maritime Cadet Management Platform',

        category:
            'CAPSTONE PROJECT',

        liveUrl:
            'https://soamc.vercel.app/',

        repoUrl:
            null,

        image:
            soamcPreview,

        description:
            'A web-based cadet registration and monitoring system developed as our capstone project for Sea Ocean Atlantic Maritime Consultancy Agency (SOAMC), designed to centralize cadet records, requirements, deployment information, and administrative workflows.',

        fullDescription:
            'Developed as a capstone project for Sea Ocean Atlantic Maritime Consultancy Agency (SOAMC). The system provides a centralized platform for managing cadet profiles, monitoring documentary requirements, organizing cadets according to school and course, tracking deployment records, and supporting administrative reporting. The platform is designed with a responsive interface to make cadet information easier to organize, monitor, and access across different devices.',

        tags: [
            'Capstone',
            'React',
            'Vite',
            'Tailwind CSS',
            'Web System',
            'Responsive UI',
            'Vercel',
        ],

        features: [
            'Centralized cadet registration and profile management',
            'Cadet categorization by school and course',
            'Document and requirement monitoring',
            'Deployment record tracking',
            'Administrative report generation',
            'Responsive interface for desktop, tablet, and mobile',
        ],

        icon:
            Globe,
    },


    /* =========================================
       05 — STAYSCAPE
    ========================================= */

    {
        id: 5,

        number: '05',

        title:
            'StayScape — Vacation Rental & Hotel Booking Platform',

        subtitle:
            'Full-Stack Accommodation System',

        category:
            'FULL-STACK WEB APP',

        liveUrl:
            'https://webp-d5d0e.web.app/',

        repoUrl:
            null,

        image:
            stayscapePreview,

        description:
            'Modern accommodation booking and rental reservation platform with property exploration, Firebase authentication, PayPal payment integration, and automated email notifications.',

        fullDescription:
            'An end-to-end accommodation booking platform designed to provide a smooth reservation experience. Users can explore available properties, review accommodation details, authenticate through Firebase, complete reservations using PayPal, and receive automated booking confirmation notifications through EmailJS.',

        tags: [
            'React',
            'Firebase Auth',
            'Firestore',
            'PayPal API',
            'EmailJS',
            'Vite',
        ],

        features: [
            'Accommodation listings and property exploration',
            'Firebase Authentication and Cloud Firestore',
            'PayPal payment gateway integration',
            'Automated booking confirmation through EmailJS',
            'Responsive booking interface across devices',
        ],

        icon:
            Globe,
    },

];