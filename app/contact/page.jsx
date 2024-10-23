"use client";
import { useLanguage } from "../_context/LanguageContext"; // استيراد useLanguage
import { useState } from "react";

// Embed Google Map component
function GoogleMap() {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg mb-8">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3233.035672180846!2d10.08716497671119!3d35.678251330100106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130219fd7d43b56f%3A0x5df01a0d243bddad!2sFoyer%20Abu%20Kacem%20Chebi!5e0!3m2!1sen!2stn!4v1698067612342!5m2!1sen!2stn"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default function Contact() {
  const { language } = useLanguage(); // استخدام سياق اللغة

  const contactContent = {
    fr: {
      title: "Contactez-Nous",
      addressTitle: "Adresse",
      address: "Cité Mansoura - Rue beit hikma - devant foyer Abou Kacem Chebi, Kairouan, Tunisia",
      emailTitle: "Email",
      email: "academy.bouhouch@gmail.com",
      phoneTitle: "Téléphone",
      phone: "+216 55 555 555",
      formTitle: "Envoyez-nous un message",
      submit: "Envoyer",
    },
    ar: {
      title: "اتصل بنا",
      addressTitle: "العنوان",
      address: "حي المنصورة - شارع بيت الحكمة - أمام دار أبو القاسم الشابي، القيروان، تونس",
      emailTitle: "البريد الإلكتروني",
      email: "academy.bouhouch@gmail.com",
      phoneTitle: "الهاتف",
      phone: "+216 55 555 555",
      formTitle: "أرسل لنا رسالة",
      submit: "إرسال",
    },
    en: {
      title: "Contact Us",
      addressTitle: "Address",
      address: "Cité Mansoura - Rue beit hikma - devant foyer Abou Kacem Chebi, Kairouan, Tunisia",
      emailTitle: "Email",
      email: "academy.bouhouch@gmail.com",
      phoneTitle: "Phone",
      phone: "+216 55 555 555",
      formTitle: "Send Us a Message",
      submit: "Send",
    },
  };

  // Contact form handler (you can integrate it with a backend)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to backend or email service)
    alert("Message sent!");
  };

  return (
    <div className="py-10 bg-gray-50">
      <div className="container mx-auto px-6 md:px-0">
        <h2 className="text-4xl font-bold text-center mb-8">{contactContent[language].title}</h2>

        {/* Google Map */}
        <GoogleMap />

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold mb-4">{contactContent[language].addressTitle}</h3>
            <p className="text-gray-600">{contactContent[language].address}</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold mb-4">{contactContent[language].emailTitle}</h3>
            <p className="text-gray-600">{contactContent[language].email}</p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">{contactContent[language].phoneTitle}</h3>
            <p className="text-gray-600">{contactContent[language].phone}</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
          <h3 className="text-3xl font-semibold mb-6 text-center">{contactContent[language].formTitle}</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="6"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-lg transition-colors duration-300"
            >
              {contactContent[language].submit}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
