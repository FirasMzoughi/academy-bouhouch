"use client"; 
import Image from "next/image"; 
import { useLanguage } from '../_context/LanguageContext'; // استيراد useLanguage

export default function Team() {
  const { language } = useLanguage(); // استخدام سياق اللغة

  // نصوص الفريق بناءً على اللغة
  const teamMembers = {
    fr: [
      { name: "Imed Bouhouch", role: "Directeur", image: "/team1.jpg" },
      { name: "Sabra Romdhani", role: "Directrice", image: "/team2.jpg" },
    ],
    ar: [
      { name: "عماد بوحوش", role: "مدير", image: "/team1.jpg" },
      { name: "صبرة الرمضاني", role: "مديرة", image: "/team2.jpg" },
    ],
    en: [
      { name: "Imed Bouhouch", role: "Director", image: "/team1.jpg" },
      { name: "Sabra Romdhani", role: "Director", image: "/team2.jpg" },
    ],
  };

  const sectionTitle = {
    fr: "Notre Équipe",
    ar: "فريقنا",
    en: "Our Team",
  };

  return (
    <div className="py-10">
      <h2 className="text-3xl font-bold text-center mb-8">{sectionTitle[language]}</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {teamMembers[language].map((member, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-lg">
            <div className="flex-shrink-0">
              <Image src={member.image} alt={member.name} width={200} height={200} className="mb-4 md:mb-0 rounded-full" />
            </div>
            <div className="md:ml-6 text-center md:text-left">
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
