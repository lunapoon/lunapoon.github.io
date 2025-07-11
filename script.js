// Translations object containing all text content in both languages
const translations = {
    es: {
        // Navigation
        about: "Sobre mí",
        projects: "Proyectos",
        skills: "Habilidades",
        experience: "Experiencia",
        certificates: "Certificados",
        contact: "Contacto",
        downloadCV: "Descargar CV",
        
        // Header
        title: "Ricardo Alejandro Luna Poon",
        subtitle: "Fullstack Developer & Project Leader",
        description: "Diseñando soluciones digitales potentes con visión técnica y liderazgo ágil.",
        
        // About section
        aboutTitle: "🧠 Sobre mí",
        aboutText1: "Ingeniero de software con más de 6 años de experiencia liderando y desarrollando productos tecnológicos.",
        aboutText2: "Mi enfoque combina arquitectura escalable, código limpio y metodologías ágiles para maximizar impacto.",
        aboutText3: "He dirigido equipos en entornos remotos, entregando productos exitosos a tiempo y dentro del presupuesto.",
        
        // Projects section
        projectsTitle: "💼 Proyectos",
        project1Title: "Aplicación Multiplataforma con Gestión de Usuarios y Pagos Banorte",
        project1Desc: "Desarrollo de una aplicación multiplataforma (web, iOS y Android) como PWA utilizando Quasar y Vue.js 3, enfocada en la creación de usuarios y la gestión de pagos. Incluye integración con servicios bancarios de Banorte y soporte para pagos recurrentes, administrados a través de una API robusta desarrollada en C# .NET Core 8. Esta solución garantiza eficiencia operativa, seguridad transaccional y una experiencia de usuario unificada en todos los dispositivos.",
        project2Title: "Aplicación de Gestión de Inventario y Etiquetado de Productos NOM-051",
        project2Desc: "Aplicación Android desarrollada en Java para la gestión de productos, control de inventario en línea y generación automática de etiquetas conforme a la norma NOM-051 de etiquetado de alimentos en México. La solución se complementa con servicios Windows desarrollados en .NET C#, encargados del procesamiento e impresión automática de etiquetas, mejorando la velocidad, precisión operativa y cumplimiento normativo.",
        project3Title: "Sistema Móvil de Inventario y Traducción Asistida por Cámara",
        project3Desc: "Aplicación Android desarrollada en Java para gestionar inventario y facilitar el surtido de pedidos, con capacidad para traducir etiquetas del inglés al español usando la cámara del dispositivo, reconocimiento óptico de caracteres (OCR) y API de traducción.",
        
        // Skills section
        skillsTitle: "🚀 Habilidades",
        
        // Experience section
        experienceTitle: "🛠️ Experiencia",
        exp1Title: "Project Lead – Azzule Systems (2020 - Actualidad)",
        exp1Desc: "Lidero proyectos de desarrollo y mantenimiento de software, coordinando equipos técnicos y asegurando la mejora continua del rendimiento en aplicaciones web, móviles y de escritorio. Enfocado en soluciones escalables, eficientes y alineadas con los objetivos del negocio.",
        exp2Title: "Fullstack Developer – Azzule Systems (2019 - 2020)",
        exp2Desc: "Responsable del mantenimiento correctivo y evolutivo de múltiples sistemas, identificando cuellos de botella, refactorizando código y aplicando buenas prácticas para mejorar el rendimiento general y la eficiencia del software.",
        exp3Title: "Full Stack Developer – BM Systems S.C. (2017 - 2019)",
        exp3Desc: "Diseño, desarrollo y mantenimiento de aplicaciones web, móviles y de escritorio, abordando tanto el frontend como el backend, garantizando rendimiento, escalabilidad y experiencia de usuario.",
        
        // Certificates section
        certificatesTitle: "🏅 Certificados",
        cert1Title: "Scrum Foundation Professional Certification – SFPC™",
        cert1Desc: "Issued by Certiprof.",
        cert2Title: "Idioma Inglés B2",
        cert2Desc: "Issued by Trinity College London.",
        
        // Contact section
        contactTitle: "📬 Contacto",
        email: "E-mail: lunapoon@hotmail.com",
        linkedin: "LinkedIn: /ricardo-luna-poon",
        phone: "Telefono: 6672.14.06.05",
        
        // Footer
        footer: "© 2025 Ricardo Luna | Hecho con 💻 y pasión"
    },
    en: {
        // Navigation
        about: "About me",
        projects: "Projects",
        skills: "Skills",
        experience: "Experience",
        certificates: "Certificates",
        contact: "Contact",
        downloadCV: "Download CV",
        
        // Header
        title: "Ricardo Alejandro Luna Poon",
        subtitle: "Fullstack Developer & Project Leader",
        description: "Designing powerful digital solutions with technical vision and agile leadership.",
        
        // About section
        aboutTitle: "🧠 About me",
        aboutText1: "Software engineer with over 6 years of experience leading and developing technological products.",
        aboutText2: "My approach combines scalable architecture, clean code, and agile methodologies to maximize impact.",
        aboutText3: "I have led teams in remote environments, delivering successful products on time and within budget.",
        
        // Projects section
        projectsTitle: "💼 Projects",
        project1Title: "Multiplatform Application with User Management and Banorte Payments",
        project1Desc: "Development of a multiplatform application (web, iOS and Android) as PWA using Quasar and Vue.js 3, focused on user creation and payment management. Includes integration with Banorte banking services and support for recurring payments, managed through a robust API developed in C# .NET Core 8. This solution ensures operational efficiency, transactional security, and a unified user experience across all devices.",
        project2Title: "Inventory Management and NOM-051 Product Labeling Application",
        project2Desc: "Android application developed in Java for product management, online inventory control, and automatic label generation in compliance with NOM-051 food labeling standards in Mexico. The solution is complemented by Windows services developed in .NET C#, responsible for automatic label processing and printing, improving speed, operational accuracy, and regulatory compliance.",
        project3Title: "Mobile Inventory and Camera-Assisted Translation System",
        project3Desc: "Android application developed in Java to manage inventory and facilitate order fulfillment, with the ability to translate labels from English to Spanish using the device's camera, optical character recognition (OCR), and translation API.",
        
        // Skills section
        skillsTitle: "🚀 Skills",
        
        // Experience section
        experienceTitle: "🛠️ Experience",
        exp1Title: "Project Lead – Azzule Systems (2020 - Present)",
        exp1Desc: "I lead software development and maintenance projects, coordinating technical teams and ensuring continuous improvement in performance of web, mobile, and desktop applications. Focused on scalable, efficient solutions aligned with business objectives.",
        exp2Title: "Fullstack Developer – Azzule Systems (2019 - 2020)",
        exp2Desc: "Responsible for corrective and evolutionary maintenance of multiple systems, identifying bottlenecks, refactoring code, and applying best practices to improve overall performance and software efficiency.",
        exp3Title: "Full Stack Developer – BM Systems S.C. (2017 - 2019)",
        exp3Desc: "Design, development, and maintenance of web, mobile, and desktop applications, addressing both frontend and backend, ensuring performance, scalability, and user experience.",
        
        // Certificates section
        certificatesTitle: "🏅 Certificates",
        cert1Title: "Scrum Foundation Professional Certification – SFPC™",
        cert1Desc: "Issued by Certiprof.",
        cert2Title: "English Language B2",
        cert2Desc: "Issued by Trinity College London.",
        
        // Contact section
        contactTitle: "📬 Contact",
        email: "E-mail: lunapoon@hotmail.com",
        linkedin: "LinkedIn: /ricardo-luna-poon",
        phone: "Phone: 6672.14.06.05",
        
        // Footer
        footer: "© 2025 Ricardo Luna | Made with 💻 and passion"
    }
};

// Current language state
let currentLanguage = 'es';

// Function to update all text content on the page
function updateLanguage(lang) {
    currentLanguage = lang;
    const t = translations[lang];
    
    // Update navigation
    document.querySelector('a[href="#about"]').textContent = t.about;
    document.querySelector('a[href="#projects"]').textContent = t.projects;
    document.querySelector('a[href="#skills"]').textContent = t.skills;
    document.querySelector('a[href="#experience"]').textContent = t.experience;
    document.querySelector('a[href="#certificates"]').textContent = t.certificates;
    document.querySelector('a[href="#contact"]').textContent = t.contact;
    document.querySelector('.download-cv').textContent = t.downloadCV;
    
    // Update header
    document.querySelector('header h1').textContent = t.title;
    document.querySelector('header p').textContent = t.subtitle;
    document.querySelector('header p + p').textContent = t.description;
    
    // Update about section
    document.querySelector('#about h2').textContent = t.aboutTitle;
    const aboutTexts = document.querySelectorAll('#about .about-text p');
    aboutTexts[0].textContent = t.aboutText1;
    aboutTexts[1].textContent = t.aboutText2;
    aboutTexts[2].textContent = t.aboutText3;
    
    // Update projects section
    document.querySelector('#projects h2').textContent = t.projectsTitle;
    const projectCards = document.querySelectorAll('#projects .card');
    projectCards[0].querySelector('h3').textContent = t.project1Title;
    projectCards[0].querySelector('p').textContent = t.project1Desc;
    projectCards[1].querySelector('h3').textContent = t.project2Title;
    projectCards[1].querySelector('p').textContent = t.project2Desc;
    projectCards[2].querySelector('h3').textContent = t.project3Title;
    projectCards[2].querySelector('p').textContent = t.project3Desc;
    
    // Update skills section
    document.querySelector('#skills h2').textContent = t.skillsTitle;
    
    // Update experience section
    document.querySelector('#experience h2').textContent = t.experienceTitle;
    const expCards = document.querySelectorAll('#experience .card');
    expCards[0].querySelector('h3').textContent = t.exp1Title;
    expCards[0].querySelector('p').textContent = t.exp1Desc;
    expCards[1].querySelector('h3').textContent = t.exp2Title;
    expCards[1].querySelector('p').textContent = t.exp2Desc;
    expCards[2].querySelector('h3').textContent = t.exp3Title;
    expCards[2].querySelector('p').textContent = t.exp3Desc;
    
    // Update certificates section
    document.querySelector('#certificates h2').textContent = t.certificatesTitle;
    const certCards = document.querySelectorAll('#certificates .card');
    certCards[0].querySelector('h3').textContent = t.cert1Title;
    certCards[0].querySelector('p').textContent = t.cert1Desc;
    certCards[1].querySelector('h3').textContent = t.cert2Title;
    certCards[1].querySelector('p').textContent = t.cert2Desc;
    
    // Update contact section
    document.querySelector('#contact h2').textContent = t.contactTitle;
    const contactElements = document.querySelectorAll('#contact .card h3');
    contactElements[0].innerHTML = t.email + ' <a href="mailto:lunapoon@hotmail.com" target="_blank" rel="noopener noreferrer">></a>';
    contactElements[1].innerHTML = t.linkedin + ' <a href="https://linkedin.com/in/ricardo-luna-poon" target="_blank" rel="noopener noreferrer">></a>';
    contactElements[2].innerHTML = t.phone + ' <a href="https://api.whatsapp.com/send/?phone=6672140605&text=Hola%20Ricardo%2C%20me%20gustaría%20contactarte" target="_blank" rel="noopener noreferrer">></a>';
    
    // Update footer
    document.querySelector('footer').textContent = t.footer;
    
    // Update language button text
    const langBtn = document.getElementById('language-toggle');
    langBtn.textContent = lang === 'es' ? '🇺🇸 EN' : '🇪🇸 ES';
    
    // Save language preference to localStorage
    localStorage.setItem('preferredLanguage', lang);
}

// Function to toggle language
function toggleLanguage() {
    const newLang = currentLanguage === 'es' ? 'en' : 'es';
    updateLanguage(newLang);
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    // Check for saved language preference
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && (savedLang === 'es' || savedLang === 'en')) {
        updateLanguage(savedLang);
    }
    
    // Mobile menu functionality
    const toggleBtn = document.getElementById('menu-toggle');
    const menuLinks = document.getElementById('menu-links');
    const links = menuLinks.querySelectorAll('a');

    toggleBtn.addEventListener('click', () => {
        menuLinks.classList.toggle('show');
    });

    // Hide menu when clicking on links
    links.forEach(link => {
        link.addEventListener('click', () => {
            menuLinks.classList.remove('show');
        });
    });
    
    // Intersection Observer for section headers
    const sectionHeaders = document.querySelectorAll('section h2');
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
    };
    
    const headerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove active class from all headers
                sectionHeaders.forEach(header => header.classList.remove('active'));
                // Add active class to current header
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);
    
    // Observe all section headers
    sectionHeaders.forEach(header => {
        headerObserver.observe(header);
    });
});