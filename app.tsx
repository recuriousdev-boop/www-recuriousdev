import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Mail, Award, Code, Target, ChevronLeft, ChevronRight, CheckCircle2, Clock, Zap, Users, Database, Cloud, Home, BookOpen, MessageSquare } from 'lucide-react';

const Portfolio = () => {
  const [isDark, setIsDark] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentCertIndex, setCurrentCertIndex] = useState(1);
  const [activePage, setActivePage] = useState('home');
  const [activeProject, setActiveProject] = useState(null);

  // Google Analytics
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-EPVYS77LBP';
    document.head.appendChild(script1);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-EPVYS77LBP');
  }, []);

  const handleGoogleLogin = () => {
    console.log('Initiating Google OAuth...');
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const nextCert = () => {
    setCurrentCertIndex((prev) => (prev + 1) % certifications.length);
  };

  const prevCert = () => {
    setCurrentCertIndex((prev) => (prev - 1 + certifications.length) % certifications.length);
  };

  const getVisibleCerts = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentCertIndex + i + certifications.length) % certifications.length;
      visible.push({ ...certifications[index], position: i });
    }
    return visible;
  };

  const certifications = [
    { 
      name: 'AWS AI Practitioner', 
      status: 'certified', 
      issuer: 'Amazon Web Services', 
      year: '2024',
      description: 'Expertise in AI/ML services, responsible AI practices, and building AI-powered applications on AWS',
      icon: <Cloud size={32} />
    },
    { 
      name: 'AWS Solutions Architect', 
      status: 'certified', 
      issuer: 'Amazon Web Services', 
      year: '2024',
      description: 'Design and deploy scalable, highly available systems on AWS with best practices',
      icon: <Database size={32} />
    },
    { 
      name: 'Google Associate Cloud Engineer', 
      status: 'certified', 
      issuer: 'Google Cloud', 
      year: '2024',
      description: 'Deploy applications, monitor operations, and manage enterprise solutions on GCP',
      icon: <Cloud size={32} />
    },
    { 
      name: 'NICE CXone Certified', 
      status: 'planned', 
      issuer: 'NICE', 
      year: 'In Progress',
      description: 'Expert-level implementation and optimization of NICE CXone contact center solutions',
      icon: <Users size={32} />
    },
    { 
      name: 'UiPath Certified Professional', 
      status: 'planned', 
      issuer: 'UiPath', 
      year: 'Planned',
      description: 'Advanced automation development and RPA solution architecture',
      icon: <Zap size={32} />
    },
  ];

  const projects = [
    {
      id: 1,
      name: 'AI-Powered IVR Optimization',
      shortDesc: 'Natural language understanding for customer self-service',
      fullDesc: 'Building intelligent IVR systems using AWS Lex and Lambda to understand customer intent and route calls efficiently. Integrates with NICE CXone for seamless handoffs.',
      status: 'Planned',
      stack: ['AWS Lex', 'Lambda', 'NICE CXone', 'Python'],
      bestPractices: [
        'Intent-based routing with fallback strategies',
        'Serverless architecture for cost optimization',
        'Session management and context persistence',
        'Multi-language support and localization'
      ]
    },
    {
      id: 2,
      name: 'Omnichannel Analytics Dashboard',
      shortDesc: 'Real-time contact centre performance insights',
      fullDesc: 'Comprehensive analytics platform that aggregates data from multiple contact center channels. Built with React and AWS services for real-time visualization of KPIs.',
      status: 'Planned',
      stack: ['React', 'AWS QuickSight', 'API Gateway', 'DynamoDB'],
      bestPractices: [
        'Real-time data streaming with WebSockets',
        'Caching strategies for performance',
        'Role-based access control',
        'Responsive design patterns'
      ]
    },
    {
      id: 3,
      name: 'ServiceNow Integration Framework',
      shortDesc: 'Seamless ticket creation from contact centre interactions',
      fullDesc: 'Enterprise integration framework connecting Webex Contact Center with ServiceNow. Automated ticket creation, status updates, and bi-directional synchronization.',
      status: 'Planned',
      stack: ['Node.js', 'REST APIs', 'Webex CC', 'ServiceNow'],
      bestPractices: [
        'OAuth 2.0 authentication',
        'Error handling and retry logic',
        'Webhook implementation',
        'API rate limiting and throttling'
      ]
    },
    {
      id: 4,
      name: 'Conversational AI Chatbot',
      shortDesc: 'Multi-platform chatbot with NLP capabilities',
      fullDesc: 'Coming soon - Building intelligent chatbots that understand context and provide personalized responses across web, mobile, and messaging platforms.',
      status: 'Planned',
      stack: ['Dialogflow', 'Python', 'FastAPI', 'MongoDB'],
      bestPractices: [
        'Intent classification and entity extraction',
        'Conversation flow design',
        'Sentiment analysis integration',
        'Analytics and continuous improvement'
      ]
    },
  ];

  const HomePage = () => (
    <div>
      <section className="mb-24 text-center">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-2xl mb-8 relative">
            <img 
              src="img/banner.png" 
              alt="re:curious banner" 
              className="w-full h-64 object-cover rounded-2xl shadow-2xl"
              style={{ filter: 'blur(0px)' }}
              onError={(e) => {
                e.target.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                e.target.alt = '';
              }}
            />
            <div className="absolute inset-0 rounded-2xl" style={{
              boxShadow: 'inset 0 0 60px rgba(0,0,0,0.3)',
              pointerEvents: 'none'
            }}></div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
            re<span className="text-orange-500">:</span>curious
          </h1>
          <p className={`text-2xl mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            A development space for Contact Centre and AI technologies
          </p>
          <div className="flex items-center justify-center gap-3 mb-8 text-base text-gray-500 flex-wrap">
            <span className="flex items-center gap-2">
              <Target size={18} />
              Sydney, Australia
            </span>
          </div>
          
          <p className={`text-lg leading-relaxed mb-8 max-w-3xl ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Welcome to our development playground where we explore cutting-edge AI technologies and modern web service architectures. This space showcases practical implementations of contact center solutions, cloud-native applications, and AI integrations built on AWS and Google Cloud platforms.
          </p>

          <p className={`text-lg leading-relaxed mb-8 max-w-3xl ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            We believe in learning by building. Each project demonstrates real-world applications of AI, showcasing best practices in API design, serverless architectures, and enterprise integrations. From intelligent IVR systems to omnichannel analytics, we're pushing the boundaries of what's possible in customer experience technology.
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            <span className={`px-4 py-2 rounded-lg text-sm font-medium ${isDark ? 'bg-blue-900/30 text-blue-300 border border-blue-800' : 'bg-blue-100 text-blue-800'}`}>
              AI & Machine Learning
            </span>
            <span className={`px-4 py-2 rounded-lg text-sm font-medium ${isDark ? 'bg-orange-900/30 text-orange-300 border border-orange-800' : 'bg-orange-100 text-orange-800'}`}>
              Cloud Architecture
            </span>
            <span className={`px-4 py-2 rounded-lg text-sm font-medium ${isDark ? 'bg-purple-900/30 text-purple-300 border border-purple-800' : 'bg-purple-100 text-purple-800'}`}>
              Contact Center Innovation
            </span>
          </div>
        </div>
      </section>

      <section className={`p-10 rounded-2xl ${isDark ? 'bg-gradient-to-br from-blue-900/30 to-orange-900/30 border border-blue-800' : 'bg-gradient-to-br from-blue-50 to-orange-50 border border-blue-200'} text-center`}>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h2>
        <p className={`mb-8 text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          Interested in discussing AI-powered contact centre solutions or exploring collaboration opportunities? Get in touch!
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="mailto:info@recurious.dev"
            className="flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 text-base font-medium"
          >
            <Mail className="mr-2" size={20} />
            Email Us
          </a>
        </div>
      </section>
    </div>
  );

  const CertificationsPage = () => (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center">
          <Award className="mr-4 text-blue-500" size={36} />
          Certifications
        </h2>
        <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          Professional certifications and ongoing skill development
        </p>
      </div>
      
      <div className="relative">
        <button
          onClick={prevCert}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full transition-colors ${
            isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'
          } shadow-xl`}
        >
          <ChevronLeft size={24} />
        </button>
        
        <button
          onClick={nextCert}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full transition-colors ${
            isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'
          } shadow-xl`}
        >
          <ChevronRight size={24} />
        </button>

        <div className="flex items-center justify-center gap-0 px-16 py-8">
          {getVisibleCerts().map((cert, idx) => {
            const isFeatured = cert.position === 0;
            const isLeft = cert.position === -1;
            const isRight = cert.position === 1;
            
            return (
              <div
                key={idx}
                className={`transition-all duration-500 ${
                  isFeatured 
                    ? 'w-96 p-10 z-10 scale-110' 
                    : 'w-80 p-8 opacity-60 hover:opacity-80'
                } ${
                  isLeft ? 'rounded-l-2xl' : isRight ? 'rounded-r-2xl' : ''
                } border ${
                  isFeatured
                    ? isDark 
                      ? 'bg-gradient-to-br from-blue-900/40 to-purple-900/40 border-blue-500/50 border-4' 
                      : 'bg-gradient-to-br from-blue-50 to-purple-50 border-blue-400 border-4'
                    : isDark 
                      ? 'bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-700' 
                      : 'bg-white border-gray-200'
                }`}
              >
                <div className="text-center">
                  {isFeatured && (
                    <div className="inline-block mb-4">
                      <span className="px-4 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold uppercase tracking-wider rounded-full">
                        Featured
                      </span>
                    </div>
                  )}
                  <p className={`text-sm font-semibold uppercase tracking-wider mb-4 ${
                    isFeatured 
                      ? isDark ? 'text-gray-300' : 'text-gray-700'
                      : isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {cert.issuer}
                  </p>
                  <h3 className={`font-bold mb-${isFeatured ? '6' : '4'} ${isFeatured ? 'text-2xl' : 'text-xl'}`}>
                    {cert.name}
                  </h3>
                  <div className={`mb-6 flex justify-center ${cert.status === 'certified' ? 'text-green-500' : 'text-yellow-500'}`}>
                    <div className={isFeatured ? 'transform scale-125' : ''}>
                      {cert.icon}
                    </div>
                  </div>
                  <div className={`py-3 px-4 rounded-lg mb-6 ${
                    cert.status === 'certified'
                      ? 'bg-green-500/20 border border-green-500/50'
                      : 'bg-yellow-500/20 border border-yellow-500/50'
                  }`}>
                    <span className={`${isFeatured ? 'text-base font-bold' : 'text-sm font-medium'} ${
                      cert.status === 'certified' 
                        ? isFeatured ? 'text-green-300' : 'text-green-400'
                        : isFeatured ? 'text-yellow-300' : 'text-yellow-400'
                    }`}>
                      {cert.status === 'certified' ? '✓ Certified' : 'In Progress'} • {cert.year}
                    </span>
                  </div>
                  <p className={`${isFeatured ? 'text-base' : 'text-sm'} leading-relaxed ${
                    isFeatured
                      ? isDark ? 'text-gray-300' : 'text-gray-700'
                      : isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {cert.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {certifications.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentCertIndex(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === currentCertIndex 
                  ? 'bg-blue-500 w-8' 
                  : 'bg-gray-600 w-2 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );

  const ProjectPage = ({ project }) => (
    <div>
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-4xl font-bold">{project.name}</h2>
          <span className={`px-4 py-2 rounded-lg text-sm font-medium ${
            project.status === 'Completed' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
            project.status === 'In Progress' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
            'bg-gray-600/20 text-gray-400 border border-gray-600/30'
          }`}>
            {project.status}
          </span>
        </div>
        <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
          {project.shortDesc}
        </p>
      </div>

      <div className={`p-8 rounded-2xl mb-8 ${isDark ? 'bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800' : 'bg-white border border-gray-200'}`}>
        <h3 className="text-2xl font-semibold mb-4">Overview</h3>
        <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          {project.fullDesc}
        </p>
      </div>

      <div className={`p-8 rounded-2xl mb-8 ${isDark ? 'bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800' : 'bg-white border border-gray-200'}`}>
        <h3 className="text-2xl font-semibold mb-4">Tech Stack</h3>
        <div className="flex flex-wrap gap-3">
          {project.stack.map((tech, idx) => (
            <span
              key={idx}
              className={`px-4 py-2 rounded-lg text-base ${
                isDark ? 'bg-blue-900/30 text-blue-300 border border-blue-800' : 'bg-blue-100 text-blue-800'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className={`p-8 rounded-2xl ${isDark ? 'bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800' : 'bg-white border border-gray-200'}`}>
        <h3 className="text-2xl font-semibold mb-4">Best Practices</h3>
        <ul className="space-y-3">
          {project.bestPractices.map((practice, idx) => (
            <li key={idx} className={`flex items-start text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <CheckCircle2 size={20} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
              {practice}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const GuestbookPage = () => (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center">
          <MessageSquare className="mr-4 text-blue-500" size={36} />
          Guestbook
        </h2>
        <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          Share your thoughts, feedback, or questions
        </p>
      </div>

      <div className={`p-8 rounded-2xl mb-8 ${isDark ? 'bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800' : 'bg-white border border-gray-200'}`}>
        <h3 className="text-2xl font-semibold mb-6">Leave a Message</h3>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className={`w-full px-4 py-3 rounded-lg border ${
              isDark 
                ? 'bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-500' 
                : 'bg-white border-gray-300 text-gray-900'
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          <input
            type="email"
            placeholder="Your Email (optional)"
            className={`w-full px-4 py-3 rounded-lg border ${
              isDark 
                ? 'bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-500' 
                : 'bg-white border-gray-300 text-gray-900'
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          <textarea
            placeholder="Your message..."
            rows={5}
            className={`w-full px-4 py-3 rounded-lg border ${
              isDark 
                ? 'bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-500' 
                : 'bg-white border-gray-300 text-gray-900'
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg text-base font-medium">
            Submit Message
          </button>
          <p className={`text-sm text-center ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
            Backend integration coming soon. Your messages will be stored and may appear as testimonials.
          </p>
        </div>
      </div>

      <div className={`p-8 rounded-2xl ${isDark ? 'bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800' : 'bg-white border border-gray-200'}`}>
        <h3 className="text-2xl font-semibold mb-6">Recent Messages</h3>
        <p className={`text-center py-8 ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
          No messages yet. Be the first to leave a message!
        </p>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-gray-950 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
      </div>

      <header className={`fixed top-0 w-full z-50 transition-colors duration-300 backdrop-blur-md ${isDark ? 'bg-gray-900/80 border-gray-800' : 'bg-white/80 border-gray-200'} border-b`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <div className="flex items-center space-x-2 cursor-pointer" onClick={() => { setActivePage('home'); setActiveProject(null); }}>
                <div className={`font-bold text-2xl ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                  re<span className="text-orange-500">:</span>curious
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsDark(!isDark)}
                className={`p-2 rounded-md transition-colors ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={22} /> : <Moon size={22} />}
              </button>

              {!isAuthenticated ? (
                <button
                  onClick={handleGoogleLogin}
                  className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all text-sm font-medium shadow-lg shadow-blue-500/20"
                >
                  Login
                </button>
              ) : (
                <button
                  onClick={handleLogout}
                  className="px-5 py-2.5 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors text-sm font-medium"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      <aside
        className={`fixed top-20 left-0 h-full w-64 transition-transform duration-300 z-40 ${
          isDark ? 'bg-gray-900/95 border-gray-800 backdrop-blur-sm' : 'bg-white/95 border-gray-200 backdrop-blur-sm'
        } border-r ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 overflow-y-auto`}
      >
        <nav className="p-6 space-y-8">
          <div>
            <h3 className="text-xs uppercase font-semibold text-gray-500 mb-4 tracking-wider">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => { setActivePage('home'); setActiveProject(null); }}
                  className={`w-full text-left flex items-center py-2 px-3 rounded-lg transition-colors text-base ${
                    activePage === 'home' ? 'bg-blue-600 text-white' : 'hover:bg-gray-800'
                  }`}
                >
                  <Home size={18} className="mr-3" /> Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActivePage('certifications'); setActiveProject(null); }}
                  className={`w-full text-left flex items-center py-2 px-3 rounded-lg transition-colors text-base ${
                    activePage === 'certifications' ? 'bg-blue-600 text-white' : 'hover:bg-gray-800'
                  }`}
                >
                  <Award size={18} className="mr-3" /> Certifications
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActivePage('guestbook'); setActiveProject(null); }}
                  className={`w-full text-left flex items-center py-2 px-3 rounded-lg transition-colors text-base ${
                    activePage === 'guestbook' ? 'bg-blue-600 text-white' : 'hover:bg-gray-800'
                  }`}
                >
                  <MessageSquare size={18} className="mr-3" /> Guestbook
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xs uppercase font-semibold text-gray-500 mb-4 tracking-wider">Projects</h3>
            <ul className="space-y-2">
              {projects.map((project) => (
                <li key={project.id}>
                  <button
                    onClick={() => { setActivePage('project'); setActiveProject(project); }}
                    className={`w-full text-left py-2 px-3 rounded-lg transition-colors text-sm ${
                      activeProject && activeProject.id === project.id ? 'bg-blue-600 text-white' : 'hover:bg-gray-800'
                    }`}
                  >
                    <div className="flex items-start">
                      <Code size={16} className="mr-2 mt-0.5 flex-shrink-0" />
                      <span className="leading-tight">{project.name}</span>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </aside>

      <main className="lg:ml-64 pt-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {activePage === 'home' && <HomePage />}
          {activePage === 'certifications' && <CertificationsPage />}
          {activePage === 'guestbook' && <GuestbookPage />}
          {activePage === 'project' && activeProject && <ProjectPage project={activeProject} />}
        </div>
      </main>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <style>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;