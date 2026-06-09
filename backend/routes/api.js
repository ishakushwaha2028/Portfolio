const express = require('express');
const router = express.Router();

router.get('/profile', (req, res) => {
  res.json({
    name: 'Isha Kumari',
    title: 'DevOps & Cloud Infrastructure Learner',
    bio: 'I enjoy building backend and cloud-based projects while learning tools like Docker, Kubernetes, and Linux.',
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
  });
});

module.exports = router;

