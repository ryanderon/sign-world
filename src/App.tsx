import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ImageMarquee from "./components/ImageMarquee";
import Products from "./components/Products";
import Clients from "./components/Clients";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative bg-background">
      <Navbar />
      <main>
        <Hero />
        <section id="services">
          <Services />
        </section>
        <section id="portfolio">
          <ImageMarquee />
        </section>
        <section id="products">
          <Products />
        </section>
        <section id="clients">
          <Clients />
        </section>
      </main>
      <Footer />
    </div>
  );
}


