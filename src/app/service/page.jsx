import AllService from "@/components/AllService";
import AnimatedContainer from "@/components/AnimatedContainer";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ServiceHeroSection from "@/components/ServiceHeroSection";
import ServiceWarranty from "@/components/ServiceWarranty";
import Testimonials from "@/components/Testimonials";

function page() {
    return<>

    <Navbar />
    <ServiceHeroSection />
    
    <AnimatedContainer>
      <AllService />
    </AnimatedContainer>
    
    <AnimatedContainer>
      <ServiceWarranty />
    </AnimatedContainer>

    <AnimatedContainer>
      <Testimonials />
    </AnimatedContainer>

    <AnimatedContainer>
    <Faq />
    </AnimatedContainer>
    
    <Footer />
    
    </>
}

export default page;