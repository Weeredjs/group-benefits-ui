import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <section className="relative overflow-hidden bg-gradient-to-b from-primary via-soft to-background py-20 px-4">
    {/* Subtle animated wave SVG */}
    <div className="absolute inset-x-0 top-0">
      <svg viewBox="0 0 1440 200" fill="none" className="w-full h-32 animate-pulse-slow" style={{ minWidth: "100%" }}>
        <path
          fill="#479D9C"
          fillOpacity="0.14"
          d="M0,128L80,112C160,96,320,64,480,64C640,64,800,96,960,117.3C1120,139,1280,149,1360,154.7L1440,160V0H1360C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0H0Z"
        ></path>
      </svg>
    </div>
    <div className="relative z-10 max-w-3xl mx-auto text-center">
      <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow">
        Atlantic Canada's Trusted Group Benefits Partner
      </h1>
      <p className="font-body text-lg md:text-xl text-white/90 mb-8">
        Premium, personalized solutions for employers & organizations—delivered with integrity and expertise.
      </p>
      <Link
        to="/quotes"
        className="inline-block px-8 py-3 rounded-2xl bg-accent text-white font-heading font-semibold shadow-soft hover:bg-primary hover:text-soft transition-all"
      >
        Get a Quote
      </Link>
      <p className="mt-6 font-body text-white/80">
        New to group benefits?{" "}
        <Link to="/about" className="underline text-soft hover:text-accent">
          Learn more
        </Link>
      </p>
    </div>
  </section>
);

export default HomePage;