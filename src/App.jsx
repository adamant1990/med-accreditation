import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Advantages from "./components/Advantages";
import WorkProcess from "./components/WorkProcess";
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./styles/global.css";
import "./styles/animation.css";
import "./styles/header.css";
import "./styles/hero.css";
import "./styles/services.css";
import "./styles/advantages.css";
import "./styles/workprocess.css";
import "./styles/reviews.css";
import "./styles/faq.css";
import "./styles/contact.css";
import "./styles/footer.css";

function App() {
  return (
    <>
      <div id="top" />
      <Header />
      <main>
        <Hero />
        <Services />
        <Advantages />
        <WorkProcess />
        <Reviews />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
