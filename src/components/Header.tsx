import { Link, useLocation } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Youtube, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f4efe6]/90 backdrop-blur-md border-b border-[#6c512f]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4 z-50">
          <img src="https://raw.githubusercontent.com/sapyk/site/main/assets/images/logo-mark.png" alt="Logo" className="w-12 h-12 rounded-xl object-cover shadow-sm" />
          <div>
            <h1 className="font-serif text-lg md:text-xl font-bold leading-tight text-text">Sri Atmananda Pranayama Yoga Kendra</h1>
            <p className="text-[10px] md:text-xs text-muted hidden sm:block">Guided breath practice for a calmer and steadier life.</p>
          </div>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`text-sm font-semibold transition-colors relative py-2 ${pathname === link.path ? 'text-saffron' : 'text-text hover:text-saffron'}`}
            >
              {link.name}
              {pathname === link.path && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-saffron rounded-full"></span>
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2">
            <a href="#" className="w-8 h-8 rounded-full border border-[#6c512f]/20 flex items-center justify-center text-text hover:bg-saffron hover:text-white transition-colors"><Facebook size={14} /></a>
            <a href="#" className="w-8 h-8 rounded-full border border-[#6c512f]/20 flex items-center justify-center text-text hover:bg-saffron hover:text-white transition-colors"><Instagram size={14} /></a>
            <a href="#" className="w-8 h-8 rounded-full border border-[#6c512f]/20 flex items-center justify-center text-text hover:bg-saffron hover:text-white transition-colors"><Linkedin size={14} /></a>
            <a href="https://www.youtube.com/@AtmanandaPranayama" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full border border-[#6c512f]/20 flex items-center justify-center text-text hover:bg-saffron hover:text-white transition-colors"><Youtube size={14} /></a>
          </div>
          <Link to="/contact#enquire" className="bg-saffron hover:bg-saffron-hover text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-colors shadow-sm">
            Send Enquiry
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden z-50 p-2 text-text"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-[#f4efe6] z-40 flex flex-col pt-28 px-6 pb-6 overflow-y-auto lg:hidden">
            <nav className="flex flex-col gap-6 mb-10">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className={`text-2xl font-serif font-bold ${pathname === link.path ? 'text-saffron' : 'text-text'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="mt-auto">
              <Link 
                to="/contact#enquire" 
                className="bg-saffron text-white px-6 py-4 rounded-full font-semibold text-center block w-full mb-8"
                onClick={() => setIsMenuOpen(false)}
              >
                Send Enquiry
              </Link>
              <div className="flex items-center gap-4 justify-center">
                <a href="#" className="w-10 h-10 rounded-full border border-[#6c512f]/20 flex items-center justify-center text-text"><Facebook size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full border border-[#6c512f]/20 flex items-center justify-center text-text"><Instagram size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full border border-[#6c512f]/20 flex items-center justify-center text-text"><Linkedin size={18} /></a>
                <a href="https://www.youtube.com/@AtmanandaPranayama" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-[#6c512f]/20 flex items-center justify-center text-text"><Youtube size={18} /></a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
