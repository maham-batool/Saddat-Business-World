import NavBar from './components/NavBar/page';
import DotNavigation from './components/DotNavigation/page';
import Home from './components/Home/page';
import Services from './components/Services/page';
import PortfolioIntroPage from './components/Portfolio/page';
// import PortfolioPage from './components/Portfolio/page';
import About from './components/About/page';
// import Contact from './components/Contact/page';
import ContactUs from './components/ContactUs/page';
import Footer from './components/Footer/page';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#1A3C36] text-white">
      <NavBar />
      <DotNavigation />
      <section id="home">
        <Home />
      </section>
        <section id="portfolio">
        <PortfolioIntroPage />
      </section>
      {/* <section id="portfolio">
        <PortfolioPage />
      </section> */}
      <section id="services">
        <Services />
      </section>
      <section id="about">
        <About />
      </section>
      {/* <section id="contact">
        <Contact />
      </section> */}
      <section id="contactus">
        <ContactUs />
      </section>
      <Footer />
    </div>
  );
}
