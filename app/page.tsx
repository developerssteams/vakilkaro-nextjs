import Navbar from "@/components/Navbar";
import VerifiedServices from "@/components/VerifiedServices";
import LegalRepresentation from "@/components/LegalRepresentation";
import News from "@/components/News";
import Partner from "@/components/Partner";
import Journey from "@/components/Journey";
import Story from "@/components/Story";
import WhyVakilkaro from "@/components/WhyVakilkaro";
import CallToAction from "@/components/CallToAction";
import VakilKaroWay from "@/components/VakilKaroWay";
import ExpertSlider from "@/components/LeadershipSlider";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Faq from "@/components/Faq";
import TawkTo from "@/components/TawkTo";
import "../app/globals.css";
export default function Home() {
  return (
    <>

      <Navbar />
      <VerifiedServices />
      <LegalRepresentation />
      <News />
      <Partner />
      <Journey />
      <Story />
      <WhyVakilkaro />
      <CallToAction />
      <VakilKaroWay />
      <ExpertSlider />
      <Testimonials />
      <ContactSection />
      <Faq />
      <TawkTo />

    </>
  );
}