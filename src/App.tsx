import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Products from "./components/Products";
import Clients from "./components/Clients";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative bg-background noise-overlay">
      <Navbar />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="services" className="section-lg">
          <Services />
        </section>
        <section id="products" className="section-lg">
          <Products />
        </section>
        <section id="clients" className="section-lg">
          <Clients />
        </section>
      </main>
      <footer id="contact">
        <Footer />
      </footer>
    </div>
  );
}
