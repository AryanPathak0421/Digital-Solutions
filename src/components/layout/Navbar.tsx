import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, PhoneCall } from 'lucide-react';
import { businessConfig } from '../../config/business';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { Button } from '../common/Button';

export interface NavbarProps {
  onOpenConsultation?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrolled } = useScrollPosition(15);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Services', to: '/services' },
    { label: 'Pricing', to: '/pricing' },
    { label: 'Portfolio', to: '/portfolio' },
    { label: 'Process', to: '/process' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ];

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80 py-3'
          : 'bg-white/70 backdrop-blur-xs py-4 sm:py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white font-black text-xl shadow-md shadow-indigo-600/10 group-hover:scale-105 transition-transform duration-200">
              <span className="bg-gradient-to-tr from-indigo-400 to-sky-300 bg-clip-text text-transparent">
                R
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-extrabold tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
                {businessConfig.name}
              </span>
              <span className="text-[10px] font-semibold tracking-wider uppercase text-slate-500">
                Digital Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden md:flex items-center space-x-1 lg:space-x-2"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-sm font-semibold transition-colors duration-150 ${
                    isActive
                      ? 'text-indigo-600 bg-indigo-50/70 font-bold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/60'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${businessConfig.contact.phoneRaw}`}
              className="text-xs font-semibold text-slate-600 hover:text-indigo-600 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg hover:bg-slate-50 transition-colors"
              title="Call Specialist"
            >
              <PhoneCall className="w-3.5 h-3.5 text-slate-400" />
              <span>{businessConfig.contact.phone}</span>
            </a>

            {onOpenConsultation ? (
              <Button
                variant="primary"
                size="sm"
                onClick={onOpenConsultation}
                rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
              >
                Get Started
              </Button>
            ) : (
              <Button
                asAnchor
                href="/pricing"
                variant="primary"
                size="sm"
                rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
              >
                Get Started
              </Button>
            )}
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              className="p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Animated Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-white border-b border-slate-200 shadow-xl"
          >
            <div className="px-4 pt-3 pb-6 space-y-1">
              <div className="px-3 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
                Navigation
              </div>
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-3.5 py-2.5 rounded-xl text-base font-semibold transition-colors ${
                      isActive
                        ? 'text-indigo-600 bg-indigo-50 font-bold'
                        : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                    }`
                  }
                >
                  <span>{link.label}</span>
                  {location.pathname === link.to && (
                    <span className="w-2 h-2 rounded-full bg-indigo-600" />
                  )}
                </NavLink>
              ))}

              <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-2.5">
                <div className="flex items-center justify-between px-3 text-xs text-slate-500">
                  <span>Direct Consultation Helpline:</span>
                  <a
                    href={`tel:${businessConfig.contact.phoneRaw}`}
                    className="font-bold text-indigo-600"
                  >
                    {businessConfig.contact.phone}
                  </a>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button
                    variant="primary"
                    className="flex-1"
                    onClick={() => {
                      closeMenu();
                      if (onOpenConsultation) onOpenConsultation();
                    }}
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
