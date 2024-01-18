import React from "react";
import Banner from "./componet/banner";
import "../../common/style/header.css";
import About from "./componet/about";
import Card from "./componet/card";
import Choose from "./componet/y_choose";

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Card />
      <Choose />
    </>
  );
};
export default Home;
