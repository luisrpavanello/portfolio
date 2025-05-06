import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-gray py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-semibold text-silver">PORTFOLIO</h2>
            <p className="text-white/70 mt-2 max-w-md">
              Creating beautiful, functional web experiences with passion and precision.
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-white/70">
              &copy; {currentYear} All Rights Reserved
            </p>
            <p className="text-white/50 mt-1">
              Designed & Built by Luis R. Pavanello
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;