import Script from 'next/script';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Page() {
  const doctorSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr. Jeet Karan Singh",
    "image": "https://drjeetsingh.com/portrait.jpg",
    "medicalSpecialty": "Internal Medicine",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dehradun",
      "addressRegion": "Uttarakhand",
      "addressCountry": "IN"
    },
    "url": "https://drjeetsingh.com",
    "telephone": "+917467848500"
  };

  return (
    <>
      <Script
        id="doctor-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(doctorSchema) }}
      />

      <main className="relative min-h-screen w-full overflow-hidden bg-[#FAFAFA]">
        {/* Floating Global Ambient Medical Glow Backdrop Element */}
        <div className="pointer-events-none fixed -top-40 left-1/2 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-sky-100/50 blur-[160px] z-0" />

        <Navbar />

        <div className="relative z-10">
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
}