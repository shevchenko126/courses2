import type { NextPage } from "next";
import Header from "../components/Home/Header";
import HeaderNavigate from "../components/Home/HeaderNavigate";
import BuySell from "../components/Home/BuySell";
import FreshRecommendedAds from "../components/Home/FreshRecommendedAds";
import TopCategory from "../components/Home/TopCategory";
import FunFact from "../components/Home/FunFact";
import MobileApp from "../components/Home/MobileApp";

const Home: NextPage = () => {
  return (
    <>
      <BuySell />
      <FreshRecommendedAds />
      <TopCategory />
      <FunFact />
      <MobileApp />
    </>
  );
};

export default Home;
