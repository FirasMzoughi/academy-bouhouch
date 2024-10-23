"use client";
import Image from "next/image";
import { useLanguage } from "../_context/LanguageContext"; // استيراد useLanguage

export default function Courses() {
  const { language } = useLanguage(); // استخدام سياق اللغة

  // Course information based on language
  const courses = {
    fr: [
      { title: "Coiffure pour Hommes", description: "Apprenez les techniques de coiffure pour hommes.", image: "/im3.jpg" },
      { title: "Coiffure pour Femmes", description: "Maîtrisez les styles et coupes féminins.", image: "/im2.webp" },
      { title: "Esthétique", description: "Devenez un expert en soins de beauté.", image: "/im1.jpg" },
    ],
    ar: [
      { title: "تصفيف الشعر للرجال", description: "تعلم تقنيات الحلاقة والتصفيف للرجال.", image: "/im3.jpg" },
      { title: "تصفيف الشعر للنساء", description: "اتقن أساليب وقصات الشعر للنساء.", image: "/im2.webp" },
      { title: "علم الجمال", description: "كن خبيرًا في مجال العناية بالجمال.", image: "/im1.jpg" },
    ],
    en: [
      { title: "Men's Hairstyling", description: "Learn men's hairstyling techniques.", image: "/im3.jpg" },
      { title: "Women's Hairstyling", description: "Master women's styles and cuts.", image: "/im2.webp" },
      { title: "Aesthetics", description: "Become an expert in beauty care.", image: "/im1.jpg" },
    ],
  };

  const sectionTitle = {
    fr: "Nos Cours",
    ar: "دوراتنا",
    en: "Our Courses",
  };

  return (
    <div className="py-10 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12">{sectionTitle[language]}</h2>
      
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-0">
        {courses[language].map((course, index) => (
          <div key={index} className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            {/* Course image */}
            <div className="w-full h-48 relative mb-4">
              <Image 
                src={course.image} 
                alt={course.title} 
                layout="fill" 
                className="rounded-lg object-cover"
              />
            </div>
            {/* Course information */}
            <h3 className="text-xl font-semibold text-gray-800">{course.title}</h3>
            <p className="text-gray-500 mt-2 text-center">{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
