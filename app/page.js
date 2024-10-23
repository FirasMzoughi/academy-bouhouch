"use client"; 
import Image from "next/image";
import HeroSection from "./_components/HeroSection";
import { useLanguage } from './_context/LanguageContext'; // استيراد useLanguage

export default function Home() {
  const { language } = useLanguage(); // استخدام سياق اللغة

  // نصوص الأكاديمية بناءً على اللغة
  const academyTexts = {
    fr: `
      #L'Académie Bouhouch Sbaristo en coiffure et esthétique à Kairouan est l'une des principales institutions dans le domaine de la formation professionnelle, s'étant distinguée par ses résultats exceptionnels grâce à la qualité de l'enseignement et au succès de ses étudiants. 
      #L'académie repose sur un système interne strict, où aucun étudiant n'est admis sans respecter des critères spécifiques garantissant le choix des meilleurs. 
      #L'académie vise à former une génération d'élite possédant les compétences nécessaires pour travailler n'importe où dans le monde, en offrant des programmes complets qui allient formation professionnelle et apprentissage de langues étrangères telles que l'anglais et l'italien. De plus, l'académie veille à inculquer des qualités de réussite telles que l'engagement, la persévérance et la créativité dans l'esprit des étudiants, tout en offrant un environnement d'apprentissage stimulant qui soutient le développement continu.
      #L'académie fonctionne selon un système éducatif intégré qui combine théorie et pratique, et son équipe veille à suivre de près les étudiants et à encourager leur communication positive. Grâce à des ateliers réguliers avec des experts internationaux, l'académie garantit une mise à jour constante des dernières technologies et tendances dans le monde de la coiffure et de l'esthétique, ce qui en fait un leader dans ce domaine.
    `,
    ar: `
      #أكاديمية بوحوش سبارستو للحلاقة والتجميل بالقيروان تعد من أبرز المؤسسات في مجال التكوين المهني، حيث تميزت بحصولها على مراتب عليا بفضل جودة التعليم وتفوق طلبتها. 
      #تعتمد الأكاديمية على نظام داخلي صارم، حيث لا يُقبل أي طالب إلا وفق شروط محددة تضمن اختيار الأكفأ. 
      #تسعى الأكاديمية إلى بناء جيل متميز يمتلك المهارات اللازمة للعمل في أي مكان في العالم، من خلال تقديم برامج متكاملة تجمع بين التكوين المهني والتدريب على اللغات الأجنبية مثل الإنجليزية والإيطالية. بالإضافة إلى ذلك، تهتم الأكاديمية بزرع صفات النجاح كالالتزام، المثابرة، والإبداع في نفوس الطلبة، مع توفير بيئة تعليمية محفزة تدعم التطور المستمر.
      #تعمل الأكاديمية على نظام تعليمي متكامل يجمع بين النظري والتطبيقي، ويحرص فريقها على متابعة الطلبة وتعزيز تواصلهم الإيجابي. من خلال ورش عمل دورية مع خبراء دوليين، تضمن الأكاديمية مواكبة أحدث التقنيات والاتجاهات في عالم الحلاقة والتجميل، مما يجعلها رائدة في هذا المجال.
    `,
    en: `
      #Academy Bouhouch Sbaristo for Hairdressing and Beauty in Kairouan is one of the leading institutions in vocational training, having distinguished itself by achieving high ranks thanks to the quality of education and the excellence of its students. 
      #The academy relies on a strict internal system, where no student is admitted without meeting specific criteria that ensure the selection of the best.
      #The academy aims to build an exceptional generation equipped with the necessary skills to work anywhere in the world, by offering comprehensive programs that combine vocational training and foreign language training such as English and Italian. Additionally, the academy focuses on instilling qualities of success such as commitment, perseverance, and creativity in students, while providing a stimulating learning environment that supports continuous development.
      #The academy operates on an integrated educational system that combines theory and practice, and its team is keen to monitor students and enhance their positive communication. Through regular workshops with international experts, the academy ensures it stays up to date with the latest techniques and trends in the world of hairdressing and beauty, making it a leader in this field.
    `,
  };

  // نصوص عنوان "من نحن" بناءً على اللغة
  const sectionTitles = {
    fr: "À propos de nous",
    ar: "من نحن",
    en: "About Us",
  };

  // نصوص تعلم الأكاديمية بناءً على اللغة
  const learningTexts = {
    fr: `
      #Ce que vous apprendrez : 
      - Techniques de coiffure modernes.
      - Maîtrise du maquillage pour différents types de peau.
      - Soins de la peau et bien-être.
      - Compétences en communication et service à la clientèle.
    `,
    ar: `
      #ما ستتعلمه :
      - تقنيات تصفيف الشعر الحديثة.
      - اتقان المكياج لمختلف أنواع البشرة.
      - العناية بالبشرة والرفاهية.
      - مهارات التواصل وخدمة العملاء.
    `,
    en: `
      #What You Will Learn:
      - Modern hairstyling techniques.
      - Mastering makeup for different skin types.
      - Skincare and wellness.
      - Communication skills and customer service.
    `,
  };

  return (
    <div>
      <HeroSection />
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{sectionTitles[language]}</h2>
          <p className="text-gray-600 mb-8">{academyTexts[language]}</p>
        </div>
      </section>
      <section className="bg-white py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{learningTexts[language].split("\n")[0]}</h2>
          <ul className="text-gray-600 mb-8 list-disc list-inside">
            {learningTexts[language].split("\n").slice(1).map((item, index) => (
              <li key={index} className="mb-2">{item}</li>
            ))}
          </ul>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image src="/pic1.jpg" alt="Modern Hairstyling Techniques" width={300} height={200} className="mb-4 rounded" />
              
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image src="/pic2.jpg" alt="Makeup Mastery" width={300} height={200} className="mb-4 rounded" />
              
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image src="/pic3.jpg" alt="Skincare and Wellness" width={300} height={200} className="mb-4 rounded" />
            
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
