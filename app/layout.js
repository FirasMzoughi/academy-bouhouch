import './globals.css'; 
import Header from '../app/_components/Header';
import Footer from '../app/_components/Footer';
import { LanguageProvider } from '../app/_context/LanguageContext';
import Head from 'next/head';

export const metadata = {
  title: 'Academy Bouhouch',
  description: 'مركز تكوين للحلاقة والجمال',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Academy Bouhouch</title>
        <link rel="icon" href="/logo.png" type="image/png" /> {/* Ensure the path matches your logo */}
      </Head>
      <LanguageProvider>
        <body>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </body>
      </LanguageProvider>
    </html>
  );
}
