"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1>Something went wrong.</h1>

        <p>{error.message}</p>

        <button onClick={reset}>Try Again</button>
      </div>
    </main>
  );
}
