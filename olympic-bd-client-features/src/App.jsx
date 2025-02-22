/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import AboutOverview from "./components/AboutOverview";
import SupportTheNation from "./components/SupportTheNation/SupportTheNation";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";
import RecentNews from "./components/RecentNews";
import Banner from "./components/Banner";
import Exports from "./components/Exports";
import AwardAndAchievement from "./components/AwardAndAchievement";
import ProductSlider from "./components/productSlider/ProductSlider";
import AnnualReports from "./components/annualReports/AnnualReports";
import ProductCategories from "./components/productCategories/ProductCategories";
import ProductCatalog from "./components/ProductCatalog";
import WelcomeSection from "./components/welcomeSection";


const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Banner />
      <ProductSlider />
      <WelcomeSection/>
      <ProductCategories/>
      <ProductCatalog/>
      <AboutOverview />
      <SupportTheNation />
      <AnnualReports />
      <Exports />
      <AwardAndAchievement />
      <RecentNews />
      <Footer />
    </div>
  );
};

export default App;
