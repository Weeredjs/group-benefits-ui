import React, { useState } from "react";
import { useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const signIn = useSignIn();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/auth/jwt/login`, {
        username: email,
        password,
      });
      signIn({
        token: res.data.access_token,
        expiresIn: 60 * 24, // 24 hours
        tokenType: "Bearer",
        authState: { email },
      });
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="Email" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} required placeholder="Password" />
      <button type="submit">Login</button>
      {error && <div>{error}</div>}
    </form>
  );
}
