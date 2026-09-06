import AboutUsFaq from "@/components/AboutUsFaq";
import AboutUsHeroSection from "@/components/AboutUsHeroSection";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";

function page() {
  return (
    <>
      <Navbar />
      <AboutUsHeroSection />
      <AboutUs />
      <Testimonials />
      <AboutUsFaq />
      <Footer />
    </>
  );
}
export default page;
