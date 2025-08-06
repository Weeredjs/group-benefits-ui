// components/Header.jsx
import React from "react";

import React from "react";

export default function Header() {
  return (
    <header className="bg-primary text-white shadow-soft sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <a href="/" className="flex items-center gap-3">
          <img
            src="https://eastcoastemployeebenefits.com/wp-content/uploads/2021/07/cropped-cropped-Logo-header.png"
            alt="East Coast Employee Benefits"
            className="h-10 w-auto rounded-xl bg-white shadow-soft p-1"
          />
          <span className="hidden md:inline font-heading text-2xl font-bold text-white tracking-tight drop-shadow">
            East Coast Employee Benefits
          </span>
        </a>
        <nav className="flex gap-6">
          <a href="/" className="font-medium hover:text-accent transition-colors">Home</a>
          <a href="/dashboard" className="font-medium hover:text-accent transition-colors">Quotes</a>
          <a href="/profile" className="font-medium hover:text-accent transition-colors">Profile</a>
          <a href="/contact" className="font-medium hover:text-accent transition-colors">Contact</a>
        </nav>
        <a
          href="/login"
          className="ml-6 px-5 py-2 rounded-xl bg-accent text-white font-heading font-semibold shadow-md hover:bg-soft hover:text-primary transition"
        >
          Client Login
        </a>
      </div>
    </header>
  );
}