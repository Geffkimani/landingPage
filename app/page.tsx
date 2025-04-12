import ContactSection from "@/components/contact";
import ContentSection2 from "@/components/content-4";
import ContentSection from "@/components/content-1";
import FAQsThree from "@/components/faqs-3";
import FeaturesSection from "@/components/features-8";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import IntegrationsSection from "@/components/integrations-5";
import Pricing from "@/components/pricing";

export default function Home() {
  return (
   <>
   <HeroSection />
   <IntegrationsSection />
   <ContentSection />
   <ContentSection2 />
   <FeaturesSection />
   <Pricing />
   <FAQsThree />
   <ContactSection />
   <FooterSection />
   </>
  );
}
