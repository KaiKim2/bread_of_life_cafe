"use client";

import { useEffect, useState } from "react";
import { verses } from "@/data/verses";

type Meal = {
  reference: string;
  scripture: string;
  reflection: string;
  challenge: string;
  prayer?: string;
};

export default function MenuPage() {
  const [loaded, setLoaded] = useState(false);
  const [name, setName] = useState("Friend");
  const [need, setNeed] = useState("");
  const [meal, setMeal] = useState<Meal | null>(null);

  useEffect(() => {
    const savedName =
      localStorage.getItem("bread_name") || "Friend";

    const savedNeed =
      localStorage.getItem("bread_need") || "Need Peace";

    setName(savedName);
    setNeed(savedNeed);

    const choices =
      verses[savedNeed as keyof typeof verses] || [];

    if (choices.length > 0) {
      const random =
        choices[Math.floor(Math.random() * choices.length)];

      setMeal(random);
    }

    setLoaded(true);
  }, []);

  function serveAnotherMeal() {
    if (!need) return;

    const choices =
      verses[need as keyof typeof verses] || [];

    if (choices.length === 0) return;

    const random =
      choices[Math.floor(Math.random() * choices.length)];

    setMeal(random);
  }

  if (!loaded) return null;

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(135deg,#fdf9f2 0%,#f6eddc 100%)",
        padding: "40px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "900px",
          background: "#ffffff",
          borderRadius: "30px",
          padding: "60px",
          boxShadow: "0 25px 80px rgba(0,0,0,.08)",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "50px",
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
              fontSize: "3rem",
              color: "#2d2115",
              marginBottom: "12px",
            }}
          >
            The Shepherd's Table
          </h1>

          <p
            style={{
              fontSize: "1.15rem",
              color: "#6b5641",
            }}
          >
            Welcome back, <strong>{name}</strong>.
          </p>

          <div
            style={{
              marginTop: "35px",
              color: "#9b7b56",
              textTransform: "uppercase",
              letterSpacing: "2px",
              fontWeight: 700,
            }}
          >
            Today's Meal
          </div>

          <h2
            style={{
              marginTop: "12px",
              fontSize: "2rem",
              color: "#b88433",
            }}
          >
            {need}
          </h2>
        </div>

        {meal ? (
          <>
            <div
              style={{
                textAlign: "center",
                marginBottom: "45px",
              }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  color: "#3f2d1d",
                  marginBottom: "20px",
                }}
              >
                {meal.reference}
              </h3>

              <blockquote
                style={{
                  fontSize: "1.25rem",
                  lineHeight: 1.9,
                  fontStyle: "italic",
                  color: "#56412f",
                }}
              >
                "{meal.scripture}"
              </blockquote>
            </div>

            <div
              style={{
                borderTop: "1px solid #eee",
                paddingTop: "35px",
              }}
            >
              <h3
                style={{
                  color: "#b88433",
                  marginBottom: "12px",
                }}
              >
                💭 Reflection
              </h3>

              <p
                style={{
                  color: "#4b3826",
                  lineHeight: 1.9,
                  marginBottom: "35px",
                }}
              >
                {meal.reflection}
              </p>

              {meal.prayer && (
                <>
                  <h3
                    style={{
                      color: "#b88433",
                      marginBottom: "12px",
                    }}
                  >
                    🙏 Prayer
                  </h3>

                  <p
                    style={{
                      color: "#4b3826",
                      lineHeight: 1.9,
                      fontStyle: "italic",
                      marginBottom: "35px",
                    }}
                  >
                    {meal.prayer}
                  </p>
                </>
              )}

              <h3
                style={{
                  color: "#b88433",
                  marginBottom: "12px",
                }}
              >
                🎯 Today's Challenge
              </h3>

              <p
                style={{
                  color: "#4b3826",
                  lineHeight: 1.9,
                }}
              >
                {meal.challenge}
              </p>
            </div>
          </>
        ) : (
          <div
            style={{
              textAlign: "center",
              color: "#777",
              marginBottom: "40px",
            }}
          >
            No verses have been added for this category yet.
          </div>
        )}

        <button
          onClick={serveAnotherMeal}
          style={{
            width: "100%",
            marginTop: "50px",
            padding: "20px",
            border: "none",
            borderRadius: "18px",
            cursor: "pointer",
            background:
              "linear-gradient(135deg,#b88433,#e5c06b)",
            color: "white",
            fontSize: "18px",
            fontWeight: 700,
          }}
        >
          🍞 Serve Another Meal
        </button>
      </div>
    </main>
  );
}
