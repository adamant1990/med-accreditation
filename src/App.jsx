import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Advantages from "./components/Advantages";
import WorkProcess from "./components/WorkProcess";
import Reviews from "./components/Reviews";
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


function App() {

  return (
    <>
      <Header />

      <main>

        <Hero />

        <Services />

        <Advantages />

        <WorkProcess />

        <Reviews />

        <Contact />

      </main>

      <Footer />
    </>
  );

}


export default App;