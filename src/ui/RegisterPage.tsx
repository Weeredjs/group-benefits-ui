import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/auth/register`, {
        email,
        password,
      });
      navigate("/login");
    } catch (err) {
      setError("Registration failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="Email" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} required placeholder="Password" />
      <button type="submit">Register</button>
      {error && <div>{error}</div>}
    </form>
  );
}
