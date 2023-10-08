import React, { useState } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import NavMobile from "./components/NavMobile";
import Experience from "./components/Experience";
import Video from "./components/Video";
import Headsets from "./components/Headsets";
import Testimonial from "./components/Testimonial";
import Explore from "./components/Explore";

const Home = () => {
  const [navMobile, setNavMobile] = useState(false);
  return (
    <>
      <div className="relative before:w-full overflow-hidden before:h-[200px] before:bg-circle before:bg-no-repeat before:absolute before:-top-16 before:left-[600px] before:hidden before:lg:flex">
        <Header setNavMobile={setNavMobile} />
        <Banner />
        {/* mobile nav */}
        <div
          className={`${
            navMobile ? "right-0" : "-right-full"
          } fixed top-0 bottom-0 w-48 transition-all duration-500`}
        >
          <NavMobile setNavMobile={setNavMobile} />
        </div>
      </div>
      <div>
        <Experience />
        <Video />
        <Headsets />
        <Testimonial />
        <Explore />
      </div>
    </>
  );
};

export default Home;
