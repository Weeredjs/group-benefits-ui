import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuthHeader } from "react-auth-kit";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [quotes, setQuotes] = useState([]);
  const authHeader = useAuthHeader();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/quotes/`, {
      headers: { Authorization: authHeader() },
    })
      .then(res => setQuotes(res.data))
      .catch(() => {});
  }, [authHeader]);

  return (
    <div>
      <h2>My Quotes</h2>
      <button onClick={() => navigate("/quote")}>New Quote</button>
      <ul>
        {quotes.map((q: any) => (
          <li key={q.id}>{q.title || "Untitled"} | {q.created_at}</li>
        ))}
      </ul>
    </div>
  );
}
