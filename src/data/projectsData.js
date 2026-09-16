import { Globe } from 'lucide-react';

import masPreview from '../images/mas-preview.png';
import stayscapePreview from '../images/stayscape-preview.png';
import soamcPreview from '../images/soamc-preview.jpg';

export const projects = [
    {
        id: 1,
        number: '01',

        title:
            'Ministry of Altar Servers — Sto. Niño Parish (MAS-SNP)',

        subtitle:
            'Bustos, Bulacan Parish Community Platform',

        category:
            'COMMUNITY WEB APP',

        liveUrl:
            'https://mas-snp.vercel.app/',

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

        icon: Globe,
    },

    {
        id: 2,
        number: '02',

        title:
            'StayScape — Vacation Rental & Hotel Booking Platform',

        subtitle:
            'Full-Stack Accommodation System',

        category:
            'FULL-STACK WEB APP',

        liveUrl:
            'https://webp-d5d0e.web.app/',

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

        icon: Globe,
    },

    {
        id: 3,
        number: '03',

        title:
            'SOAMC — Cadet Registration & Monitoring System',

        subtitle:
            'Capstone Project · Maritime Cadet Management Platform',

        category:
            'CAPSTONE PROJECT',

        liveUrl:
            'https://soamc.vercel.app/',

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

        icon: Globe,
    },
];