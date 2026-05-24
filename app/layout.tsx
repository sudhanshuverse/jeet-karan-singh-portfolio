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
  title: "Dr. Jeet Karan Singh | Premium Medical Care",
  description: "Experience world-class, evidence-based medical care and compassionate clinical diagnostics.",
  keywords: ["Internal Medicine", "Doctor", "Dehradun", "MBBS", "Clinical Diagnostics", "Dr. Jeet Karan Singh"],
  authors: [{ name: "Dr. Jeet Karan Singh" }],
  openGraph: {
    title: "Dr. Jeet Karan Singh | Clinical Excellence",
    description: "Fusing evidence-based diagnostics with profound empathy.",
    type: "website",
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