import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import QuoteForm from "../components/QuoteForm";
import { useIsAuthenticated, useSignOut } from "react-auth-kit";

const ProfilePage = () => (
  <div className="p-8 text-center">
    <h2 className="text-2xl font-bold mb-4">My Profile</h2>
    <p>Profile management coming soon!</p>
  </div>
);

const QuotesDashboard = () => (
  <div className="p-8 text-center">
    <h2 className="text-2xl font-bold mb-4">My Quotes</h2>
    <p>Quotes dashboard coming soon!</p>
  </div>
);

const AboutPage = () => (
  <div className="p-8 text-center">
    <h2 className="text-2xl font-bold mb-4">About Us</h2>
    <p>We help Atlantic Canada employers deliver world-class group benefits with ease.</p>
  </div>
);

const SupportPage = () => (
  <div className="p-8 text-center">
    <h2 className="text-2xl font-bold mb-4">Support</h2>
    <p>
      Need help? Contact us at{" "}
      <a
        href="mailto:support@eastcoastemployeebenefits.com"
        className="text-blue-700 underline"
      >
        support@eastcoastemployeebenefits.com
      </a>
    </p>
  </div>
);

// This must be used inside Router, so the hooks are available!
const RequireAuth = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = useIsAuthenticated();
  return isAuthenticated() ? <>{children}</> : <Navigate to="/login" replace />;
};

const App = () => {
  const isAuthenticated = useIsAuthenticated();
  const signOut = useSignOut();

  return (
    <Router>
      <NavBar loggedIn={isAuthenticated()} onLogout={signOut} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<RequireAuth><ProfilePage /></RequireAuth>} />
        <Route path="/quotes" element={<RequireAuth><QuotesDashboard /></RequireAuth>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/quote/new" element={<RequireAuth><QuoteForm /></RequireAuth>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
