"use client"; 
import Link from 'next/link';
import { useLanguage } from '../_context/LanguageContext'; // استيراد useLanguage
import { FaFacebookF, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa'; // استيراد أيقونات

export default function Footer() {
  const { language } = useLanguage(); // استخدام سياق اللغة

  // نصوص الروابط بناءً على اللغة
  const links = {
    fr: { about: "À propos", contact: "Contact" },
    ar: { about: "معلومات عنا", contact: "اتصل بنا" },
    en: { about: "About", contact: "Contact" },
  };

  const copyrightTexts = {
    fr: "© 2024 Academy Bouhouch. Tous droits réservés.",
    ar: "© 2024 أكاديمية بوحوش. جميع الحقوق محفوظة.",
    en: "© 2024 Academy Bouhouch. All rights reserved.",
  };

  // معلومات الاتصال بناءً على اللغة
  const contactInfo = {
    fr: {
      email: "Email: academy.bouhouch@gmail.com",
      phone: "Téléphone: 98824829",
    },
    ar: {
      email: "البريد الإلكتروني: academy.bouhouch@gmail.com",
      phone: "الهاتف: 98824829",
    },
    en: {
      email: "Email: academy.bouhouch@gmail.com",
      phone: "Phone: 98824829",
    },
  };

  return (
    <footer className="bg-white text-gray-800 p-6 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center">
        <div className="flex space-x-6 mb-4 md:mb-0">
          <Link href="/about" className="hover:text-yellow-500 transition-colors duration-300">{links[language].about}</Link>
          <Link href="/contact" className="hover:text-yellow-500 transition-colors duration-300">{links[language].contact}</Link>
          <Link href="https://www.facebook.com/profile.php?id=100075997478054" target="_blank" className="hover:text-yellow-500 transition-colors duration-300 flex items-center">
            <FaFacebookF className="mr-1" /> 
          </Link>
          <Link href="https://www.instagram.com/academy_bouhouch_sparesto_/" target="_blank" className="hover:text-yellow-500 transition-colors duration-300 flex items-center">
            <FaInstagram className="mr-1" />
          </Link>
        </div>
      </div>
      <div className="text-center mt-4">
        <h3 className="text-xl font-bold">{links[language].about}</h3>
        <div className="flex justify-center space-x-2 mt-2">
          <FaEnvelope className="text-gray-600" />
          <p>{contactInfo[language].email}</p>
        </div>
        <div className="flex justify-center space-x-2 mt-2">
          <FaPhone className="text-gray-600" />
          <p>{contactInfo[language].phone}</p>
        </div>
      </div>
      <p className="text-center mt-4">{copyrightTexts[language]}</p>
    </footer>
  );
}
