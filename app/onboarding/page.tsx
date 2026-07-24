"use client";

import { useState } from "react";

export default function OnboardingPage() {
  const [name, setName] = useState("");

  function continueNext() {
    if (!name.trim()) {
      alert("Please enter your name.");
      return;
    }

    localStorage.setItem("bread_name", name.trim());

    window.location.href = "/onboarding/needs";
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(135deg,#fdf8ef 0%,#f7f0e3 45%,#efe3cc 100%)",
        padding: "40px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "700px",
          background: "rgba(255,255,255,.72)",
          backdropFilter: "blur(22px)",
          borderRadius: "32px",
          padding: "64px",
          boxShadow: "0 30px 80px rgba(71,50,20,.15)",
          border: "1px solid rgba(255,255,255,.6)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: "70px",
            marginBottom: "20px",
          }}
        >
          🍞
        </div>

        <h1
          style={{
            fontSize: "3.5rem",
            fontWeight: 800,
            lineHeight: 1.15,
            marginBottom: "18px",
            color: "#2d2115",
          }}
        >
          Welcome to
          <br />
          The Shepherd's Table
        </h1>

        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: 1.9,
            color: "#6c5640",
            maxWidth: "560px",
            margin: "0 auto 40px",
            fontStyle: "italic",
          }}
        >
          “Man shall not live by bread alone,
          <br />
          but by every word that comes from the mouth of God.”
          <br />
          <strong>— Matthew 4:4</strong>
        </p>

        <div
          style={{
            textAlign: "left",
            marginBottom: "12px",
            fontWeight: 700,
            color: "#4b3826",
            fontSize: "1.05rem",
          }}
        >
          What's your name?
        </div>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name..."
          onKeyDown={(e) => {
            if (e.key === "Enter") continueNext();
          }}
          style={{
            width: "100%",
            padding: "18px 22px",
            borderRadius: "18px",
            border: "2px solid #e4d2b6",
            fontSize: "18px",
            outline: "none",
            background: "#fffdf9",
            marginBottom: "30px",
          }}
        />

        <button
          type="button"
          onClick={continueNext}
          style={{
            width: "100%",
            padding: "18px",
            borderRadius: "18px",
            border: "none",
            cursor: "pointer",
            background: "linear-gradient(135deg,#b88433,#e5c06b)",
            color: "white",
            fontWeight: 700,
            fontSize: "18px",
            boxShadow: "0 15px 35px rgba(184,132,51,.35)",
          }}
        >
          Continue →
        </button>
      </div>
    </main>
  );
}
