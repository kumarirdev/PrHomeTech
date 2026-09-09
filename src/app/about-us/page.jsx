import Faq from "@/components/Faq";
import AboutUsHeroSection from "@/components/AboutUsHeroSection";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import AnimatedContainer from "@/components/AnimatedContainer";

function page() {
  return (
    <>
      <Navbar />
      <AboutUsHeroSection />
      <AboutUs />
      <Testimonials />
      <Faq />
      <Footer />
    </>
  );
}
export default page;
