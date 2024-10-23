"use client"; 
import Image from 'next/image';
import { useLanguage } from '../_context/LanguageContext'; 

export default function HeroSection() {
  const { language } = useLanguage(); 

  const titles = {
    fr: "Bienvenue à Academy Bouhouch",
    ar: "مرحبًا بكم في أكاديمية بوحوش",
    en: "Welcome to Academy Bouhouch",
  };

  return (
    <section className="relative bg-gradient-to-b from-blue-300 to-blue-500 text-white h-screen">
      <Image 
        src="/hero.png" 
        alt="Hero Image" 
        layout="fill" 
        objectFit="cover" 
        className="object-cover opacity-50"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-5xl font-bold text-center">{titles[language]}</h1>
      </div>
    </section>
  );
}
