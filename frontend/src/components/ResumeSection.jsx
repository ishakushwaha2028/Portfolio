import React from 'react';
import { Code2, Server, BrainCircuit, Rocket, Trophy, BookOpen, Terminal, CheckCircle2 } from 'lucide-react';

const ResumeSection = ({ projects = [], skills = [], achievements = [], education }) => {
  
  // High-fidelity fallback data in case API data is not loaded yet
  const displayProjects = projects.length > 0 ? projects : [
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
  ];

  const displaySkills = skills.length > 0 ? skills : [
    { category: 'Languages', items: ['Python', 'JavaScript', 'C++'] },
    { category: 'DevOps & Cloud', items: ['Docker', 'Kubernetes', 'Git', 'Linux', 'CI/CD'] },
    { category: 'Backend & DB', items: ['Node.js', 'Express', 'MongoDB', 'OpenAPI'] },
    { category: 'AI & Libraries', items: ['scikit-learn', 'OpenCV', 'NumPy', 'Pandas', 'React.js'] }
  ];

  const displayAchievements = achievements.length > 0 ? achievements : [
    { title: 'Google Solution Challenge', detail: 'Selected Global Participant (2025 & 2026)' },
    { title: 'Hackdiwas 3.0', detail: 'Top 40 Finalist Team out of 200+ teams (May 2026)' },
    { title: 'Flipkart GRiD 7.0', detail: 'Level 1 Qualifier Status (July 2025)' },
    { title: 'ISRO Specialized Certification', detail: 'Awarded for Space Exploration Techniques (April 2026)' }
  ];

  const displayEducation = education || {
    college: 'United College of Engineering and Research, Prayagraj',
    degree: 'B.Tech in Computer Science and Engineering',
    years: '2023 - 2027',
    gpa: '7.31/10'
  };

  // Maps categories to premium glowing Lucide icons
  const getProjectIcon = (cat) => {
    const text = cat.toLowerCase();
    if (text.includes('devops') || text.includes('infra')) {
      return <Server className="w-8 h-8 text-indigo-400" />;
    }
    if (text.includes('ai') || text.includes('health') || text.includes('ml')) {
      return <BrainCircuit className="w-8 h-8 text-purple-400" />;
    }
    return <Code2 className="w-8 h-8 text-cyan-400" />;
  };

  return (
    <div className="space-y-16 pb-20">
      
      {/* Dynamic Projects Grid */}
      <section id="projects" className="scroll-mt-24">
        <h3 className="text-3xl font-extrabold mb-8 flex items-center gap-4 text-white">
          <span className="text-gradient font-mono"></span> projects
          <div className="h-[1px] bg-slate-800/80 flex-1"></div>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayProjects.map((project, idx) => (
            <div 
              key={project.id || idx}
              className={`terminal-card p-6 rounded-2xl border border-slate-800/60 ${
                idx === 2 ? 'md:col-span-2' : ''
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800">
                  {getProjectIcon(project.category)}
                </div>
                <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase bg-slate-950/60 px-2.5 py-1 rounded-full border border-slate-900">
                  {project.category}
                </span>
              </div>
              
              <h4 className="text-xl font-bold text-white mb-2 font-sans tracking-tight">{project.title}</h4>
              <p className="text-xs leading-relaxed text-slate-400 mb-6 font-normal">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="bg-slate-900/60 border border-slate-800/60 text-slate-400 font-mono text-[10px] px-2 py-0.5 rounded-md hover:text-cyan-400 hover:border-cyan-500/30 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dynamic Core Skills Command Cards */}
      <section id="skills" className="scroll-mt-24">
        <h3 className="text-3xl font-extrabold mb-8 flex items-center gap-4 text-white">
          <span className="text-gradient font-mono"></span> Core Skills
          <div className="h-[1px] bg-slate-800/80 flex-1"></div>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {displaySkills.map((skillGroup, idx) => {
            // Distinct decorative borders for core technical branches
            const borderColors = [
              'border-l-cyan-500 hover:border-l-cyan-400',
              'border-l-indigo-500 hover:border-l-indigo-400',
              'border-l-purple-500 hover:border-l-purple-400',
              'border-l-emerald-500 hover:border-l-emerald-400'
            ];
            const textColors = ['text-cyan-400', 'text-indigo-400', 'text-purple-400', 'text-emerald-400'];
            
            return (
              <div 
                key={skillGroup.category} 
                className={`glass-panel p-5 border-l-4 ${borderColors[idx % 4]} hover:scale-[1.01] active:scale-[0.99] duration-300`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Terminal className={`w-4 h-4 ${textColors[idx % 4]}`} />
                  <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-300">
                    {skillGroup.category}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span 
                      key={skill} 
                      className="text-xs font-semibold text-slate-100 flex items-center gap-1.5 bg-slate-950/40 px-2.5 py-1 rounded border border-slate-900"
                    >
                      <CheckCircle2 className={`w-3.5 h-3.5 ${textColors[idx % 4]} opacity-70`} />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Dynamic Academic & Achievements History */}
      <section id="resume" className="scroll-mt-24">
        <h3 className="text-3xl font-extrabold mb-8 flex items-center gap-4 text-white">
          <span className="text-gradient font-mono"></span> About
          <div className="h-[1px] bg-slate-800/80 flex-1"></div>
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Timeline & Details Column */}
          <div className="lg:col-span-7 bg-[#0c1221] border border-slate-800/60 p-6 md:p-8 rounded-2xl shadow-xl space-y-8">
            
            {/* Academic Track */}
            <div>
              <h4 className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4" /> Academic Credentials
              </h4>
              <div className="pl-4 border-l-2 border-slate-800 space-y-4">
                <div className="relative">
                  <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-cyan-400"></div>
                  <h5 className="text-sm font-bold text-white">{displayEducation.degree}</h5>
                  <p className="text-xs text-slate-400 mt-1">{displayEducation.college}</p>
                  <div className="flex justify-between items-center mt-2 text-[10px] font-mono text-cyan-400/90">
                    <span>{displayEducation.years}</span>
                    <span className="bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-800/30">
                      CGPA: {displayEducation.gpa}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements Log */}
            <div>
              <h4 className="text-xs font-mono text-indigo-400 font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                <Trophy className="w-4 h-4" /> Credentials & Achievements
              </h4>
              <div className="pl-4 border-l-2 border-slate-800 space-y-5">
                {displayAchievements.map((ach, idx) => {
                  const colors = ['bg-yellow-500', 'bg-cyan-400', 'bg-indigo-400', 'bg-emerald-400'];
                  return (
                    <div key={ach.title} className="relative">
                      <div className={`absolute -left-[21px] top-1.5 w-2 h-2 rounded-full ${colors[idx % 4]}`}></div>
                      <h5 className="text-xs font-bold text-white leading-normal">{ach.title}</h5>
                      <p className="text-[10.5px] text-slate-400 mt-0.5">{ach.detail}</p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* DevOps Quick Action Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 rounded-2xl border border-slate-800/60 relative overflow-hidden">
              {/* Backlight glow */}
              <div className="absolute -right-16 -top-16 w-32 h-32 rounded-full bg-indigo-500/10 blur-2xl"></div>
              
              <h4 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-400" />
                Quick Actions
              </h4>
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                Require a hardcopy credentials summary.
              </p>
              
              <div className="flex flex-col gap-3">
                <a 
                  href="/Isha_Kumari_Resume.pdf" 
                  download 
                  className="w-full text-center bg-cyan-600 hover:bg-cyan-500 active:scale-[0.98] text-white px-4 py-3 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(6,182,212,0.25)]"
                >
                  <Rocket className="w-4 h-4" /> Download PDF
                </a>
                <a 
                  href="/Isha_Kumari_Resume.pdf" 
                  target="_blank" 
                  className="w-full text-center border border-slate-800 hover:border-slate-700 active:scale-[0.98] text-slate-300 hover:text-white px-4 py-3 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 bg-slate-950/20"
                >
                  View Fullscreen
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default ResumeSection;

