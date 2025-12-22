import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import About from "./components/About";
import Services from "./components/Services";
import Products from "./components/Products";
import Clients from "./components/Clients";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="hero">
          <Hero />
        </section>
        {/* <section id="about" className="section-lg bg-background">
          <About />
        </section> */}
        <section id="services" className="section-lg bg-surface-alt">
          <Services />
        </section>
        <section id="products" className="section-lg bg-background">
          <Products />
        </section>
        <section id="clients" className="section-lg bg-surface-alt">
          <Clients />
        </section>
      </main>
      <footer id="contact">
        <Footer />
      </footer>
    </>
  );
}
