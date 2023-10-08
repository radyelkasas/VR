import React from "react";

// import image
import Img1 from "../assets/Image/exp-img1.png";
import Img2 from "../assets/Image/exp-img2.png";

const Experience = () => {
  return (
    <section className="mb-12 lg:mb-24" id="company">
      <div className="container mx-auto">
        <div className="flex flex-col min-h-[480px] lg:space-x-20 lg:flex-row">
          <div className="flex-1 flex space-x-6 items-center lg:space-x-12">
            <div
              className="self-start"
              data-aos="fade-down"
              data-aos-offest="400"
            >
              <img src={Img1} alt="exp" />
            </div>
            <div className="self-end" data-aos="fade-up">
              <img src={Img2} alt="exp" />
            </div>
          </div>
          <div
            className="flex-1 flex flex-col items-center justify-center mt-6 lg:mt-0"
            data-aos="fade-left"
            data-aos-offest="400"
          >
            <h2 className="text-3xl font-bold mb-6">
              New Exprience In Playing Games
            </h2>
            <p className="font-secondary mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              excepturi consequuntur obcaecati, exercitationem harum doloremque
              rem cupiditate ut fugiat tempore.
            </p>
            <button className="btn">Get it now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
