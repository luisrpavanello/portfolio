import React from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const highlights = [
    { value: '9+', label: 'years building web and fintech products' },
    { value: '3', label: 'languages: EN, ES, PT' },
    { value: '70+', label: 'third-party service integrations' }
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(192,192,192,0.16),transparent_34%),linear-gradient(135deg,rgba(15,15,15,1)_0%,rgba(26,26,26,0.96)_54%,rgba(42,42,42,0.72)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center pt-24 pb-16">
        <div className="max-w-4xl">
          <p className="text-silver font-medium uppercase tracking-[0.24em] text-sm mb-5 opacity-0 animate-on-scroll">
            Full Stack Developer
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold leading-tight mb-6 opacity-0 animate-on-scroll">
            Luis Pavanello builds reliable web applications for real business workflows.
          </h1>
          <p className="text-lg sm:text-xl text-white/72 max-w-3xl leading-relaxed mb-9 opacity-0 animate-on-scroll">
            I combine React, Next.js, Python, Django, PHP, Laravel, Node.js, and SQL databases to ship maintainable
            products, improve internal operations, and collaborate smoothly across English, Spanish, and Portuguese teams.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 opacity-0 animate-on-scroll">
            <button
              type="button"
              onClick={() => scrollToSection('#projects')}
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              View Projects
              <ArrowDown size={18} />
            </button>
            <a
              href="/portfolio/pdf/resume.pdf"
              download="Luis-Pavanello-Resume.pdf"
              className="btn-secondary inline-flex items-center justify-center gap-2"
            >
              Download CV
              <Download size={18} />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mb-9 opacity-0 animate-on-scroll">
            {highlights.map((item) => (
              <div key={item.label} className="border border-white/10 bg-white/[0.03] p-5 rounded-md">
                <p className="text-2xl font-semibold text-white">{item.value}</p>
                <p className="text-sm text-white/58 mt-2">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 opacity-0 animate-on-scroll">
            {[
              { name: 'Email', url: 'mailto:luisrpavanello@gmail.com', icon: <Mail size={19} /> },
              { name: 'LinkedIn', url: 'https://linkedin.com/in/luisrpavanello', icon: <Linkedin size={19} /> },
              { name: 'GitHub', url: 'https://github.com/luisrpavanello', icon: <Github size={19} /> }
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                target={social.url.startsWith('http') ? '_blank' : undefined}
                rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="w-11 h-11 rounded-md bg-white/8 border border-white/10 flex items-center justify-center text-white/76 hover:text-black hover:bg-silver transition-colors duration-300"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
