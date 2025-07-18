import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Product',
      links: [
        { name: 'Overview', path: '/' },
        { name: 'Features', path: '/courses' },
        { name: 'Solutions', path: '/courses' },
        { name: 'Tutorials', path: '/courses' },
        { name: 'Pricing', path: '/courses' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About us', path: '/' },
        { name: 'Careers', path: '/' },
        { name: 'Press', path: '/' },
        { name: 'News', path: '/' },
        { name: 'Media kit', path: '/' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', path: '/' },
        { name: 'Newsletter', path: '/newsletter' },
        { name: 'Events', path: '/' },
        { name: 'Help centre', path: '/faq' },
        { name: 'Tutorials', path: '/courses' }
      ]
    },
    {
      title: 'Social',
      links: [
        { name: 'Twitter', path: 'https://x.com/aseem_singhal' },
        { name: 'LinkedIn', path: 'https://www.linkedin.com/in/singhalaseem/' },
        {name:"Youtube", path:'https://www.youtube.com/@aseemsinghal'},
        // { name: 'GitHub', path: '#' },
        // { name: 'AngelList', path: '#' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Terms', path: '#' },
        { name: 'Privacy', path: '#' },
        { name: 'Cookies', path: '#' },
        { name: 'Licenses', path: '#' },
        { name: 'Settings', path: '#' }
      ]
    }
  ];

// Add this just before the return statement
const socialLinks = footerSections.find(section => section.title === 'Social')?.links || [];

const iconMap = {
  Twitter: Twitter,
  LinkedIn: Linkedin,
  Facebook: Facebook,
  Instagram: Instagram,
  Youtube: Youtube
};

  return (
    <footer className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-[#2563EB] font-bold">A</span>
              </div>
              <span className="text-xl font-bold text-nowrap">Aseem Singhal</span>
            </Link>
            <p className="text-blue-100 mb-6 max-w-md text-sm">
              Top learning experiences that create more talent in the world.
            </p>
          </div>

          {/* Links Sections */}
          {/* {footerSections.map((section, index) => (
            <div key={index} className="col-span-1">
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.path}
                      className="text-blue-100 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))} */}
        </div>

        <div className="border-t border-blue-500 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-100 text-sm">
            © 2025 aseemsinghal.com. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
  {socialLinks.map(({ name, path }, index) => {
    const IconComponent = iconMap[name];
    return (
      IconComponent && (
        <a
          key={index}
          href={path}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-100 hover:text-white transition-colors"
        >
          <IconComponent className="w-5 h-5" />
        </a>
      )
    );
  })}
</div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;