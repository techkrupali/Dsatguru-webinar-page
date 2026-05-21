import "./index.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import PainPointSection from "./components/PainPointSection";
import WhyUsSection from "./components/WhyUsSection";
import StudentResults from "./components/StudentResults";
import FeaturesSection from "./components/FeaturesSection";
import SuccessStoriesSection from "./components/SuccessStoriesSection";
import BeforeAfterSection from "./components/BeforeAfterSection";

import ParentTrust from "./components/ParentTrust";
import UrgencySection from "./components/UrgencySection";
import FAQSection from "./components/FAQSection";
import FinalCTA from "./components/FinalCTA";


export default function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <StudentResults />
      <PainPointSection />
      <FeaturesSection />
      <SuccessStoriesSection />
      <BeforeAfterSection />
      <WhyUsSection />
      <ParentTrust />
      <UrgencySection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
