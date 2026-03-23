import { Outlet } from "react-router-dom";
import { Navigation } from "../components/Nav";
import { Footer } from "../components/Footer";

export function MainLayout() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        marginTop: "0",
      }}
    >
      <header
        style={{
          padding: "0 20px",
        }}
      >
        <Navigation />
      </header>
      <main
        style={{ flex: 1, padding: "40px 20px", backgroundColor: "#f5f5f5" }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Outlet />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
