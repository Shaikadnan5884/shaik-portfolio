import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Mail, Smartphone, Code, ExternalLink, Cpu, Terminal, Globe } from 'lucide-react';

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
    { title: "Android Development Intern", company: "Aenexz Tech", period: "06/2026 – Present", description: "Assisting in the architecture and development of scalable Android applications utilizing Java and XML within Android Studio to enhance overall performance" },
    { title: "Internship Student", company: "Oasis Info byte", period: "04/2026 – 05/2026", description: "Created intuitive Android applications and designed robust database schemas with optimized data access layers to significantly improve user engagement and retrieval times." },
    { title: "Training Intern", company: "Indus Tech Solutions", period: "05/2024 – 10/2024", description: "Developed functional prototypes for diverse Android applications utilizing various APIs to effectively demonstrate core functionalities." }
  ],
  projects: [
    { title: "Bhainsa Market", type: "Android App", description: "Engineered a comprehensive local marketplace ecosystem featuring intuitive hierarchical categories, mastering state management, and building custom UI components within Android Studio.", codeUrl: "#", demoUrl: "#" },
    { title: "Internet Data Usage Tracker", type: "Android App", description: "Built an Android utility providing real-time data analytics on a daily, weekly, and monthly basis while optimizing background services for minimal battery consumption.", codeUrl: "#", demoUrl: "#" },
    { title: "SMS Forwarder", type: "Android App", description: "An Android application that captures an incoming SMS and forwards that unaltered message within 1 sec to a recipient, either via a custom Telegram Bot or directly to another mobile number via SMS.", codeUrl: "#", demoUrl: "#" },
    { title: "Polygon Triangulation Visualization", type: "Web Application", description: "Developed an interactive tool to visualize computational geometry algorithms and understand the Concept of Matrix Chain Multiplication.", codeUrl: "#", demoUrl: "#" },
    { title: "Hierarchical Directory Structure", type: "Web Application", description: "Created a web-based simulation of OS directory structure concepts (One, Two, and Three-level) applied to an E-commerce context.", codeUrl: "#", demoUrl: "#" },
    { title: "Medimate AI", type: "Web Application", description: "Developed an AI-powered consultant designed to provide immediate responses to medical inquiries through a natural language interface.", codeUrl: "#", demoUrl: "#" }
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

const ParticleNetwork = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    window.addEventListener('resize', resize);
    resize();
    let mouse = { x: null, y: null, radius: 150 };
    const handleMouseMove = (e) => { mouse.x = e.x; mouse.y = e.y; };
    const handleMouseOut = () => { mouse.x = null; mouse.y = null; };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);
    class Particle {
      constructor(x, y, dx, dy, size, color) { this.x = x; this.y = y; this.dx = dx; this.dy = dy; this.size = size; this.color = color; this.density = (Math.random() * 30) + 1; }
      draw() { ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false); ctx.fillStyle = this.color; ctx.fill(); }
      update() {
        if (this.x > canvas.width || this.x < 0) this.dx = -this.dx;
        if (this.y > canvas.height || this.y < 0) this.dy = -this.dy;
        this.x += this.dx; this.y += this.dy;
        if (mouse.x !== null && mouse.y !== null) {
          let dx = mouse.x - this.x; let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius) { this.x -= (dx / distance) * 2; this.y -= (dy / distance) * 2; }
        }
        this.draw();
      }
    }
    const init = () => {
      particles = [];
      for (let i = 0; i < (canvas.width * canvas.height) / 10000; i++) {
        particles.push(new Particle(Math.random() * canvas.width, Math.random() * canvas.height, (Math.random() - 0.5) * 1, (Math.random() - 0.5) * 1, (Math.random() * 2) + 1, Math.random() > 0.5 ? '#22d3ee' : '#818cf8'));
      }
    }
    const animate = () => { animationFrameId = requestAnimationFrame(animate); ctx.clearRect(0, 0, innerWidth, innerHeight); particles.forEach(p => p.update()); }
    init(); animate();
    return () => { cancelAnimationFrame(animationFrameId); window.removeEventListener('resize', resize); window.removeEventListener('mousemove', handleMouseMove); };
  }, []);
  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 bg-slate-950" style={{ opacity: 0.8 }} />;
};

const Section = ({ title, children, id }) => (
  <section id={id} className="py-16 md:py-24">
    <h2 className="text-3xl font-bold mb-10 flex items-center gap-4 text-slate-100">
      <span className="w-8 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full"></span>
      {title}
    </h2>
    {children}
  </section>
);

const GlassCard = ({ children, className = "" }) => (
  <div className={`bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-500/50 hover:bg-slate-800/50 transition-all duration-300 ${className}`}>
    {children}
  </div>
);

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const handleScroll = () => setScrolled(window.scrollY > 50); window.addEventListener('scroll', handleScroll); return () => window.removeEventListener('scroll', handleScroll); }, []);

  return (
    <div className="min-h-screen text-slate-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      <ParticleNetwork />
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md py-4 border-b border-slate-800' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-xl font-bold text-white flex items-center gap-2"><Code className="text-cyan-400" /> S.A</div>
          <div className="hidden md:flex gap-8 text-sm font-medium">{['Home', 'About', 'Experience', 'Projects', 'Skills', 'Education'].map(item => <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">{item}</a>)}</div>
        </div>
      </nav>

      <main className="container mx-auto px-6 pt-32 pb-16">
        <Section id="home">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1">
              <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">{PORTFOLIO_DATA.name}</span></h1>
              <h2 className="text-2xl text-slate-400 mb-8">{PORTFOLIO_DATA.roles.join(" & ")}</h2>
              <a href="#experience" className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium">View Work</a>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&h=300&fit=crop" alt="Profile" className="relative w-64 h-64 rounded-full border-4 border-slate-800 object-cover shadow-2xl" />
            </div>
          </div>
        </Section>

        <Section title="About Me" id="about">
          <GlassCard className="text-lg leading-relaxed text-slate-300 border-l-4 border-l-indigo-500">{PORTFOLIO_DATA.summary}</GlassCard>
        </Section>

        <Section title="Experience" id="experience">
          <div className="space-y-6">{PORTFOLIO_DATA.experience.map((exp, i) => (
            <GlassCard key={i}>
              <h3 className="text-xl font-bold text-white">{exp.title}</h3>
              <p className="text-indigo-400 mb-2">{exp.company} • {exp.period}</p>
              <p className="text-slate-400">{exp.description}</p>
            </GlassCard>
          ))}</div>
        </Section>

        <Section title="Featured Projects" id="projects">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PORTFOLIO_DATA.projects.map((project, index) => (
              <GlassCard key={index} className="flex flex-col h-full group">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                    <span className="text-sm text-indigo-400 mt-1 block">{project.type}</span>
                  </div>
                  <div className="flex gap-2">
                    {project.codeUrl && (
                      <a href={project.codeUrl} target="_blank" rel="noreferrer" className="p-2 bg-slate-800 rounded-full hover:bg-cyan-500 hover:text-slate-900 transition-colors" title="View Source Code">
                        <GithubIcon size={18} />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a href={project.demoUrl} target="_blank" rel="noreferrer" className="p-2 bg-slate-800 rounded-full hover:bg-indigo-500 hover:text-white transition-colors" title="View Live Demo">
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-slate-400 flex-grow mb-6 text-sm leading-relaxed">{project.description}</p>
              </GlassCard>
            ))}
          </div>
        </Section>
      </main>
    </div>
  );
}
