import Hero from "../pages/Hero";
import WelcomeMsg from "../pages/WelcomeMsg";
import Features from "../pages/Features";
import HIW from "../pages/HowItWorks";
import AddedFts from "../pages/AddedFeatures";
import Screenshot from "../pages/Screenshot";
import Achievements from "../pages/Achievements";
import DemoVid from "../pages/DemoVideo";
import Testimonials from "../pages/Testimonials";
import Team from "../pages/Team";
import AppNews from "../pages/AppNews";
import Twitter from "../pages/Twitter";
import PriceTab from "../pages/PricingTable";
import GetInTouch from "../pages/GetInTouch";

const HomeScreen = () => {
  return (
    <div>
      <Hero />
      <WelcomeMsg />
      <Features />
      <HIW />
      <AddedFts />
      <PriceTab />
      <Screenshot />
      <Achievements />
      <DemoVid />
      <Testimonials />
      <Team />
      <AppNews />
      <Twitter />
      <GetInTouch />
    </div>
  );
};

export default HomeScreen;
