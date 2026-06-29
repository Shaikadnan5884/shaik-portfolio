import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Mail, Smartphone, Code, Cpu, Terminal } from 'lucide-react';

// --- CUSTOM BRAND ICONS ---
const GithubIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7.17a4.6 4.6 0 0 0-1.3-3.23 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5.8 3.35 6.8 6.5 7.17A4.8 4.8 0 0 0 9.5 19v3"></path>
  </svg>
);

const LinkedinIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

// --- PORTFOLIO DATA ---
const PORTFOLIO_DATA = {
  name: "Shaik Adnan",
  roles: ["Software Engineer", "Android Developer"],
  contact: {
    location: "Hyderabad, Telangana, India",
    email: "shaikshamshuddin072@gmail.com",
    phone: "+91 9948589751",
    linkedin: "https://www.linkedin.com/in/shaikadnan5884",
    github: "https://github.com/Shaikadnan5884",
    portfolio: "https://portfolio-shaikadnan5884.netlify.app/"
  },
  summary: "Detail-oriented Software Engineer and Android Developer with a strong foundation in building scalable applications and intelligent systems. Proficient in Java, Python, and Web Technologies. Proven ability to design intuitive user interfaces and implement robust database schemas to enhance user engagement.",
  experience: [
    {
      title: "Android Development Intern",
      company: "Aenexz Tech",
      period: "06/2026 - Present",
      description: "Assisting in the architecture and development of scalable Android applications utilizing Java and XML within Android Studio to enhance overall performance."
    },
    {
      title: "Internship Student",
      company: "Oasis Info byte",
      period: "04/2026 - 05/2026",
      description: "Created intuitive Android applications and designed robust database schemas with optimized data access layers to significantly improve user engagement and retrieval times."
    },
    {
      title: "Training Intern",
      company: "Indus Tech Solutions",
      period: "05/2024 - 10/2024",
      description: "Developed functional prototypes for diverse Android applications utilizing various APIs to effectively demonstrate core functionalities."
    }
  ],
  projects: [
    {
      title: "Bhainsa Market",
      type: "Android App",
      description: "Engineered a comprehensive local marketplace ecosystem featuring intuitive hierarchical categories, mastering state management, and building custom UI components within Android Studio.",
      codeUrl: "https://github.com/Shaikadnan5884/bhainsa-market", 
      demoUrl: "https://bhainsamarket.netlify.app/"
    },
    {
      title: "Internet Data Usage Tracker",
      type: "Android App",
      description: "Built an Android utility providing real-time data analytics on a daily, weekly, and monthly basis while optimizing background services for minimal battery consumption.",
      codeUrl: "https://github.com/Shaikadnan5884/daily_I_data_tracker",
      demoUrl: "https://datausage.netlify.app/" 
    },
    {
      title: "SMS Forwarder",
      type: "Android App",
      description: "An Android application that captures an incoming SMS and forwards that unaltered message within 1 sec to a recipient, either via a custom Telegram Bot or directly to another mobile number via SMS.",
      codeUrl: "https://github.com/Shaikadnan5884/SMS-Forwarder",
      demoUrl: "https://sms-forworder.netlify.app/"
    },
    {
      title: "Polygon Triangulation Visualization",
      type: "Web Application",
      description: "Developed an interactive tool to visualize computational geometry algorithms and understand the Concept of Matrix Chain Multiplication.",
      codeUrl: "https://github.com/Shaikadnan5884/polygonTraingleVisualization",
      demoUrl: "https://polygontrainglevisualization.netlify.app/" 
    },
    {
      title: "Hierarchical Directory Structure",
      type: "Web Application",
      description: "Created a web-based simulation of OS directory structure concepts (One, Two, and Three-level) applied to an E-commerce context.",
      codeUrl: "https://github.com/Shaikadnan5884/Visualization-of-tree-level-directory-structure-in-E-commerce-platform-web-application",
      demoUrl: "https://os-webapp-treelevelds.netlify.app/" 
    },
    {
      title: "Medimate AI",
      type: "Web Application",
      description: "Developed an AI-powered consultant designed to provide immediate responses to medical inquiries through a natural language interface.",
      codeUrl: "https://github.com/Shaikadnan5884/medimate-ai", 
      demoUrl: "https://medimate-ai.netlify.app/"
    }
  ],
  skills: [
    { category: "Development", items: ["Android Development", "App Prototyping", "Chatbots Development", "UI/UX Design (XML)"], icon: <Smartphone className="text-cyan-400" size={20} /> },
    { category: "Technical", items: ["Java", "Python", "C", "HTML/CSS/JS", "MySQL", "SQLite", "Machine Learning"], icon: <Terminal className="text-indigo-400" size={20} /> },
    { category: "Strengths", items: ["Problem Solving", "Team Collaboration", "Scalable Thinking"], icon: <Cpu className="text-cyan-400" size={20} /> }
  ],
  education: [
    { degree: "B-tech, AI & ML", institution: "Geethanjali College of Eng.", date: "Expected June 2028", gpa: null },
    { degree: "High School Diploma", institution: "SGM Govt Polytechnic", date: "April 2025", gpa: "8.9/10" },
    { degree: "SSC", institution: "TMRS Boys 1", date: "May 2022", gpa: "9.0/10" }
  ]
};

// --- INTERACTIVE BACKGROUND ENGINE ---
const ParticleNetwork = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    let mouse = { x: null, y: null, radius: 150 };
    window.addEventListener('mousemove', e => { mouse.x = e.x; mouse.y = e.y; });
    window.addEventListener('mouseout', () => { mouse.x = null; mouse.y = null; });

    class Particle {
      constructor(x, y, dx, dy, size, color) {
        this.x = x; this.y = y; this.dx = dx; this.dy = dy; this.size = size; this.color = color;
        this.density = (Math.random() * 30) + 1;
      }
      draw() { ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fillStyle = this.color; ctx.fill(); }
      update() {
        if (this.x > canvas.width || this.x < 0) this.dx = -this.dx;
        if (this.y > canvas.height || this.y < 0) this.dy = -this.dy;
        this.x += this.dx; this.y += this.dy;
        if (mouse.x && mouse.y) {
          let dx = mouse.x - this.x, dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius) {
            this.x -= (dx / distance) * this.density;
            this.y -= (dy / distance) * this.density;
          }
        }
        this.draw();
      }
    }

    const init = () => {
      particles = [];
      let numberOfParticles = (canvas.width * canvas.height) / 10000;
      for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 2) + 1;
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let dx = (Math.random() - 0.5);
        let dy = (Math.random() - 0.5);
        let color = Math.random() > 0.5 ? '#22d3ee' : '#818cf8';
        particles.push(new Particle(x, y, dx, dy, size, color));
      }
    };

    const connect = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          let distance = (particles[a].x - particles[b].x) ** 2 + (particles[a].y - particles[b].y) ** 2;
          if (distance < (canvas.width / 7) * (canvas.height / 7)) {
            ctx.strokeStyle = `rgba(129,140,248,0.2)`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => p.update());
      connect();
      requestAnimationFrame(animate);
    };

    init(); animate();
    return () => { window.removeEventListener('resize', resize); };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 bg-slate-950" style={{ opacity: 0.8 }} />;
};

// --- MAIN APPLICATION ---
export default function App() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen text-slate-300 font-sans">
      <ParticleNetwork />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md py-4 border-b border-slate-800' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-xl font-bold text-white tracking-wider flex items-center gap-2">
            <Code className="text-cyan-400" /> S.A
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            {['Home','About','Experience','Projects','Skills','Education'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">{item}</a>
            ))}
          </
