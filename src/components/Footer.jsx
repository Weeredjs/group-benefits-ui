import React from "react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-12">
      <div className="max-w-6xl mx-auto py-8 px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-4">
          <img
            src="https://eastcoastemployeebenefits.com/wp-content/uploads/2021/08/Logo-inverted-1-e1699561453507.png"
            alt="East Coast Employee Benefits"
            className="h-10 w-auto"
          />
          <span className="font-heading text-lg md:text-xl font-bold">East Coast Employee Benefits</span>
        </div>
        <div className="flex gap-6 items-center">
          <a href="https://www.linkedin.com/company/east-coast-employee-benefits/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-soft transition">
            {/* SVG ICON CODE HERE */}
          </a>
          <a href="https://www.facebook.com/EastCoastEmployeeBenefits/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-soft transition">
            {/* SVG ICON CODE HERE */}
          </a>
          <a href="https://www.instagram.com/eastcoastemployeebenefits/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-soft transition">
            {/* SVG ICON CODE HERE */}
          </a>
        </div>
        <div className="text-sm mt-4 md:mt-0 font-body text-white/70 text-center md:text-right">
          &copy; {new Date().getFullYear()} East Coast Employee Benefits. All rights reserved.
        </div>
      </div>
    </footer>
  );
}