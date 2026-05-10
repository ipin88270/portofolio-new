// Initialize AOS Animation
AOS.init({
    duration: 800,
    once: true,
    offset: 100,
});

// Custom Cursor Glow
const cursorGlow = document.getElementById('cursor-glow');
window.addEventListener('mousemove', (e) => {
    if (window.innerWidth > 768) {
        cursorGlow.style.left = `${e.clientX}px`;
        cursorGlow.style.top = `${e.clientY}px`;
    }
});

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('glass-dark', 'py-4');
        navbar.classList.remove('py-6', 'bg-transparent');
    } else {
        navbar.classList.add('py-6', 'bg-transparent');
        navbar.classList.remove('glass-dark', 'py-4');
    }
});

// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
    
    // Toggle Icon
    const icon = menuBtn.querySelector('i');
    if (mobileMenu.classList.contains('flex')) {
        icon.classList.replace('ph-list', 'ph-x');
    } else {
        icon.classList.replace('ph-x', 'ph-list');
    }
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
        
        // Reset Icon
        const icon = menuBtn.querySelector('i');
        icon.classList.replace('ph-x', 'ph-list');
    });
});

// Data Injection
const skills = [
    { name: 'Cisco Networking', level: 90 },
    { name: 'Mikrotik Configuration', level: 85 },
    { name: 'Hardware Troubleshooting', level: 85 },
    { name: 'Linux Administration', level: 80 },
    { name: 'Python Programming', level: 75 },
    { name: 'IoT Development', level: 70 },
    { name: 'Cyber Security Dasar', level: 65 },
];

const skillsContainer = document.getElementById('skills-container');
skills.forEach((skill, index) => {
    skillsContainer.innerHTML += `
        <div data-aos="fade-right" data-aos-delay="${index * 100}">
            <div class="flex justify-between items-center mb-2">
                <span class="text-gray-300 font-medium">${skill.name}</span>
                <span class="text-cyanGlow text-sm font-bold">${skill.level}%</span>
            </div>
            <div class="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <div class="h-full bg-gradient-to-r from-neonBlue to-cyanGlow rounded-full relative skill-fill w-0" data-width="${skill.level}%">
                    <div class="absolute top-0 right-0 bottom-0 w-4 bg-white/30 blur-sm"></div>
                </div>
            </div>
        </div>
    `;
});

// Animate Skills Bar on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bars = entry.target.querySelectorAll('.skill-fill');
            bars.forEach(bar => {
                setTimeout(() => {
                    bar.style.width = bar.getAttribute('data-width');
                }, 300);
            });
            observer.unobserve(entry.target);
        }
    });
});
observer.observe(document.getElementById('skills'));

const experiences = [
    {
        title: "Junior Technical Support Training",
        organization: "Training Center",
        date: "2026",
        type: "education",
        desc: "Mempelajari fundamental troubleshooting hardware, software, dan jaringan dasar untuk kebutuhan enterprise.",
        icon: "ph-student"
    },
    {
        title: "Student Developer Initiative Wave 5",
        organization: "SDI",
        date: "2024",
        type: "education",
        desc: "Berpartisipasi dalam pengembangan proyek teknologi dan kolaborasi tim dalam skala pelajar.",
        icon: "ph-student"
    },
    {
        title: "IT Support Intern",
        organization: "PT. Sahabat Tekno Indonesia",
        date: "2025 (4 Bulan)",
        type: "work",
        desc: "Magang kerja menangani perbaikan hardware, instalasi OS, dan maintenance jaringan lokal perusahaan.",
        icon: "ph-briefcase"
    },
    {
        title: "Axioo Class Program",
        organization: "SMKN 1 Boyolangu",
        date: "2023 - 2026",
        type: "education",
        desc: "Program kelas industri intensif berfokus pada perakitan, troubleshooting, dan teknologi jaringan modern.",
        icon: "ph-student"
    }
];

const expContainer = document.getElementById('experience-container');
experiences.forEach((exp, index) => {
    const isEven = index % 2 === 0;
    const colorClass = exp.type === 'work' ? 'text-neonBlue' : 'text-cyanGlow';

    expContainer.innerHTML += `
        <div class="relative flex flex-col md:flex-row items-start md:items-center ${isEven ? 'md:flex-row-reverse' : ''} mb-12" data-aos="fade-up" data-aos-delay="${index * 100}">
            <div class="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-[#050505] border-2 border-cyanGlow transform -translate-x-1/2 flex items-center justify-center z-10">
                <i class="ph ${exp.icon} ${colorClass} text-sm"></i>
            </div>
            <div class="ml-12 md:ml-0 md:w-1/2 ${isEven ? 'md:pl-12' : 'md:pr-12 text-left md:text-right'} w-full">
                <div class="glass-dark p-6 rounded-2xl hover:border-cyanGlow/30 transition-colors w-full">
                    <span class="text-sm font-medium text-cyanGlow mb-2 block">${exp.date}</span>
                    <h3 class="text-xl font-bold text-white mb-1">${exp.title}</h3>
                    <h4 class="text-gray-400 font-medium mb-4">${exp.organization}</h4>
                    <p class="text-gray-500 text-sm leading-relaxed">${exp.desc}</p>
                </div>
            </div>
        </div>
    `;
});

const certificates = [
    { title: "IBM Granite Code Generation and Optimization", issuer: "IBM", year: "2026" },
    { title: "LKS Cyber Security Provinsi Jawa Timur", issuer: "Dinas Pendidikan", year: "2025" },
    { title: "LKS Cyber Security Kabupaten Tulungagung", issuer: "Dinas Pendidikan", year: "2026" },
    { title: "Completion Axioo Class Program", issuer: "Axioo Education", year: "2023" },
    { title: "Junior Technical Support", issuer: "Training Center", year: "2026" }
];

const certContainer = document.getElementById('certificates-container');
certificates.forEach((cert, index) => {
    certContainer.innerHTML += `
        <div data-aos="zoom-in" data-aos-delay="${index * 100}" class="glass-dark p-6 rounded-2xl relative overflow-hidden group hover:border-cyanGlow/40 transition-colors">
            <div class="absolute top-0 right-0 w-24 h-24 bg-cyanGlow/10 rounded-full blur-2xl group-hover:bg-cyanGlow/20 transition-colors"></div>
            <i class="ph ph-certificate text-cyanGlow text-4xl mb-4 block"></i>
            <h3 class="text-lg font-bold text-white mb-2 leading-tight">${cert.title}</h3>
            <div class="flex justify-between items-center mt-4">
                <span class="text-sm text-gray-400">${cert.issuer}</span>
                <span class="text-xs font-mono px-2 py-1 bg-white/5 rounded text-neonBlue">${cert.year}</span>
            </div>
        </div>
    `;
});

const projects = [
    {
        title: "Smart WiFi Switch IoT",
        desc: "Sistem kontrol saklar listrik pintar berbasis IoT menggunakan ESP8266 dan web dashboard.",
        tech: ["ESP8266", "C++", "React", "Node.js"],
        image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "IoT Automatic Plant Watering",
        desc: "Sistem penyiraman tanaman otomatis berdasarkan kelembaban tanah dengan notifikasi Telegram.",
        tech: ["Arduino", "IoT", "Sensors", "Python"],
        image: "https://images.unsplash.com/photo-1584795962384-dce385272216?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SW9UJTIwQXV0b21hdGljJTIwUGxhbnQlMjBXYXRlcmluZ3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        title: "Cisco VLAN Network Design",
        desc: "Desain dan implementasi topologi jaringan VLAN skala enterprise menggunakan Cisco Packet Tracer.",
        tech: ["Cisco", "VLAN", "Routing", "Switching"],
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Linux Server Setup",
        desc: "Konfigurasi web server, DNS, DHCP, dan Mail server menggunakan Debian/Ubuntu Server.",
        tech: ["Linux", "Bash", "Apache", "Bind9"],
        image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Cyber Security Lab",
        desc: "Setup lab virtual untuk penetration testing dan analisis vulnerability pada jaringan lokal.",
        tech: ["Kali Linux", "Wireshark", "Nmap", "Metasploit"],
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800"
    }
];

const projContainer = document.getElementById('projects-container');
projects.forEach((proj, index) => {
    let techHtml = proj.tech.map(t => `<span class="text-xs font-medium px-2 py-1 bg-white/5 text-cyanGlow rounded-md">${t}</span>`).join('');

    projContainer.innerHTML += `
        <div data-aos="fade-up" data-aos-delay="${index * 100}" class="glass-dark rounded-2xl overflow-hidden group hover:-translate-y-2 transition-all duration-300 border border-white/5 hover:border-cyanGlow/50 flex flex-col">
            <div class="relative h-48 overflow-hidden">
                <div class="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10"></div>
                <img src="${proj.image}" alt="${proj.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            
            <div class="p-6 flex-1 flex flex-col">
                <h3 class="text-xl font-bold text-white mb-2">${proj.title}</h3>
                <p class="text-gray-400 text-sm mb-4 line-clamp-2">${proj.desc}</p>
                
                <div class="flex flex-wrap gap-2 mb-6 mt-auto">
                    ${techHtml}
                </div>

                <div class="flex gap-4">
                    <button class="flex-1 glass py-2 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors flex justify-center items-center gap-2">
                        <i class="ph ph-github-logo"></i> Code
                    </button>
                    <button class="flex-1 bg-neonBlue/20 text-neonBlue py-2 rounded-lg text-sm font-medium hover:bg-neonBlue/30 transition-colors flex justify-center items-center gap-2">
                        <i class="ph ph-arrow-square-out"></i> Demo
                    </button>
                </div>
            </div>
        </div>
    `;
});

document.getElementById('copyright-year').innerHTML = `&copy; ${new Date().getFullYear()} Akbar Maulana Dwi Saputra. All rights reserved.`;

// Contact Form Handler
const sendEmailBtn = document.getElementById('send-email-btn');
if (sendEmailBtn) {
    sendEmailBtn.addEventListener('click', () => {
        const name = document.getElementById('contact-name').value.trim();
        const email = document.getElementById('contact-email').value.trim();
        const subject = document.getElementById('contact-subject').value.trim();
        const message = document.getElementById('contact-message').value.trim();

        let body = '';
        if (name) body += `Name: ${name}\n`;
        if (email) body += `Email: ${email}\n\n`;
        if (message) body += message;

        const encodedSubject = encodeURIComponent(subject);
        const encodedBody = encodeURIComponent(body);

        const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=amds090807@gmail.com&su=${encodedSubject}&body=${encodedBody}`;
        window.open(gmailLink, '_blank');
    });
}
