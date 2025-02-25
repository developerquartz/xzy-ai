import React from "react";
import VideoAds from "./Component/VideoAds/Index";
import Faqs from "./Component/Faqs/Index";
import ClientTestimonial from "./Component/ClientTestimonial/Index";
import ImgWithText from "./Component/ImgWithText/Index";
import WhyChooseUs from "./Component/WhyChooseUs/Index";
import Marketing from "./Component/Marketing/Index";
import HowItWork from "./Component/HowItWork/Index";
import PartnerSec from "./Component/Partner/Index";
import HeroSec from "./Component/HeroSec/Index";
import PlansAndBonus from "./Component/PlansAndBonus/Index";

/**
 * Description:- This is our home page. This is the first page visible to user. It contains all the information about subscription plans, bonus plans, faqs, testimonials, why choose us, how the project works and others.
 * @returns {any}
 */

const Home = () => {
  return (
    <>
      <HeroSec />
      <PartnerSec />
      <HowItWork />
      <Marketing />
      <WhyChooseUs />
      <ImgWithText />
      <ClientTestimonial />
      <PlansAndBonus />
      <Faqs />
      <VideoAds />
    </>
  );
};

export default Home;
