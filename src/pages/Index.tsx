import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductsSection from "@/components/ProductsSection";
import AboutSection from "@/components/AboutSection";
import WholesaleSection from "@/components/WholesaleSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProductsSection />
        <AboutSection />
        <WholesaleSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
