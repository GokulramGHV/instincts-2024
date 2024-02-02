import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Instincts 2024",
  description:
    "SSN-SNUC Instincts is one of the most awaited cultural events in the country. This year, Instincts will be held over three days with an exciting prize pool of over ₹5,00,000 across more than 50 events hosted by over 20 clubs!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@400&display=swap"
        />
      </head>
      <body className={inter.className} style={{ position: "relative" }}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
