import React from "react";
import Banner from "./Banner";
import Topsellers from "./Topsellers";
import Recommeded from "./Recommeded";
import New from "./New"

const Home = () => {
  return (
    <>
      <div>
        <Banner />
        <Topsellers />
        <Recommeded/>
        <New/>
       
      </div>
    </>
  );
};

export default Home;
