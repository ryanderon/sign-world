import Hero from "../components/Hero";
import Services from "../components/Services";
import MoreServices from "../components/MoreServices";
import ImageMarquee from "../components/ImageMarquee";
import Products from "../components/Products";
import Clients from "../components/Clients";

export default function Home() {
  return (
    <>
      <Hero />
      <section id="services">
        <Services />
      </section>
      <section id="more-services">
        <MoreServices />
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
    </>
  );
}
