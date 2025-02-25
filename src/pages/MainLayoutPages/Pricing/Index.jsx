import React from "react";
import VideoAds from "./Component/VideoAds/Index";
import ClientTestimonial from "./Component/ClientTestimonial/Index";
import WhyChooseUs from "./Component/WhyChooseUs/Index";
import PlansAndBonus from "../Home/Component/PlansAndBonus/Index";
import Faqs from "../Home/Component/Faqs/Index";

const PricingPage = () => {
  return (
    <>
      <PlansAndBonus />
      <WhyChooseUs />
      {/* <ClientTestimonial /> */}
      <Faqs />
      <VideoAds />
    </>
  );
};

export default PricingPage;
