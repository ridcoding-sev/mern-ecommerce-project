import React, { useState, useEffect } from "react";
import Hero  from '../components/Hero'
import About from "../components/About";
import LatestCollection from "../components/LatestCollection";
import BestSeller from "../components/BestSeller";
import OurPolicy from "../components/OurPlicy";
const Home = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/>
    </div>
  )
}

export default Home