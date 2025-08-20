// src/components/Header.jsx
import React from "react";
import { useState, useEffect } from "react";

export default function Header({ message }) {
  const quotes = [
    "Code is like humor. When you have to explain it, it’s bad.",
    "First, solve the problem. Then, write the code.",
    "Experience is the name everyone gives to their mistakes.",
    "Don’t comment bad code — rewrite it."
  ];

  const [quote, setQuote] = useState("");

  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  return (
    <header id="home" className="text-center py-8 bg-gray-100">
      <h1 className="text-3xl font-bold">Marzia Hashimi</h1>
      <p>{message}</p>
      <p className="italic text-gray-600 mt-2">💡 {quote}</p>
    </header>
  );
}
