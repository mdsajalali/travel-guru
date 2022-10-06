import React from "react";
import Packages from "../Packages/Packages";
import Banner from "../Pages/Banner/Banner";
import Footer from "../Pages/Footer/Footer";
import Gallery from "../Pages/Gallery/Gallery";

const Home = () => {
  return (
    <div>
   
      <Banner />
      <Packages />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;
