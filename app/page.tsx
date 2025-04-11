import ContactSection from "@/components/contact";
import FAQsThree from "@/components/faqs-3";
import FeaturesSection from "@/components/features-8";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import IntegrationsSection from "@/components/integrations-5";

export default function Home() {
  return (
   <>
   <HeroSection />
   <IntegrationsSection />
   <FeaturesSection />
   <FAQsThree />
   <ContactSection />
   <FooterSection />
   </>
  );
}
