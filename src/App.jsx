import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="home">
        <Navbar />
        <Hero />
      </section>
      <section id="about" className="services-section">
        {/* <Parallax type="services" /> */}
        <Services />
      </section>
      <section id="portfolio" className="portfolio-section">
        <Parallax type="services" />
        <Portfolio />
      </section>
      <section id="contact">
        <Contact />
      </section>
      {/* Framer Motion Crash Course */}
      {/* <Test/>
    <Test/> */}
    </div>
  );
};

export default App;
