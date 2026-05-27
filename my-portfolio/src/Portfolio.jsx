import React, { useEffect, useState } from 'react';
import { 
  Mail, Phone, ArrowUpRight, Code, Briefcase, GraduationCap, 
  Terminal, Sparkles, ExternalLink 
} from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('projects');

  // Track active section on scroll for the interactive sidebar indicator
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['projects', 'experience', 'skills', 'education'];
      const scrollPosition = window.scrollY + 300;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && scrollPosition >= el.offsetTop && scrollPosition < el.offsetTop + el.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-black text-zinc-300 font-sans antialiased relative overflow-x-hidden selection:bg-zinc-800 selection:text-white">
      
      {/* ─── PREMIUM MATRIX BACKGROUND ENGINE ─── */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c0c0e_1px,transparent_1px),linear-gradient(to_bottom,#0c0c0e_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-zinc-900/20 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-zinc-900/10 rounded-full blur-[160px] pointer-events-none" />

      {/* FIXED DYNAMIC SIDEBAR CONSOLE */}
      <aside className="fixed left-8 top-1/3 z-50 hidden xl:flex flex-col gap-6 border-l border-zinc-900 pl-4 py-4">
        {['projects', 'experience', 'skills', 'education'].map((item) => (
          <button
            key={item}
            onClick={() => scrollTo(item)}
            className={`text-left text-xs font-mono tracking-widest uppercase transition-all flex items-center gap-2 group outline-none focus:outline-none ${
              activeSection === item ? 'text-white font-bold translate-x-1' : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            <span className={`h-1 w-1 rounded-full transition-all ${activeSection === item ? 'bg-zinc-300 w-3' : 'bg-zinc-800 group-hover:bg-zinc-400'}`} />
            {item}
          </button>
        ))}
      </aside>

      {/* MAIN CONTAINER */}
      <div className="max-w-5xl mx-auto px-6 py-20 md:py-40 relative z-10 space-y-32">
        
        {/* ─── SECTION 1: HERO IDENTITY ─── */}
        <header className="space-y-8 border-b border-zinc-900 pb-16 relative">
          <div className="flex flex-col-reverse lg:flex-row lg:justify-between lg:items-start gap-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-zinc-800 bg-zinc-950 text-zinc-300 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                STATUS: OPEN TO SDE ROLES
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-100 to-zinc-400">
                SOURABH MALHOTRA
              </h1>
              <h2 className="text-lg md:text-lg font-semibold tracking-tight text-zinc-100 flex items-center gap-2">
                Full-Stack Developer 
              </h2>
            </div>
            
            {/* Contact & Social Action Buttons */}
            <div className="flex flex-wrap gap-2.5 max-w-md lg:justify-end">
              <a 
                href="mailto:malhotrasourabh034@gmail.com"
                className="px-3 py-2 rounded-lg border border-zinc-800 bg-zinc-950 text-xs font-mono text-zinc-200 hover:bg-zinc-900 hover:text-white hover:border-zinc-500 transition-all flex items-center gap-2 shadow-2xl group outline-none focus:outline-none focus:ring-0"
              >
                <Mail size={13} className="text-zinc-400 group-hover:text-white transition-colors" /> malhotrasourabh034@gmail.com
              </a>
              <a 
                href="tel:+919034145122"
                className="px-3 py-2 rounded-lg border border-zinc-800 bg-zinc-950 text-xs font-mono text-zinc-200 hover:bg-zinc-900 hover:text-white hover:border-zinc-500 transition-all flex items-center gap-2 shadow-2xl group outline-none focus:outline-none focus:ring-0"
              >
                <Phone size={13} className="text-zinc-400 group-hover:text-white transition-colors" /> +91 9034145122
              </a>
              <a 
                href="https://www.linkedin.com/in/sourabh-malhotra-bb1b91269/" 
                target="_blank" 
                rel="noreferrer"
                className="px-3 py-2 rounded-lg border border-zinc-800 bg-zinc-950 text-xs font-mono text-zinc-200 hover:bg-zinc-900 hover:text-white hover:border-zinc-500 transition-all flex items-center gap-1.5 shadow-2xl outline-none focus:outline-none focus:ring-0"
              >
                LinkedIn <ExternalLink size={12} />
              </a>
              <a 
                href="https://github.com/SOURABH-MALHOTRA" 
                target="_blank" 
                rel="noreferrer"
                className="px-3 py-2 rounded-lg border border-zinc-800 bg-zinc-950 text-xs font-mono text-zinc-200 hover:bg-zinc-900 hover:text-white hover:border-zinc-500 transition-all flex items-center gap-1.5 shadow-2xl outline-none focus:outline-none focus:ring-0"
              >
                GitHub <ExternalLink size={12} />
              </a>
            </div>
          </div>
          
          <p className="text-base md:text-lg leading-relaxed text-zinc-300 max-w-4xl font-light">
            Enthusiastic Full-Stack Developer with strong expertise in scalable web development using the MERN stack. Skilled in building responsive, user-friendly applications and writing clean, maintainable code. Passionate about learning new technologies and contributing to impactful software solutions as a Software Development Engineer.
          </p>

          {/* UPPER HERO STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
            {[
              { label: 'Core Stack', val: 'MERN (React / Node)' },
              { label: 'Languages', val: 'C, C++, JavaScript' },
              { label: 'Methodology', val: 'Clean, Maintainable Code' },
              { label: 'Target Role', val: 'Software Engineer (SDE)' }
            ].map((stat, i) => (
              <div 
                key={i} 
                className="border border-zinc-900 bg-zinc-950/40 p-4 rounded-lg transition-all duration-300 ease-out hover:border-zinc-500 hover:bg-zinc-950/80 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-10px_rgba(255,255,255,0.1)] group/hero"
              >
                <p className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 group-hover/hero:text-zinc-300 transition-colors">{stat.label}</p>
                <p className="text-xs font-medium text-zinc-200 mt-1 group-hover/hero:text-white transition-colors">{stat.val}</p>
              </div>
            ))}
          </div>
        </header>

        {/* ─── SECTION 2: BENTO PROJECTS GRID (FIXED: COLORED TRACK HEADING) ─── */}
        <section id="projects" className="space-y-8 scroll-mt-24">
          <div className="flex justify-between items-end border-b border-zinc-900 pb-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold flex items-center gap-2">
              <Terminal size={14} className="text-indigo-400"/>Technical Projects
            </h3>
            <span className="text-[11px] font-mono text-zinc-500">PRODUCTION WORKSPACES</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* 1. Job Portal Block */}
            <div className="relative md:col-span-2 p-6 rounded-xl border border-zinc-900 bg-zinc-950/20 transition-all duration-300 ease-out hover:border-indigo-500 hover:bg-zinc-950/50 hover:-translate-y-1 hover:shadow-[0_12px_25px_-12px_rgba(99,102,241,0.2)] group flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <a href="https://job-portal-mern-stack-m3i8.vercel.app/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 outline-none focus:outline-none">
                    <h4 className="font-bold text-xl text-white group-hover:text-indigo-400 transition-colors flex items-center gap-2">
                      Job Portal 
                      <ArrowUpRight size={16} className="text-zinc-400 group-hover:text-indigo-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                    </h4>
                  </a>
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 bg-zinc-900 text-zinc-300 border border-zinc-800 rounded-md transition-colors group-hover:border-indigo-500/40 group-hover:text-indigo-200">MERN Stack</span>
                </div>
                <p className="text-xs md:text-sm text-zinc-300 leading-relaxed font-light group-hover:text-white transition-colors">
                  Developed a full-stack MERN job portal with separate modules for job seekers and job creators. Implemented job posting, job search with filters, application submission, and authentication system for secure access. Designed a responsive interface ensuring smooth experience across devices.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-900/60 transition-colors group-hover:border-indigo-500/20">
                {['MongoDB', 'Express.js', 'React.js', 'Node.js'].map(t => (
                  <span key={t} className="text-[10px] font-mono px-2 py-0.5 bg-zinc-900 text-zinc-300 rounded transition-colors group-hover:bg-indigo-950/50 group-hover:text-indigo-200">{t}</span>
                ))}
              </div>
            </div>

            {/* 2. Architecture Firm Website Block */}
            <div className="relative p-6 rounded-xl border border-zinc-900 bg-zinc-950/20 transition-all duration-300 ease-out hover:border-emerald-500 hover:bg-zinc-950/50 hover:-translate-y-1 hover:shadow-[0_12px_25px_-12px_rgba(16,185,129,0.2)] group flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <a href="https://malhotra-associates.vercel.app/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 outline-none focus:outline-none">
                    <h4 className="font-bold text-xl text-white group-hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                      Architecture Firm 
                      <ArrowUpRight size={16} className="text-zinc-400 group-hover:text-emerald-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                    </h4>
                  </a>
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 bg-zinc-900 text-zinc-300 border border-zinc-800 rounded transition-colors group-hover:border-emerald-500/40 group-hover:text-emerald-200">Frontend</span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed font-light group-hover:text-white transition-colors">
                  Built a professional, user-focused interface highlighting the firm's brand and services. Created reusable React components with clean structure, consistent styling, and pixel-perfect responsiveness. Focused on modern UI/UX principles to ensure visual appeal.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-900/60 transition-colors group-hover:border-emerald-500/20">
                {['React.js', 'Tailwind CSS'].map(t => (
                  <span key={t} className="text-[10px] font-mono px-2 py-0.5 bg-zinc-900 text-zinc-300 rounded transition-colors group-hover:bg-emerald-950/50 group-hover:text-emerald-200">{t}</span>
                ))}
              </div>
            </div>

            {/* 3. Architect Portfolio Website Block */}
            <div className="relative md:col-span-2 p-6 rounded-xl border border-zinc-900 bg-zinc-950/20 transition-all duration-300 ease-out hover:border-teal-500 hover:bg-zinc-950/50 hover:-translate-y-1 hover:shadow-[0_12px_25px_-12px_rgba(20,184,166,0.2)] group flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <a href="https://malhotraarchitects.netlify.app/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 outline-none focus:outline-none">
                    <h4 className="font-bold text-xl text-white group-hover:text-teal-400 transition-colors flex items-center gap-1.5">
                      Architect Portfolio 
                      <ArrowUpRight size={16} className="text-zinc-400 group-hover:text-teal-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                    </h4>
                  </a>
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 bg-zinc-900 text-zinc-300 border border-zinc-800 rounded transition-colors group-hover:border-teal-500/40 group-hover:text-teal-200">MERN STACK</span>
                </div>
                <p className="text-xs md:text-sm text-zinc-300 leading-relaxed font-light group-hover:text-white transition-colors">
                  Built a professional portfolio website for an architect to showcase projects as posts with blog style descriptions and images. Integrated contact form for client inquiries and responsive design for cross-device compatibility. Developed an intuitive content management flow.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-900/60 transition-colors group-hover:border-teal-500/20">
                {['MongoDB', 'Express.js', 'React.js', 'Node.js'].map(t => (
                  <span key={t} className="text-[10px] font-mono px-2 py-0.5 bg-zinc-900 text-zinc-300 rounded transition-colors group-hover:bg-teal-950/50 group-hover:text-teal-200">{t}</span>
                ))}
              </div>
            </div>

            {/* 4. AI Interview Assistant Block */}
            <div className="relative md:col-span-3 p-6 rounded-xl border border-zinc-900 bg-zinc-950/20 transition-all duration-300 ease-out hover:border-orange-500 hover:bg-zinc-950/50 hover:-translate-y-1 hover:shadow-[0_12px_25px_-12px_rgba(249,115,22,0.2)] group flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <a href="https://ai-interview-beta-seven.vercel.app/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 outline-none focus:outline-none">
                    <h4 className="font-bold text-xl text-white group-hover:text-orange-500 transition-colors flex items-center gap-2">
                      AI Interview Assistant 
                      <ArrowUpRight size={16} className="text-zinc-400 group-hover:text-orange-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                    </h4>
                  </a>
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 bg-zinc-900 text-zinc-300 border border-zinc-800 rounded-md transition-colors group-hover:border-orange-500/40 group-hover:text-orange-200">Intelligent Module</span>
                </div>
                <p className="text-xs md:text-sm text-zinc-300 leading-relaxed font-light group-hover:text-white transition-colors">
                  Resume Parsing: Extracts candidate Name, Email, and Phone. Chatbot prompts for any missing details. AI-driven Interview: Automatically generates 6 questions (Easy → Medium → Hard) with per-question timers, auto-save and resume functionality. Generates final score and summary. Interviewer Dashboard: Provides candidate scores, summaries, detailed Q&A, with search and sort features.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-zinc-900/60 transition-colors group-hover:border-orange-500/20">
                <div className="flex flex-wrap gap-1.5">
                  {['React Vite', 'Ant Design', 'Redux Toolkit + Persist', 'OpenAI API'].map(t => (
                    <span key={t} className="text-[10px] font-mono px-2 py-0.5 bg-zinc-900 text-zinc-300 rounded transition-colors group-hover:bg-orange-950/50 group-hover:text-orange-200">{t}</span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ─── SECTION 3: PROFESSIONAL EXPERIENCE TIMELINE (FIXED: COLORED TRACK HEADING) ─── */}
        <section id="experience" className="space-y-8 scroll-mt-24">
          <div className="flex justify-between items-end border-b border-zinc-900 pb-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold flex items-center gap-2">
              <Briefcase size={14} className="text-blue-400" />Freelance Experience
            </h3>
            <span className="text-[11px] font-mono text-zinc-500">TRACK RECORD</span>
          </div>

          <div className="border-l-2 border-zinc-900 pl-6 space-y-6 ml-2">
            
            {/* Freelance 1: Nandani Jewelers Block */}
            <div className="relative p-6 rounded-xl border border-zinc-900 bg-zinc-950/20 transition-all duration-300 ease-out hover:border-blue-500 hover:bg-zinc-950/50 hover:-translate-y-1 hover:shadow-[0_12px_25px_-12px_rgba(59,130,246,0.2)] group flex flex-col justify-between space-y-4">
              <div className="absolute -left-[35px] top-8 w-4 h-4 rounded-full bg-black border-2 border-zinc-700 transition-colors group-hover:border-blue-400" />
              
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                  <div className="inline-flex items-center gap-2">
                    <h4 className="text-xl font-bold text-white tracking-tight flex items-center gap-1.5 group-hover:text-blue-400 transition-colors">
                      Nandani Jewelers (E-commerce - Jewelry)
                      <a href="https://nandanijewellers.vercel.app/" target="_blank" rel="noreferrer" className="text-zinc-400 group-hover:text-blue-400 transition-colors outline-none focus:outline-none"><ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" /></a>
                    </h4>
                  </div>
                  <span className="text-xs font-mono text-zinc-300 bg-zinc-900/60 border border-zinc-800 px-2.5 py-0.5 rounded whitespace-nowrap self-start sm:self-auto transition-colors group-hover:border-blue-500/40 group-hover:text-blue-200">Freelance Web Developer</span>
                </div>
                <p className="text-xs md:text-sm text-zinc-300 leading-relaxed font-light group-hover:text-white transition-colors">
                  Developed a full-stack MERN e-commerce platform featuring product listings, product filters, and shopping cart for an easy online shopping experience. Designed a responsive UI to deliver an intuitive browsing experience across devices.
                </p>
              </div>
            </div>

            {/* Freelance 2: Faith and Fast Block */}
            <div className="relative p-6 rounded-xl border border-zinc-900 bg-zinc-950/20 transition-all duration-300 ease-out hover:border-amber-500 hover:bg-zinc-950/50 hover:-translate-y-1 hover:shadow-[0_12px_25px_-12px_rgba(245,158,11,0.2)] group flex flex-col justify-between space-y-4">
              <div className="absolute -left-[35px] top-8 w-4 h-4 rounded-full bg-black border-2 border-zinc-700 transition-colors group-hover:border-amber-400" />
              
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                  <div className="inline-flex items-center gap-2">
                    <h4 className="text-xl font-bold text-white tracking-tight flex items-center gap-1.5 group-hover:text-amber-400 transition-colors">
                      Faith and Fast (E-commerce - Clothing)
                      <a href="https://faithandfast.com/" target="_blank" rel="noreferrer" className="text-zinc-400 group-hover:text-amber-400 transition-colors outline-none focus:outline-none"><ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" /></a>
                    </h4>
                  </div>
                  <span className="text-xs font-mono text-zinc-300 bg-zinc-900/60 border border-zinc-800 px-2.5 py-0.5 rounded whitespace-nowrap self-start sm:self-auto transition-colors group-hover:border-amber-500/40 group-hover:text-amber-200">Freelance Web Developer</span>
                </div>
                <p className="text-xs md:text-sm text-zinc-300 leading-relaxed font-light group-hover:text-white transition-colors">
                  Built a scalable MERN web application with optimized backend APIs, enabling smooth product browsing and order placement. Integrated order management, and secure payment gateway, along with a mobile-friendly design to enhance customer engagement and ease of use.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ─── SECTION 4: SKILLS MATRIX (FIXED: COLORED TRACK HEADING) ─── */}
        <section id="skills" className="space-y-8 scroll-mt-24">
          <div className="flex justify-between items-end border-b border-zinc-900 pb-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold flex items-center gap-2">
              <Code size={14} className="text-emerald-400" />Technical Skills
            </h3>
            <span className="text-[11px] font-mono text-zinc-500">COMPILED MATRIX</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { 
                cat: 'Programming Languages', 
                tech: ['C', 'C++', 'JavaScript'], 
                hover: 'hover:border-cyan-500 hover:shadow-[0_12px_20px_-12px_rgba(6,182,212,0.15)] group/s1', 
                txt: 'text-cyan-400/90 font-semibold group-hover/s1:text-cyan-400', 
                fontTxt: 'text-cyan-100 group-hover/s1:text-white', 
                dot: 'bg-cyan-500' 
              },
              { 
                cat: 'Frontend', 
                tech: ['React.js', 'Tailwind CSS', 'HTML', 'CSS'], 
                hover: 'hover:border-rose-500 hover:shadow-[0_12px_20px_-12px_rgba(244,63,94,0.15)] group/s2', 
                txt: 'text-rose-400/90 font-semibold group-hover/s2:text-rose-400', 
                fontTxt: 'text-rose-100 group-hover/s2:text-white', 
                dot: 'bg-rose-500' 
              },
              { 
                cat: 'Backend & DB', 
                tech: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT', 'SQL'], 
                hover: 'hover:border-lime-500 hover:shadow-[0_12px_20px_-12px_rgba(132,204,22,0.15)] group/s3', 
                txt: 'text-lime-400/90 font-semibold group-hover/s3:text-lime-400', 
                fontTxt: 'text-lime-100 group-hover/s3:text-white', 
                dot: 'bg-lime-500' 
              },
              { 
                cat: 'Tools & Platforms', 
                tech: ['Git', 'GitHub', 'Postman', 'VS Code'], 
                hover: 'hover:border-amber-500 hover:shadow-[0_12px_20px_-12px_rgba(245,158,11,0.15)] group/s4', 
                txt: 'text-amber-400/90 font-semibold group-hover/s4:text-amber-400', 
                fontTxt: 'text-amber-100 group-hover/s4:text-white', 
                dot: 'bg-amber-500' 
              }
            ].map((skill, index) => (
              <div key={index} className={`p-5 rounded-xl border border-zinc-900 bg-zinc-950/40 space-y-4 transition-all duration-300 ease-out hover:-translate-y-0.5 ${skill.hover}`}>
                <h4 className={`text-xs font-mono uppercase tracking-widest border-b border-zinc-900 pb-2 transition-colors ${skill.txt}`}>{skill.cat}</h4>
                <div className="flex flex-col gap-2">
                  {skill.tech.map(t => (
                    <span key={t} className={`text-xs font-medium flex items-center gap-2 transition-colors ${skill.fontTxt}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${skill.dot}`} />
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── SECTION 5: EDUCATION CREDENTIALS (FIXED: COLORED TRACK HEADING) ─── */}
        <section id="education" className="space-y-8 scroll-mt-24">
          <div className="flex justify-between items-end border-b border-zinc-900 pb-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-fuchsia-400 font-bold flex items-center gap-2">
              <GraduationCap size={14} className="text-fuchsia-400" />Academic Profile
            </h3>
            <span className="text-[11px] font-mono text-zinc-500">EDUCATION RECORD</span>
          </div>

          <div className="p-8 rounded-xl border border-zinc-900 bg-zinc-950/30 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative overflow-hidden transition-all duration-300 ease-out hover:border-zinc-400 hover:bg-zinc-950/60 hover:-translate-y-1 hover:shadow-[0_12px_25px_-12px_rgba(255,255,255,0.1)] group">
            <div className="space-y-2 relative z-10">
              <h4 className="font-bold text-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-100 to-zinc-300 group-hover:from-white group-hover:to-white">
                Bachelor of Technology (B. Tech)
              </h4>
              <p className="text-sm font-semibold font-mono tracking-wide text-zinc-200 group-hover:text-white">
                Computer Science & Engineering
              </p>
              <p className="text-xs md:text-sm text-zinc-200 font-light pt-2 max-w-2xl transition-colors group-hover:text-white">
                Indian Institute of Information Technology, Design & Manufacturing, Jabalpur
              </p>
              <p className="text-xs font-mono text-zinc-400 font-medium transition-colors group-hover:text-zinc-200">2022-2026 | Madhya Pradesh, India</p>
            </div>
            <span className="text-xs font-mono text-white bg-zinc-900/80 border border-zinc-700 px-4 py-2 rounded-md tracking-widest font-bold shadow-2xl relative z-10 whitespace-nowrap transition-colors group-hover:border-zinc-400 group-hover:bg-zinc-900">
              2022 - 2026
            </span>
          </div>
        </section>

        {/* ─── SECTION 6: INTERESTS & FOCUS (FIXED: COLORED TRACK HEADING) ─── */}
        <section className="space-y-6 pt-12 border-t border-zinc-900">
          <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold flex items-center gap-2">
            <Sparkles size={12} className="text-cyan-400" />Interests & Focus Areas
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: 'Full-Stack Ecosystems', desc: 'Building full-stack web applications from front to back securely.' },
              { title: 'Framework Exploration', desc: 'Exploring new web technologies and frameworks systematically.' },
              { title: 'Analytical Approach', desc: 'Problem solving and logical thinking to structure efficient programs.' }
            ].map((metric, i) => (
              <div key={i} className="p-5 rounded-xl border border-zinc-900/50 bg-zinc-950/10 space-y-2 transition-all duration-300 ease-out hover:border-fuchsia-500 hover:bg-zinc-950/40 hover:-translate-y-1 hover:shadow-[0_12px_20px_-12px_rgba(240,46,170,0.15)] group">
                <h4 className="text-xs font-bold text-zinc-200 flex items-center gap-2 transition-colors group-hover:text-fuchsia-400">
                  <Code size={14} className="text-zinc-500 transition-colors group-hover:text-fuchsia-400" /> {metric.title}
                </h4>
                <p className="text-[11px] text-zinc-300 leading-relaxed font-light transition-colors group-hover:text-white">{metric.desc}</p>
              </div>
            ))}
          </div>
        </section>

       
      </div>
    </div>
  );
}