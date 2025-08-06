// src/components/NavBar.tsx
import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ loggedIn, onLogout }) => (
  <nav className="bg-gradient-to-r from-blue-900 to-blue-400 shadow-lg py-4 px-8 flex items-center justify-between">
    <div className="flex items-center">
      {/* Replace with your logo */}
      <img src="/eceb-logo.png" alt="East Coast Employee Benefits" className="h-10 w-auto mr-4" />
      <span className="font-bold text-white text-xl tracking-wide">East Coast Employee Benefits</span>
    </div>
    <div className="flex gap-6 items-center">
      <Link to="/" className="text-white hover:text-yellow-200 font-medium">Home</Link>
      <Link to="/quotes" className="text-white hover:text-yellow-200 font-medium">My Quotes</Link>
      <Link to="/profile" className="text-white hover:text-yellow-200 font-medium">Profile</Link>
      <Link to="/about" className="text-white hover:text-yellow-200 font-medium">About</Link>
      <Link to="/support" className="text-white hover:text-yellow-200 font-medium">Support</Link>
      {loggedIn ? (
        <button onClick={onLogout} className="ml-4 px-4 py-2 bg-yellow-300 rounded-xl font-bold text-blue-900 hover:bg-yellow-400 transition">Logout</button>
      ) : (
        <>
          <Link to="/login" className="ml-4 px-4 py-2 bg-white rounded-xl font-bold text-blue-900 hover:bg-blue-100 transition">Login</Link>
          <Link to="/register" className="ml-2 px-4 py-2 border-2 border-white rounded-xl font-bold text-white hover:bg-white hover:text-blue-900 transition">Register</Link>
        </>
      )}
    </div>
  </nav>
);

export default NavBar;