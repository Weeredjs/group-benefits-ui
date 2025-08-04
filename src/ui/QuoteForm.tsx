import React, { useState } from "react";
import axios from "axios";
import { useAuthHeader } from "react-auth-kit";
import { useNavigate } from "react-router-dom";

export default function QuoteForm() {
  const [title, setTitle] = useState("");
  const [data, setData] = useState({});
  const authHeader = useAuthHeader();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post(`${import.meta.env.VITE_API_URL}/quotes/`, {
      title,
      data,
    }, {
      headers: { Authorization: authHeader() }
    });
    navigate("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>New Quote</h2>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Quote Title" />
      {/* Add census/plan design form fields here */}
      <button type="submit">Save Quote</button>
    </form>
  );
}
