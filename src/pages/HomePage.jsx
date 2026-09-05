import HomeHero from "../components/HomeHero.jsx";
import Navbar from "../components/Navbar.jsx";
import HomeOurService from "../components/HomeOurService.jsx";
import HomeBrandsWeService from "@/components/HomeBrandsWeService.jsx";
import Faq from "../components/Faq.jsx";
import Footer from "@/components/Footer.jsx";
import HomeProcessSection from "@/components/HomeProcessSection.jsx";
import Testimonials from "@/components/Testimonials.jsx";

function HomePage() {
  return (
    <>
      <Navbar />
      <HomeHero />
      <HomeOurService />
      <HomeBrandsWeService />
      <HomeProcessSection />
      <Testimonials />
      <Faq />
      <Footer />
    </>
  );
}

export default HomePage;
