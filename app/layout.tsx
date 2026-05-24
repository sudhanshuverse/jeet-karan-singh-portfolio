import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import Script from "next/script";
import "./globals.css";

// 1. Initialize Premium Serif Font (Headings)
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

// 2. Initialize Premium Sans-Serif Font (Body Text)
const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

// 3. Production-Grade SEO Metadata
export const metadata: Metadata = {
  title: "Dr. Jeet Karan Singh | Internal Medicine Physician & Doctor in Dehradun",
  description: "Dr. Jeet Karan Singh, MBBS. Expert Internal Medicine physician in Dehradun offering evidence-based clinical diagnostics, chronic disease management, and secure online medical consultations.",
  keywords: ["Internal Medicine Doctor in Dehradun", "Best Physician in Dehradun", "Dr. Jeet Karan Singh Dehradun", "Online Doctor Consultation India", "Chronic Disease Specialist Dehradun", "Expert Physician Dehradun MBBS", "Clinical Diagnostics Dehradun", "General Medicine Doctor Dehradun"],
  authors: [{ name: "Dr. Jeet Karan Singh" }],
  alternates: {
    canonical: "https://drjeetsingh.com",
  },
  openGraph: {
    title: "Dr. Jeet Karan Singh | Internal Medicine Physician in Dehradun",
    description: "Expert clinical diagnostics and compassionate patient care. Book your consultation today.",
    url: "https://drjeetsingh.com",
    siteName: "Dr. Jeet Karan Singh",
    images: [
      {
        url: "/images/dr-jeet-karan-singh.png", // Make sure to place a 1200x630px image in your public folder
        width: 1200,
        height: 630,
        alt: "Dr. Jeet Karan Singh - Internal Medicine Physician",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${cormorant.variable} ${jost.variable}`}>
      <body className="bg-[#FAFAFA] text-[#2C2C2C] font-sans antialiased selection:bg-[#E5EDF1] selection:text-[#122532] overflow-x-hidden">

        {children}

        {/* Lenis Smooth Scroll Engine Injection */}
        <Script id="lenis-init" strategy="afterInteractive">
          {`
            const script = document.createElement('script');
            script.src = 'https://unpkg.com/@studio-freight/lenis@1.0.34/dist/lenis.min.js';
            script.onload = () => {
              const lenis = new Lenis({
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                direction: 'vertical',
                gestureDirection: 'vertical',
                smooth: true,
                mouseMultiplier: 1,
                smoothTouch: false,
                touchMultiplier: 2,
                infinite: false,
              });

              function raf(time) {
                lenis.raf(time);
                requestAnimationFrame(raf);
              }

              requestAnimationFrame(raf);
            };
            document.head.appendChild(script);
          `}
        </Script>
      </body>
    </html>
  );
}