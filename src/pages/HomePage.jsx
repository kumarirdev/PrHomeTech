import HomeHero from "../components/HomeHero.jsx";
import Navbar from "../components/Navbar.jsx";
import HomeOurService from "../components/HomeOurService.jsx";
import HomeBrandsWeService from "@/components/HomeBrandsWeService.jsx";
import Faq from "../components/Faq.jsx";
import Footer from "@/components/Footer.jsx";
import HomeProcessSection from "@/components/HomeProcessSection.jsx";
import Testimonials from "@/components/Testimonials.jsx";
import AnimatedContainer from "@/components/AnimatedContainer.jsx";

function HomePage() {
  return (
    <>
      <Navbar />
      <HomeHero />

      <AnimatedContainer>
        <HomeOurService />
      </AnimatedContainer>
      <AnimatedContainer>
        <HomeBrandsWeService />
      </AnimatedContainer>
      <AnimatedContainer>
        <HomeProcessSection />
      </AnimatedContainer>
      <AnimatedContainer>
        <Testimonials />
      </AnimatedContainer>
      <AnimatedContainer>
      <Faq />
      </AnimatedContainer>
      <Footer />
    </>
  );
}

export default HomePage;
