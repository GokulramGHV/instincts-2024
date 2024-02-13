'use client';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/navbar';
import { useState } from 'react';
import navContext from '@/hooks/navContext';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const [isNavOpen, setNavOpen] = useState(false);

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@400&display=swap"
        />
        <title>Instincts 2024</title>
        <meta
          name="description"
          content="SSN-SNUC Instincts is one of the most awaited cultural events in the country. This year, Instincts will be held over three days with an exciting prize pool of over ₹5,00,000 across more than 50 events hosted by over 20 clubs!"
        />
      </head>
      <body
        className={inter.className}
        style={{
          position: 'relative',
          overflowY: isNavOpen ? 'hidden' : 'scroll',
        }}
      >
        <navContext.Provider value={{ isNavOpen, setNavOpen }}>
          <Navbar />
          {children}
        </navContext.Provider>
      </body>
    </html>
  );
}
