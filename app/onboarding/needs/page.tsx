"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const needs = [
  "Hungry for Hope",
  "Need Peace",
  "Feeling Anxious",
  "Feeling Lonely",
  "Need Strength",
  "Need Wisdom",
  "Need Forgiveness",
  "Need Courage",
  "Need Patience",
  "Feeling Angry",
  "Feeling Afraid",
  "Feeling Broken",
  "Need Joy",
  "Need Love",
  "Need Rest",
  "Need Direction",
  "Thankfulness",
  "Repentance",
  "Temptation",
  "Spiritual Warfare",
  "Healing",
  "Waiting on God",
];

export default function NeedsPage() {
  const router = useRouter();

  const [selected, setSelected] = useState("");
  const [name, setName] = useState("Friend");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("bread_name");

    if (stored && stored.trim()) {
      setName(stored);
    }

    setLoaded(true);
  }, []);

  function continueNext() {
    if (!selected) {
      alert("Choose what your soul needs today.");
      return;
    }

    localStorage.setItem("bread_need", selected);

    window.location.href = "/menu";
  }

  if (!loaded) {
    return null;
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#fdf9f2 0%,#f7f0e4 55%,#eee0c7 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "900px",
          background: "rgba(255,255,255,.75)",
          backdropFilter: "blur(24px)",
          borderRadius: "36px",
          padding: "60px",
          boxShadow: "0 35px 90px rgba(50,35,15,.15)",
          border: "1px solid rgba(255,255,255,.65)",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "45px",
          }}
        >
          <div
            style={{
              fontSize: "60px",
              marginBottom: "18px",
            }}
          >
            🍽
          </div>

          <h1
            style={{
              fontSize: "3rem",
              color: "#2d2115",
              marginBottom: "12px",
            }}
          >
            Welcome, {name}.
          </h1>

          <p
            style={{
              fontSize: "1.2rem",
              color: "#6b5641",
            }}
          >
            Every meal begins with honesty.
            <br />
            What does your soul need today?
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            justifyItems: "center",
            gap: "18px",
            width: "100%",
            maxWidth: "420px",
            margin: "0 auto 45px",
          }}
        >
          {needs.map((need) => (
            <button
              key={need}
              onClick={() => setSelected(need)}
              style={{
                width: "100%",
                maxWidth: "420px",
                padding: "20px",
                borderRadius: "20px",
                cursor: "pointer",
                border:
                  selected === need
                    ? "2px solid #b88433"
                    : "2px solid #ead8bc",
                background:
                  selected === need
                    ? "linear-gradient(135deg,#c08a36,#e6c06c)"
                    : "#fffdfa",
                color: selected === need ? "white" : "#463321",
                fontSize: "17px",
                fontWeight: 600,
                transition: "all .2s ease",
              }}
            >
              {need}
            </button>
          ))}
        </div>

        <button
          onClick={continueNext}
          style={{
            width: "100%",
            padding: "20px",
            borderRadius: "20px",
            border: "none",
            cursor: "pointer",
            background: "linear-gradient(135deg,#b88433,#e5c06b)",
            color: "white",
            fontSize: "19px",
            fontWeight: 700,
          }}
        >
          🍞 Serve My Bread →
        </button>
      </div>
    </main>
  );
}
