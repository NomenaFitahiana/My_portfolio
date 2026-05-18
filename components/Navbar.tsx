'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 right-0 h-16 z-50 bg-transparent">
      <div className="flex items-center h-full px-4">
        {isOpen && (
          <>
            <div className="flex gap-6">
              {navItems.map((item) => (
                <a 
                  key={item.href}
                  href={item.href}
                  className="text-sm
                  font-light
                  font-[family-name:var(--font-inter)] 
                  opacity-70 
                  hover:opacity-35"
                  style={{ color: "var(--text-dark)" }}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="w-px h-8 bg-gray-800 mx-6"></div>
          </>
        )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          relative
          p-2
          ml-auto
          uppercase
          tracking-[0.2em]
          text-sm
          font-light
          font-[family-name:var(--font-inter)]
          after:absolute
          after:left-2
          after:-bottom-1
          after:w-[70%]
          after:h-[1px]
          after:bg-black
        "
        style={{ color: "var(--text-dark)" }}
      >
        Menu
      </button>
      </div>
    </nav>
  );
} 