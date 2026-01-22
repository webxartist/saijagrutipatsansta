import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import Navbar from "@/Components/Navbar";
// import Footer from "@/Components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "साई जागृती नागरी पतसंस्था (मर्या.) मुंबई",
    template: "%s | साई जागृती नागरी पतसंस्था",
  },

  description:
    "साई जागृती नागरी पतसंस्था (मर्या.) मुंबई – विश्वासार्ह आर्थिक सेवा देणारी नागरी पतसंस्था. Personal Loan, Business Loan, Gold Loan, Home Loan तसेच सुरक्षित Fixed व Recurring Deposit योजना.",

  keywords: [
    "Sai Jagruti Nagari Pat sanstha",
    "Sai Jagruti Nagari Pat sansta",
    "Sai Jagruti Pat sansta",
    "नागरी पतसंस्था मुंबई",
    "Personal Loan Mumbai",
    "Business Loan",
    "Gold Loan",
    "Home Loan",
    "Fixed Deposit",
    "Recurring Deposit",
    "Nagari Patsanstha",
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "साई जागृती नागरी पतसंस्था (मर्या.) मुंबई" | "sai jagruti pat sansta",
    description:
      "Mumbai based trusted Nagari Patsanstha providing Personal, Business, Gold & Home Loans with secure deposit schemes.",
    url: "https://www.saijagrutipatsansta.com",
    siteName: "साई जागृती नागरी पतसंस्था",
    locale: "mr_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "साई जागृती नागरी पतसंस्था मुंबई",
    description:
      "Trusted Nagari Patsanstha in Mumbai offering loans and secure deposit schemes.",
  },

  alternates: {
    canonical: "https://www.saijagrutipatsansta.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="mr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <Navbar /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
