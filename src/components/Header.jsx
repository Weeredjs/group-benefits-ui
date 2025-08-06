// components/Header.jsx
import React from "react";

export default function Header() {
  return (
    <header className="bg-primary shadow-soft sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-3 px-6">
        <a href="/" className="flex items-center gap-3">
          <img
            src="https://eastcoastemployeebenefits.com/wp-content/uploads/2021/07/cropped-cropped-Logo-header.png"
            alt="East Coast Employee Benefits"
            className="h-10 w-auto"
          />
          <span className="hidden md:inline font-heading text-xl font-bold text-white tracking-tight">
            East Coast Employee Benefits
          </span>
        </a>
        <nav className="flex gap-5">
          <a href="/" className="text-white font-medium hover:text-accent transition-colors">Home</a>
          <a href="/dashboard" className="text-white font-medium hover:text-accent transition-colors">Quotes</a>
          <a href="/profile" className="text-white font-medium hover:text-accent transition-colors">Profile</a>
          <a href="/contact" className="text-white font-medium hover:text-accent transition-colors">Contact</a>
        </nav>
        <a
          href="/login"
          className="ml-4 px-5 py-2 rounded-xl bg-accent text-white font-heading font-semibold shadow-md hover:bg-soft transition"
        >
          Client Login
        </a>
      </div>
    </header>
  );
}