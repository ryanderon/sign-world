import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useGTMPageView } from "../../hooks/useGTMPageView";

export default function Layout() {
  const { pathname } = useLocation();
  useGTMPageView();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="relative bg-background">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

