"use client";
import { useLanguage } from "../_context/LanguageContext"; // استيراد useLanguage
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

// Custom hook for scroll-based animation
function useOnScreen(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (ref && ref.current) {
      const observer = new IntersectionObserver(([entry]) =>
        setIntersecting(entry.isIntersecting)
      );
      observer.observe(ref.current);
      return () => {
        if (ref.current) observer.unobserve(ref.current);
      };
    }
  }, [ref]);

  return isIntersecting;
}

export default function About() {
  const { language } = useLanguage(); // استخدام سياق اللغة
  const images = [
    "/pic1.jpg",
    "/pic2.jpg",
    "/pic4.jpg",
    "/pic5.jpg",
    "/pic6.jpg",
    "/pic7.jpg",
    "/pic8.jpg",
  ]; // Example image paths

  // Initialize refs for each image
  const imageRefs = images.map(() => useRef(null));

  // Content for the About page based on the selected language
  const aboutContent = {
    fr: {
      title: "À Propos de Nous",
      description: `
        L'Académie Bouhouch Sparesto est l'une des principales institutions en Tunisie dans le domaine de la formation professionnelle. 
        Avec des programmes spécialisés en coiffure et esthétique, nous nous engageons à offrir des formations de haute qualité pour garantir le succès de nos étudiants. 
        Notre mission est de former des experts capables de travailler partout dans le monde, tout en mettant l'accent sur l'innovation et la maîtrise des techniques modernes.
      `,
      missionTitle: "Notre Mission",
      mission: "Fournir des compétences professionnelles en coiffure et en esthétique, adaptées aux normes internationales.",
      valuesTitle: "Nos Valeurs",
      values: "Engagement, Créativité, Excellence",
      galleryTitle: "Galerie",
    },
    ar: {
      title: "معلومات عنا",
      description: `
        أكاديمية بوحوش سبارستو تعد من أبرز المؤسسات في تونس في مجال التكوين المهني. 
        من خلال برامج متخصصة في الحلاقة والتجميل، نلتزم بتقديم تعليم عالي الجودة لضمان نجاح طلابنا. 
        مهمتنا هي تكوين خبراء قادرين على العمل في أي مكان في العالم مع التركيز على الإبداع وإتقان التقنيات الحديثة.
      `,
      missionTitle: "مهمتنا",
      mission: "توفير المهارات المهنية في مجال الحلاقة والتجميل وفقًا للمعايير الدولية.",
      valuesTitle: "قيمنا",
      values: "الالتزام، الإبداع، التميز",
      galleryTitle: "معرض الصور",
    },
    en: {
      title: "About Us",
      description: `
        Academy Bouhouch Sparesto is one of Tunisia's leading institutions in the field of vocational training. 
        With specialized programs in hairstyling and aesthetics, we are committed to delivering high-quality education to ensure the success of our students. 
        Our mission is to train experts capable of working anywhere in the world, with a focus on innovation and mastery of modern techniques.
      `,
      missionTitle: "Our Mission",
      mission: "To provide professional skills in hairstyling and aesthetics, aligned with international standards.",
      valuesTitle: "Our Values",
      values: "Commitment, Creativity, Excellence",
      galleryTitle: "Gallery",
    },
  };

  return (
    <div className="py-10 bg-gray-50">
      <div className="container mx-auto px-6 md:px-0">
        <h2 className="text-4xl font-bold text-center mb-8">{aboutContent[language].title}</h2>
        
        {/* Description */}
        <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl mx-auto leading-relaxed">
          {aboutContent[language].description}
        </p>

        {/* Mission and Values Section */}
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

        {/* Image Section with Animation */}
        <h3 className="text-3xl font-bold text-center mb-8">{aboutContent[language].galleryTitle}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => {
            const isVisible = useOnScreen(imageRefs[index]);
            return (
              <div
                key={index}
                ref={imageRefs[index]}
                className={`transition-opacity transform duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              >
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
