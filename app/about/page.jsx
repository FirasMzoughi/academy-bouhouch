"use client"; // تأكد من وجود هذا في أعلى الملف

import Image from "next/image";
import { useLanguage } from "../_context/LanguageContext"; // استيراد useLanguage

export default function About() {
  const { language } = useLanguage(); // استخدام السياق لتحديد اللغة

  // محتوى النصوص حسب اللغة
  const aboutContent = {
    fr: {
      title: "À Propos de Nous",
      description: `L'Académie Bouhouch Sparesto est l'une des principales institutions en Tunisie...`,
      missionTitle: "Notre Mission",
      mission: "Fournir des compétences professionnelles en coiffure et en esthétique...",
      valuesTitle: "Nos Valeurs",
      values: "Engagement, Créativité, Excellence",
      galleryTitle: "Galerie",
    },
    ar: {
      title: "معلومات عنا",
      description: `أكاديمية بوحوش سبارستو تعد من أبرز المؤسسات في تونس...`,
      missionTitle: "مهمتنا",
      mission: "توفير المهارات المهنية في مجال الحلاقة والتجميل...",
      valuesTitle: "قيمنا",
      values: "الالتزام، الإبداع، التميز",
      galleryTitle: "معرض الصور",
    },
    en: {
      title: "About Us",
      description: `Academy Bouhouch Sparesto is one of Tunisia's leading institutions...`,
      missionTitle: "Our Mission",
      mission: "To provide professional skills in hairstyling and aesthetics...",
      valuesTitle: "Our Values",
      values: "Commitment, Creativity, Excellence",
      galleryTitle: "Gallery",
    },
  };

  // قائمة الصور للمعرض
  const images = [
    "/pic1.jpg",
    "/pic2.jpg",
    "/pic4.jpg",
    "/pic5.jpg",
    "/pic6.jpg",
    "/pic7.jpg",
    "/pic8.jpg",
  ];

  return (
    <div className="py-10 bg-gray-50">
      <div className="container mx-auto px-6 md:px-0">
        <h2 className="text-4xl font-bold text-center mb-8">{aboutContent[language].title}</h2>

        {/* الوصف */}
        <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl mx-auto leading-relaxed">
          {aboutContent[language].description}
        </p>

        {/* قسم المهمة والقيم */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center transition-transform duration-500 hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4">{aboutContent[language].missionTitle}</h3>
            <p className="text-gray-600">{aboutContent[language].mission}</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg text-center transition-transform duration-500 hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4">{aboutContent[language].valuesTitle}</h3>
            <p className="text-gray-600">{aboutContent[language].values}</p>
          </div>
        </div>

        {/* قسم المعرض */}
        <h3 className="text-3xl font-bold text-center mb-8">{aboutContent[language].galleryTitle}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="transition-opacity transform duration-1000 opacity-100 scale-100">
              <Image
                src={image}
                alt={`Gallery image ${index + 1}`}
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
