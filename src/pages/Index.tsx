import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WelcomePopup from "@/components/WelcomePopup";
import ProblemSection from "@/components/ProblemSection";
import AnchorNumberSection from "@/components/AnchorNumberSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ApplicationsSection from "@/components/ApplicationsSection";
import SegmentsSection from "@/components/SegmentsSection";
import CaseSection from "@/components/CaseSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import ContactFormSection from "@/components/ContactFormSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <WelcomePopup />
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <AnchorNumberSection />
      <HowItWorksSection />
      <ApplicationsSection />
      <SegmentsSection />
      <CaseSection />
      <AboutSection />
      <FAQSection />
      <ContactFormSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
