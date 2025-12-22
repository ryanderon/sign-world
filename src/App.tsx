import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
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
