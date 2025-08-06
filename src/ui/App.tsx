import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import QuoteForm from "./QuoteForm";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import Dashboard from "./Dashboard"; // Optional, or reuse QuoteForm as dashboard

const App = () => (
  <Router>
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl shadow-2xl rounded-2xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-indigo-700">
            Group Benefits Quoting
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Routes>
            <Route path="/" element={<QuoteForm />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            {/* Optionally add a catch-all redirect: */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </CardContent>
      </Card>
    </div>
  </Router>
);

export default App;