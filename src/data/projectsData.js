import {
    Globe,
    Gamepad2,
    Library,
    Smartphone,
    Palette,
} from 'lucide-react';

import astroclashPreview from '../images/astroclash-preview.jpg';
import handbookPreview from '../images/handbook-preview.png';
import gomsPreview from '../images/goms-preview.jpg';
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

        downloadUrl:
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
       02 — BULSU E-HANDBOOK
    ========================================= */

    {
        id: 2,

        number: '02',

        title:
            'BulSU E-Handbook — Bustos Campus',

        subtitle:
            'Android Studio · Proposed Student Handbook',

        category:
            'MOBILE DEVELOPMENT',

        liveUrl:
            null,

        repoUrl:
            null,

        downloadUrl:
            'https://github.com/saintjohn31/rai-dev-portfolio/releases/download/bulsu-handbook-v1.0/bulsuEHandBook.apk',

        downloadName:
            'BulSU-E-Handbook.apk',

        image:
            handbookPreview,

        description:
            'A proposed Android e-handbook for Bulacan State University — Bustos Campus, designed to give students quick access to campus policies, schedules, services, downloadable forms, and essential university resources.',

        fullDescription:
            'BulSU E-Handbook is a proposed Android mobile application developed as a digital companion for students of Bulacan State University — Bustos Campus. The application provides a centralized and mobile-friendly way to access important handbook information, campus policies, schedules, student services, downloadable forms, campus resources, and other useful university information. The project focuses on making essential campus references easier to access through a clean and convenient Android interface, including content designed for quick reference and offline availability.',

        tags: [
            'Android Studio',
            'Java',
            'Mobile Development',
            'BulSU Bustos',
            'E-Handbook',
            'APK',
            'Student Resources',
            'Offline Content',
        ],

        features: [
            'Digital student handbook for BulSU Bustos Campus',
            'Campus policies and handbook information',
            'Student schedule and academic references',
            'Downloadable forms and campus resources',
            'Campus map and contact directory',
            'Quick-access navigation for essential information',
            'Offline-ready handbook content',
            'Installable Android APK',
        ],

        icon:
            Smartphone,
    },


    /* =========================================
   03 — GOMS OUTPUT
========================================= */

    {
        id: 3,

        number: '03',

        title:
            'GOMS Output — School Mobile Application',

        subtitle:
            'Figma · Mobile Application UI/UX Design',

        category:
            'UI / UX DESIGN',

        liveUrl:
            null,

        figmaUrl:
            'https://www.figma.com/design/7lsKIkL2odBRDNEWjBuPTv/GOMS-Output?node-id=1-205&t=J9JsKyJQPIIbmUo5-0',

        repoUrl:
            null,

        downloadUrl:
            null,

        image:
            gomsPreview,

        // Dedicated positioning for the project-card thumbnail
        imagePosition:
            'center 55%',

        description:
            'A school mobile application UI/UX project designed in Figma, featuring a clean and modern interface with onboarding, sign-in, account creation, and user-focused mobile navigation.',

        fullDescription:
            'GOMS Output is a school mobile application UI/UX design project created in Figma. The project focuses on designing a clean, organized, and user-friendly mobile interface while applying principles of visual hierarchy, spacing, typography, consistency, and intuitive navigation. The design includes an onboarding experience, sign-in and account creation interfaces, and other mobile application screens developed as part of an academic project.',

        tags: [
            'Figma',
            'UI / UX Design',
            'Mobile Application',
            'School Project',
            'Prototyping',
            'Interface Design',
        ],

        features: [
            'School mobile application UI/UX project',
            'Mobile-first interface design',
            'Clean onboarding experience',
            'Sign-in and account creation interfaces',
            'User-centered visual hierarchy',
            'Consistent spacing and typography',
            'Figma-based interface prototyping',
        ],

        icon:
            Palette,
    },


    /* =========================================
       04 — LIBRARY MANAGEMENT SYSTEM
    ========================================= */

    {
        id: 4,

        number: '04',

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

        downloadUrl:
            null,

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
       05 — MAS-SNP
    ========================================= */

    {
        id: 5,

        number: '05',

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

        downloadUrl:
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
       06 — SOAMC
    ========================================= */

    {
        id: 6,

        number: '06',

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

        downloadUrl:
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
       07 — STAYSCAPE
    ========================================= */

    {
        id: 7,

        number: '07',

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

        downloadUrl:
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
