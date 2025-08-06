import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="flex flex-col items-center justify-center text-center py-12 px-4 relative">
    {/* Decorative SVG Wave */}
    <div className="absolute inset-x-0 top-0 z-0">
      <svg viewBox="0 0 1440 320" className="w-full h-32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="#0d47a1" fillOpacity="1" d="M0,160L60,154.7C120,149,240,139,360,138.7C480,139,600,149,720,165.3C840,181,960,203,1080,192C1200,181,1320,139,1380,117.3L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"/>
      </svg>
    </div>
    <div className="relative z-10">
      <h1 className="text-4xl font-extrabold text-blue-900 mb-2">
        Welcome to East Coast Employee Benefits
      </h1>
      <p className="text-lg text-blue-700 mb-6">
        The easiest way to quote, compare, and manage group benefits for Atlantic Canada.
      </p>
      <Link
        to="/quotes"
        className="px-8 py-3 bg-yellow-300 hover:bg-yellow-400 text-blue-900 font-semibold rounded-full shadow transition text-lg"
      >
        Get a Quote
      </Link>
      <p className="mt-6 text-blue-700">
        New to group benefits? <Link to="/about" className="underline text-blue-800 hover:text-blue-900">Learn more</Link>
      </p>
    </div>
  </div>
);

export default HomePage;