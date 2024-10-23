"use client"; 
import { useState } from 'react';
import { FaGlobe, FaBars } from 'react-icons/fa'; // Import the Globe and Bars icons
import { useLanguage } from '../_context/LanguageContext'; 
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const { language, changeLanguage } = useLanguage(); 
  const [menuOpen, setMenuOpen] = useState(false); // For the hamburger menu
  const [dropdownOpen, setDropdownOpen] = useState(false); // For the language dropdown
  const navLinks = {
    fr: { home: "Accueil", team: "Équipe", courses: "Cours", about: "À propos", contact: "Contact" },
    ar: { home: "الرئيسية", team: "الفريق", courses: "الدورات", about: "معلومات عنا", contact: "اتصل بنا" },
    en: { home: "Home", team: "Team", courses: "Courses", about: "About", contact: "Contact" },
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
    setDropdownOpen(false); // Close the dropdown after language selection
  };

  return (
    <header className="relative flex justify-between items-center p-6 bg-white text-gray-800 shadow-md z-50"> {/* Ensure z-index is higher */}
      {/* Logo */}
      <div className="flex items-center">
        <Image src="/logo.jpg" alt="Academy Bouhouch Logo" width={80} height={80} priority className="rounded-full" />
      </div>

      {/* Hamburger Icon for mobile */}
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="p-2 text-black">
          <FaBars size={24} />
        </button>
      </div>

      {/* Navigation Menu for desktop */}
      <nav className="hidden lg:flex space-x-6">
        <Link href="/" className="hover:text-yellow-500">{navLinks[language].home}</Link>
        <Link href="/team" className="hover:text-yellow-500">{navLinks[language].team}</Link>
        <Link href="/courses" className="hover:text-yellow-500">{navLinks[language].courses}</Link>
        <Link href="/about" className="hover:text-yellow-500">{navLinks[language].about}</Link>
        <Link href="/contact" className="hover:text-yellow-500">{navLinks[language].contact}</Link>
      </nav>

      {/* Globe Icon for Language Selection on desktop */}
      <div className="hidden lg:flex relative z-50"> {/* Increase z-index */}
        <button onClick={toggleDropdown} className="p-2 text-black">
          <FaGlobe  size={24} />
          <span className="mr-[-3px]">{language === 'ar' ? 'العربية' : language === 'fr' ? 'Français' : 'English'}</span>
        </button>
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-32 bg-white border rounded-lg shadow-lg z-50">
            <button onClick={() => handleLanguageChange('ar')} className={`block w-full px-4 py-2 text-left hover:bg-gray-200 ${language === 'ar' ? 'bg-yellow-500' : ''}`}>
              العربية
            </button>
            <button onClick={() => handleLanguageChange('fr')} className={`block w-full px-4 py-2 text-left hover:bg-gray-200 ${language === 'fr' ? 'bg-yellow-500' : ''}`}>
              Français
            </button>
            <button onClick={() => handleLanguageChange('en')} className={`block w-full px-4 py-2 text-left hover:bg-gray-200 ${language === 'en' ? 'bg-yellow-500' : ''}`}>
              English
            </button>
          </div>
        )}
      </div>

      {/* Mobile Menu (visible only when clicked) */}
      {menuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center lg:hidden z-50">
          {/* Close Button */}
          <button onClick={toggleMenu} className="absolute top-4 right-4 text-black">
            X
          </button>
          {/* Navigation Links */}
          <nav className="flex flex-col space-y-6 mt-20 text-xl">
            <Link href="/" onClick={toggleMenu} className="hover:text-yellow-500">{navLinks[language].home}</Link>
            <Link href="/team" onClick={toggleMenu} className="hover:text-yellow-500">{navLinks[language].team}</Link>
            <Link href="/courses" onClick={toggleMenu} className="hover:text-yellow-500">{navLinks[language].courses}</Link>
            <Link href="/about" onClick={toggleMenu} className="hover:text-yellow-500">{navLinks[language].about}</Link>
            <Link href="/contact" onClick={toggleMenu} className="hover:text-yellow-500">{navLinks[language].contact}</Link>
          </nav>

          {/* Globe Icon and Language Dropdown */}
          <div className="mt-10">
            <button onClick={toggleDropdown} className="p-2 text-black">
              <FaGlobe size={24} />
              <span className="ml-2">{language === 'ar' ? 'العربية' : language === 'fr' ? 'Français' : 'English'}</span>
            </button>
            {dropdownOpen && (
              <div className="mt-2 w-32 bg-white border rounded-lg shadow-lg z-50">
                <button onClick={() => handleLanguageChange('ar')} className={`block w-full px-4 py-2 text-left hover:bg-gray-200 ${language === 'ar' ? 'bg-yellow-500' : ''}`}>
                  العربية
                </button>
                <button onClick={() => handleLanguageChange('fr')} className={`block w-full px-4 py-2 text-left hover:bg-gray-200 ${language === 'fr' ? 'bg-yellow-500' : ''}`}>
                  Français
                </button>
                <button onClick={() => handleLanguageChange('en')} className={`block w-full px-4 py-2 text-left hover:bg-gray-200 ${language === 'en' ? 'bg-yellow-500' : ''}`}>
                  English
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
