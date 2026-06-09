import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import ProfileSection from './components/ProfileSection';
import ResumeSection from './components/ResumeSection';
import DevOpsNetworkScene from './components/DevOpsNetworkScene';
import { Terminal, Shield, Cpu, RefreshCw } from 'lucide-react';

function App() {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [apiOnline, setApiOnline] = useState(false);

  // Core high-fidelity fallback dataset for ultimate standalone runnability
  const fallbackData = {
    name: 'Isha Kumari',
    title: '',
    bio: 'Computer Science Engineering student specializing in backend architecture, containerization, and continuous delivery. Passionate about automating systems and solving complex infrastructure bottlenecks.',
    phone: '+91 9771914842',
    email: 'isha42341@gmail.com',
    location: 'Bihar, India',
    education: {
      college: 'United College of Engineering and Research, Prayagraj',
      degree: 'B.Tech in Computer Science and Engineering',
      years: '2023 - 2027',
      gpa: '7.31/10'
    },
    projects: [
      {
        id: 'ecowallet',
        title: 'EcoWallet',
        category: 'Fintech & Sustainability',
        description: 'Fintech & sustainability app featuring sound-based offline payment capabilities via Web Audio API. Built with MERN stack for resilient transactional tracking.',
        tags: ['Node.js', 'React', 'Web Audio API', 'MERN Stack']
      },
      {
        id: 'codnite',
        title: 'Codnite',
        category: 'Infrastructure & DevOps',
        description: 'High-availability distributed system layout optimized for containerization and environment consistency. Leverages infrastructure-as-code design patterns.',
        tags: ['Docker', 'Linux Admin', 'CI/CD', 'High-Availability']
      },
      {
        id: 'breast-cancer',
        title: 'Breast Cancer Detection',
        category: 'AI & Healthcare',
        description: 'AI-driven ML/DL platform utilizing Computer Vision models and data processing to generate accurate diagnostic insights on a live dashboard.',
        tags: ['scikit-learn', 'OpenCV', 'Python', 'Machine Learning']
      }
    ],
    skills: [
      { category: 'Languages', items: ['Python', 'JavaScript', 'C++'] },
      { category: 'DevOps & Cloud', items: ['Docker', 'Kubernetes', 'Git', 'Linux', 'CI/CD'] },
      { category: 'Backend & DB', items: ['Node.js', 'Express', 'MongoDB', 'OpenAPI'] },
      { category: 'AI & Libraries', items: ['scikit-learn', 'OpenCV', 'NumPy', 'Pandas', 'React.js'] }
    ],
    achievements: [
      { title: 'Google Solution Challenge', detail: 'Selected Global Participant (2025 & 2026)' },
      { title: 'Hackdiwas 3.0', detail: 'Top 40 Finalist Team out of 200+ teams (May 2026)' },
      { title: 'Flipkart GRiD 7.0', detail: 'Level 1 Qualifier Status (July 2025)' },
      { title: 'ISRO Specialized Certification', detail: 'Awarded for Space Exploration Techniques (April 2026)' }
    ]
  };

  useEffect(() => {
    fetch('http://localhost:5000/api/profile')
      .then(res => {
        if (!res.ok) throw new Error("API Offline");
        return res.json();
      })
      .then(data => {
        setProfileData(data);
        setApiOnline(true);
        setLoading(false);
      })
      .catch(err => {
        console.warn("Backend API offline. Standalone mock data loaded gracefully.", err);
        setProfileData(fallbackData);
        setApiOnline(false);
        setLoading(false);
      });
  }, []);

  const data = profileData || fallbackData;

  return (
    <div className="relative w-full min-h-screen bg-[#070a13] text-slate-100 overflow-hidden flex flex-col font-sans select-none">

      {/* 3D DevOps Network Canvas Layer */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <Canvas camera={{ position: [0, 0, 22], fov: 50 }}>
          <Suspense fallback={null}>
            <DevOpsNetworkScene />
          </Suspense>
        </Canvas>
      </div>

      {/* Cyber overlay elements (Header + Dashboard Body) */}
      <div className="relative z-10 w-full min-h-screen flex flex-col pointer-events-none overflow-y-auto">

        {/* Futuristic Sticky Header */}
        <header className="sticky top-0 w-full border-b border-slate-800/40 bg-slate-950/60 backdrop-blur-lg px-6 py-4 flex justify-between items-center pointer-events-auto shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
          <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
            <a href="#" className="text-lg font-bold tracking-widest text-cyan-400 font-mono flex items-center gap-2">
              ISHA KUMARI
            </a>

            <nav className="hidden md:flex space-x-8 text-xs font-mono font-semibold uppercase tracking-wider">
              <a href="#about" className="text-slate-200 hover:text-cyan-400 duration-200">about</a>
              <a href="#projects" className="text-slate-200 hover:text-cyan-400 duration-200">projects</a>
              <a href="#skills" className="text-slate-200 hover:text-cyan-400 duration-200">skills</a>
              <a href="#resume" className="text-cyan-200 hover:text-cyan-300 duration-200 font-bold">credentials</a>
            </nav>

            {/* System Status Pill */}
          </div>
        </header>

        {/* 2-Column Responsive Dashboard Body */}
        <div id="about" className="flex-grow w-full max-w-7xl mx-auto px-4 md:px-8 py-8 flex flex-col lg:flex-row gap-8 items-stretch scroll-mt-24">

          {/* Main scrollable grid of components */}
          <main className="flex-1 space-y-12 pointer-events-auto">

            {/* Hero Profile Introduction Card */}
            <section className="glass-panel p-8 md:p-10 rounded-3xl border border-slate-800/60 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-500/10 to-transparent blur-md"></div>

              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 font-sans text-white leading-tight">
                Devops Learner <br />
                <span className="text-gradient">& Backend Devolper</span>
              </h1>

              <p className="mt-6 text-sm md:text-base text-slate-400 max-w-2xl leading-relaxed font-normal">
                {data.bio}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="px-6 py-3 text-xs font-mono font-bold tracking-wider uppercase rounded-xl bg-cyan-600 hover:bg-cyan-500 hover:scale-[1.02] active:scale-[0.98] text-white transition-all duration-300 shadow-[0_4px_15px_rgba(6,182,212,0.3)]"
                >
                  Projects
                </a>
                <a
                  href="#resume"
                  className="px-6 py-3 text-xs font-mono font-bold tracking-wider uppercase rounded-xl border border-slate-800 hover:border-slate-700 active:scale-[0.98] hover:bg-slate-950/20 text-slate-300 transition-all duration-300"
                >
                  Check Credentials
                </a>
              </div>
            </section>

            {/* Structured resume sections checklist */}
            <ResumeSection
              projects={data.projects}
              skills={data.skills}
              achievements={data.achievements}
              education={data.education}
            />

          </main>

          {/* Persistent Sidebar Widget (Dashboard sidebar on desktop) */}
          <aside className="w-full lg:w-80 pointer-events-auto">
            <div className="lg:sticky lg:top-28 glass-panel p-6 rounded-3xl border border-slate-800/60 shadow-2xl flex flex-col items-center">
              <ProfileSection data={data} />
            </div>
          </aside>

        </div>

        {/* Dynamic footer layer */}
        <footer className="w-full border-t border-slate-900 py-8 text-center text-[10px] font-mono text-slate-500 mt-20 pointer-events-auto">
          <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>&copy; 2026 Isha Kumari</p>
            <div className="flex gap-2">
              <span className="flex items-center gap-1"><Shield className="w-3.5 h-3.5 text-cyan-400" /> SECURE DEPLOYMENT</span>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}

export default App;
