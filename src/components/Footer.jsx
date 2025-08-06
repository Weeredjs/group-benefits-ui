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
          <a
            href="https://www.linkedin.com/company/east-coast-employee-benefits/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-soft transition"
          >
            <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21.5 2h-19A.5.5 0 002 2.5v19a.5.5 0 00.5.5h19a.5.5 0 00.5-.5v-19a.5.5 0 00-.5-.5zM7.19 19H4.98V9.35h2.21V19zm-1.1-11.09c-.7 0-1.16-.5-1.16-1.12 0-.63.46-1.12 1.18-1.12s1.16.5 1.18 1.12c0 .63-.46 1.12-1.18 1.12zm12.01 11.09h-2.21v-5.02c0-1.26-.46-2.13-1.61-2.13-.88 0-1.41.59-1.65 1.15-.08.21-.1.5-.1.79V19h-2.21s.03-8.53 0-9.65h2.21v1.37c.29-.45.81-1.09 1.97-1.09 1.44 0 2.52.94 2.52 2.95V19z"/>
            </svg>
          </a>
          <a
            href="https://www.facebook.com/EastCoastEmployeeBenefits/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-soft transition"
          >
            <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.676 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.406.593 24 1.326 24h11.494V14.708h-3.13v-3.624h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.311h3.587l-.467 3.624h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .593 23.406 0 22.676 0"/>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/eastcoastemployeebenefits/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-soft transition"
          >
            <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.33 3.608 1.304.975.975 1.243 2.242 1.304 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.33 2.633-1.304 3.608-.975.975-2.242 1.243-3.608 1.304-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.33-3.608-1.304-.975-.975-1.243-2.242-1.304-3.608C2.175 15.797 2.163 15.417 2.163 12s.012-3.584.07-4.85c.062-1.366.33-2.633 1.304-3.608C4.512 2.563 5.779 2.295 7.145 2.233 8.411 2.175 8.791 2.163 12 2.163zm0-2.163C8.736 0 8.332.013 7.053.07c-1.623.07-3.08.336-4.243 1.5C1.336 2.92 1.07 4.377 1 6c-.057 1.279-.07 1.683-.07 5.947s.013 4.668.07 5.947c.07 1.623.336 3.08 1.5 4.243 1.163 1.163 2.62 1.43 4.243 1.5 1.279.057 1.683.07 5.947.07s4.668-.013 5.947-.07c1.623-.07 3.08-.336 4.243-1.5 1.163-1.163 1.43-2.62 1.5-4.243.057-1.279.07-1.683.07-5.947s-.013-4.668-.07-5.947c-.07-1.623-.336-3.08-1.5-4.243-1.163-1.163-2.62-1.43-4.243-1.5C15.264.013 14.864 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324A6.162 6.162 0 0 0 12 5.838zm0 10.162a3.999 3.999 0 1 1 0-7.997 3.999 3.999 0 0 1 0 7.997zm6.406-11.845a1.44 1.44 0 1 1 0 2.882 1.44 1.44 0 0 1 0-2.882z"/>
            </svg>
          </a>
        </div>
        <div className="text-sm mt-4 md:mt-0 font-body text-white/70 text-center md:text-right">
          &copy; {new Date().getFullYear()} East Coast Employee Benefits. All rights reserved.
        </div>
      </div>
    </footer>
  );
}