import React from 'react';
import { Mail, Phone, MapPin, Download, ShieldCheck, Activity } from 'lucide-react';

const ProfileSection = ({ data }) => {

  return (
    <div className="flex flex-col items-center w-full">



      {/* 3D-effect Avatar Container */}
      <div className="relative group w-44 h-44 rounded-full mb-6 p-[3px] bg-gradient-to-tr from-cyan-400 via-indigo-500 to-purple-600 transition-all duration-500 hover:scale-105 hover:rotate-3">
        {/* Glow effect backplate */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 to-indigo-500 opacity-30 blur-lg group-hover:opacity-60 transition-opacity"></div>
        <div className="relative w-full h-full bg-slate-900/90 backdrop-blur-md rounded-full flex items-center justify-center overflow-hidden border border-white/10">
          <img
           src="/ish.jpg"
            alt="Isha Kumari"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </div>

      {/* Identity Profile Details */}
      <h3 className="text-2xl font-bold tracking-tight text-white mb-1 font-sans">{data?.name || 'Isha Kumari'}</h3>
      <p className="text-xs text-cyan-400 font-mono mb-6 text-center max-w-[220px] leading-relaxed">
        {data?.title || 'DevOps & Cloud Learner'}
      </p>

      {/* Structured Dashboard Contact Grid */}
      <div className="w-full space-y-3 text-sm text-slate-300">
        <div className="flex items-center gap-3 glass-panel p-3 hover:translate-x-1 duration-300">
          <div className="p-1.5 rounded bg-cyan-950/40 text-cyan-400">
            <Phone className="w-4 h-4" />
          </div>
          <span className="font-mono text-xs font-semibold">{data?.phone || '+91 9771914842'}</span>
        </div>

        <div className="flex items-center gap-3 glass-panel p-3 hover:translate-x-1 duration-300">
          <div className="p-1.5 rounded bg-indigo-950/40 text-indigo-400">
            <Mail className="w-4 h-4" />
          </div>
          <span className="truncate font-mono text-xs font-semibold">{data?.email || 'isha42341@gmail.com'}</span>
        </div>

        <div className="flex items-center gap-3 glass-panel p-3 hover:translate-x-1 duration-300">
          <div className="p-1.5 rounded bg-pink-950/40 text-pink-400">
            <MapPin className="w-4 h-4" />
          </div>
          <span className="text-xs font-semibold">{data?.location || 'Bihar, India'}</span>
        </div>
      </div>

      {/* Cyber Social links */}
      <div className="flex gap-4 mt-6">
        <a
          href="https://github.com/ishakushwaha2028"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 hover:-translate-y-1 transition-all duration-300"
          aria-label="GitHub"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/isha-kumari-9868702a6?utm_source=share_via&utm_content=profile&utm_medium=member_android"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-indigo-400 hover:border-indigo-400/50 hover:-translate-y-1 transition-all duration-300"
          aria-label="LinkedIn"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
      </div>


      {/* Resume Download Action Button */}
      <a
        href="/Isha_Kumari_Resume.pdf"
        download
        className="mt-8 w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 text-white text-xs font-bold font-mono tracking-wider uppercase flex items-center justify-center gap-2 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.25)]"
      >
        <Download className="w-4 h-4" />
        Download Credentials
      </a>
    </div>
  );
};

export default ProfileSection;

