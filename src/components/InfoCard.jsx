// components/InfoCard.jsx
import React from "react";

export default function InfoCard({ title, children }) {
  return (
    <div className="bg-card rounded-2xl shadow-soft p-8 mb-6">
      <h2 className="font-heading text-2xl text-primary mb-2">{title}</h2>
      <div className="font-body text-text text-base">{children}</div>
    </div>
  );
}
