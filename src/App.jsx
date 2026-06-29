import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Mail, Smartphone, Code, ExternalLink, Cpu, Terminal, Globe } from 'lucide-react';

// --- CUSTOM BRAND ICONS ---
// (Since Lucide removed brand icons, we use custom SVGs for GitHub and LinkedIn)
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
    let animationFrameId;
    let particles = [];
    
    // Canvas sizing
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    // Mouse interaction setup
    let mouse = { x: null, y: null, radius: 150 };
    const handleMouseMove = (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    };
    const handleMouseOut = () => {
      mouse.x = null;
      mouse.y = null;
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);

    // Particle Class
    class Particle {
      constructor(x, y, dx, dy, size, color) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.size = size;
        this.color = color;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 30) + 1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        // Bounce off edges
        if (this.x > canvas.width || this.x < 0) this.dx = -this.dx;
        if (this.y > canvas.height || this.y < 0) this.dy = -this.dy;

        // Move particles
        this.x += this.dx;
        this.y += this.dy;

        // Mouse collision & interaction (attract/repel)
        if (mouse.x !== null && mouse.y !== null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          let forceDirectionX = dx / distance;
          let forceDirectionY = dy / distance;
          let maxDistance = mouse.radius;
          let force = (maxDistance - distance) / maxDistance;
          let directionX = forceDirectionX * force * this.density;
          let directionY = forceDirectionY * force * this.density;

          if (distance < mouse.radius) {
            // Subtle repel effect
            this.x -= directionX;
            this.y -= directionY;
          }
        }
        this.draw();
      }
    }

    // Initialize particles
    const init = () => {
      particles = [];
      let numberOfParticles = (canvas.width * canvas.height) / 10000;
      for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 2) + 1;
        let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
        let dx = (Math.random() - 0.5) * 1;
        let dy = (Math.random() - 0.5) * 1;
        // Tech colors: Cyan and Indigo mix
        let color = Math.random() > 0.5 ? '#22d3ee' : '#818cf8'; 
        particles.push(new Particle(x, y, dx, dy, size, color));
      }
    }

    // Connect particles with lines
    const connect = () => {
      let opacityValue = 1;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          let distance = ((particles[a].x - particles[b].x) * (particles[a].x - particles[b].x))
            + ((particles[a].y - particles[b].y) * (particles[a].y - particles[b].y));
          if (distance < (canvas.width / 7) * (canvas.height / 7)) {
            opacityValue = 1 - (distance / 20000);
            ctx.strokeStyle = `rgba(129, 140, 248, ${opacityValue * 0.2})`; // Indigo lines
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    }

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
      }
      connect();
    }

    init();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-10 bg-slate-950"
      style={{ opacity: 0.8 }}
    />
  );
};

// --- REUSABLE COMPONENTS & HOOKS ---

// Hook for scroll animations
const useScrollReveal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
};

const Section = ({ title, children, id }) => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section 
      id={id}
      ref={ref} 
      className={`py-8 md:py-12 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-4 text-slate-100">
        <span className="w-8 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full"></span>
        {title}
      </h2>
      {children}
    </section>
  );
};


const GlassCard = ({ children, className = "" }) => (
  <div className={`bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 md:p-8 hover:border-cyan-500/50 hover:bg-slate-800/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-300 ${className}`}>
    {children}
  </div>
);

// --- MAIN APPLICATION ---
export default function App() {
  const [scrolled, setScrolled] = useState(false);

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen text-slate-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      <ParticleNetwork />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md py-4 border-b border-slate-800' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-xl font-bold text-white tracking-wider flex items-center gap-2">
            <Code className="text-cyan-400" /> S.A
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            {['Home','About','Experience', 'Projects', 'Skills', 'Education'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-[70vh] flex flex-col items-center justify-center text-center">
          <div className="relative mb-8 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full blur opacity-50"></div>
            <img 
                src="/ProfileImage.jpeg" 
                alt="Profile" 
                className="relative w-48 h-48 rounded-full border-4 border-slate-800 object-cover" 
            />  
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">Hi, I'm <span className="text-cyan-400">Shaik Adnan</span></h1>
          <h2 className="text-2xl text-slate-400 mb-8">{PORTFOLIO_DATA.roles.join(" & ")}</h2>
          
            <a href={`mailto:${PORTFOLIO_DATA.contact.email}`}><Mail size={20} /></a>
            <a href={PORTFOLIO_DATA.contact.linkedin} target="_blank"><LinkedinIcon size={20} /></a>
            <a href={PORTFOLIO_DATA.contact.github} target="_blank"><GithubIcon size={20} /></a>
          </div>
        </section>
      <main className="container mx-auto px-6 pt-32 pb-16">
        
            <a href={`mailto:${PORTFOLIO_DATA.contact.email}`} className="flex items-center gap-2 hover:text-cyan-400 transition-colors"><Mail size={16} /> Email Me</a>
            <a href={PORTFOLIO_DATA.contact.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-cyan-400 transition-colors"><LinkedinIcon size={16} /> LinkedIn</a>
            <a href={PORTFOLIO_DATA.contact.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-cyan-400 transition-colors"><GithubIcon size={16} /> GitHub</a>
            </div>
        </div>

        {/* Summary */}
        <Section title="About Me" id="about">
          <GlassCard className="text-lg leading-relaxed text-slate-300 border-l-4 border-l-indigo-500">
            {PORTFOLIO_DATA.summary}
          </GlassCard>
        </Section>

        {/* Experience */}
        <Section title="Experience" id="experience">
          <div className="space-y-6">
            {PORTFOLIO_DATA.experience.map((exp, index) => (
              <GlassCard key={index} className="relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-indigo-500 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{exp.title}</h3>
                    <p className="text-indigo-400 font-medium">{exp.company}</p>
                  </div>
                  <span className="px-3 py-1 bg-slate-800 rounded-md text-sm border border-slate-700 w-max">{exp.period}</span>
                </div>
                <p className="text-slate-400">{exp.description}</p>
              </GlassCard>
            ))}
          </div>
        </Section>

        {/* Projects */}
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
                    
                  </div>
                </div>
                <p className="text-slate-400 flex-grow mb-6 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-5 mt-auto">
                  
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="inline-flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300 w-max"
                    >
                      View Demo &rarr;
                    </a>
                  )}
                </div>
              </GlassCard>
            ))}
          </div>
        </Section>

        {/* Skills & Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6">
          
          {/* Skills */}
          <Section title="Technical Arsenal" id="skills">
            <div className="space-y-6">
              {PORTFOLIO_DATA.skills.map((skillGroup, index) => (
                <div key={index} className="bg-slate-900/30 p-6 rounded-2xl border border-slate-800 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-3">
                    {skillGroup.icon} {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map((skill, idx) => (
                      <span key={idx} className="px-4 py-2 bg-slate-800/80 border border-slate-700 rounded-lg text-sm font-medium text-slate-300 hover:border-cyan-500/50 hover:text-cyan-300 transition-colors cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* Education */}
          <Section title="Education" id="education">
            <div className="space-y-6">
              {PORTFOLIO_DATA.education.map((edu, index) => (
                <GlassCard key={index} className="flex flex-col md:flex-row justify-between md:items-center gap-4 border-l-4 border-l-cyan-500/50">
                  <div>
                    <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                    <p className="text-indigo-400 text-sm mt-1">{edu.institution}</p>
                  </div>
                  <div className="text-right flex flex-row md:flex-col justify-between items-center md:items-end gap-2">
                    <span className="text-slate-400 text-sm whitespace-nowrap">{edu.date}</span>
                    {edu.gpa && <span className="text-cyan-400 text-sm font-bold bg-cyan-950/30 px-2 py-1 rounded">GPA: {edu.gpa}</span>}
                  </div>
                </GlassCard>
              ))}

              {/* Certificates & Languages mini-cards */}
              <div className="grid grid-cols-2 gap-6 mt-6">
                 <div className="bg-slate-900/30 p-5 rounded-2xl border border-slate-800 backdrop-blur-sm">
                    <h4 className="text-white font-semibold mb-3">Certificates</h4>
                    <ul className="text-sm text-slate-400 space-y-2 list-disc list-inside marker:text-cyan-500">
                      <li>Indus Tech Training</li>
                      <li>IBM Workshop</li>
                      <li>AICTC IOT</li>
                    </ul>
                 </div>
                 <div className="bg-slate-900/30 p-5 rounded-2xl border border-slate-800 backdrop-blur-sm">
                    <h4 className="text-white font-semibold mb-3">Languages</h4>
                    <ul className="text-sm text-slate-400 space-y-2 flex flex-col">
                      <li className="flex justify-between"><span>Hindi</span><span className="text-indigo-400">C1</span></li>
                      <li className="flex justify-between"><span>Urdu</span><span className="text-indigo-400">C1</span></li>
                      <li className="flex justify-between"><span>English</span><span className="text-indigo-400">B2</span></li>
                      <li className="flex justify-between"><span>Telugu</span><span className="text-indigo-400">B1</span></li>
                      <li className="flex justify-between"><span>Arabic</span><span className="text-indigo-400">A2</span></li>
                    </ul>
                 </div>
              </div>
            </div>
          </Section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/60 bg-slate-950/50 backdrop-blur-lg mt-12 py-8 text-center text-slate-500 text-sm">
        <p>&copy; 2026 Shaik Adnan. Engineered with React & Tailwind.</p>
      </footer>
    </div>
  );
}
