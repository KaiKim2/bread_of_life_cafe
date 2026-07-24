import Link from "next/link";

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        position: "relative",
        padding: "2rem",
      }}
    >
      <div style={{textAlign:"center"}}>
        <h1 style={{fontSize:"4rem"}}>
          🍞 Bread
        </h1>

        <p>
          Welcome to Bread — a restaurant where every meal is God's Word.
        </p>
      </div>


      <Link
        href="/onboarding"
        style={{
          position:"absolute",
          right:"40px",
          bottom:"40px",
          width:"60px",
          height:"60px",
          borderRadius:"50%",
          display:"grid",
          placeItems:"center",
          background:"#d99132",
          color:"white",
          fontSize:"2rem",
        }}
      >
        →
      </Link>
    </main>
  );
}
