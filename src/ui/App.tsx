import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProfilePage from "../components/ProfilePage";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import QuoteForm from "../components/QuoteForm";
import { useIsAuthenticated, useSignOut } from "react-auth-kit";

// Simple pages (feel free to move these to their own files later)
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

// Route guard for protected pages
const RequireAuth = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = useIsAuthenticated();
  return isAuthenticated() ? <>{children}</> : <Navigate to="/login" replace />;
};

function App() {
  // You can still access auth state if needed (for example, to show "Logout" in header)
  const isAuthenticated = useIsAuthenticated();
  const signOut = useSignOut();

  return (
    <Router>
      <Header />
      <main className="min-h-[80vh] bg-background">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<RequireAuth><ProfilePage /></RequireAuth>} />
          <Route path="/quotes" element={<RequireAuth><QuotesDashboard /></RequireAuth>} />
          <Route path="/quote/new" element={<RequireAuth><QuoteForm /></RequireAuth>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;