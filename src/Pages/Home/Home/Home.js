import React from "react";
import useTitle from "../../../hooks/useTitle";
import Advertisement from "../Advertisement/Advertisement";
import Categories from "../Categories/Categories";

import ExploreCategory from "../ExploreCategory/ExploreCategory";
import Logo from "../Logo/Logo";
import SignIn from "../SignIn/SignIn";
import Banner from "./../Banner/Banner";

const Home = () => {
  useTitle("Home-page");
  return (
    <div>
      <Banner></Banner>
      <Logo></Logo>
      <Advertisement></Advertisement>
      <Categories></Categories>
      <ExploreCategory></ExploreCategory>
      <SignIn></SignIn>
    </div>
  );
};

export default Home;
