import AboutUsFaq from "@/components/AboutUsFaq";
import AboutUsHeroSection from "@/components/AboutUsHeroSection";
import AboutUs from "@/components/AboutUs";
import AboutUsTestimonialSection from "@/components/AboutUsTestimonialSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

function page() {
  return (
    <>
      <Navbar />
      <AboutUsHeroSection />
      <AboutUs />
      <AboutUsTestimonialSection />
      <AboutUsFaq />
      <Footer />
    </>
  );
}
export default page;
