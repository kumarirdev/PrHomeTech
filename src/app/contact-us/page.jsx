import ContactUs from "@/components/ContactUs";
import ContactUsHeroSection from "@/components/ContactUsHeroSection";
import Footer from "@/components/Footer";
import MapImg from "@/components/MapImg";
import Navbar from "@/components/Navbar";

function page() {
    return<>

    <Navbar />
    <ContactUsHeroSection />
    <ContactUs />
    <MapImg/>
    <Footer/>
    </>
}

export default page;