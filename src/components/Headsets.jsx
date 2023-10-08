import React from "react";

import Headsets1 from "../assets/Image/headset-1.png";
import Headsets2 from "../assets/Image/headset-2.png";
import Headsets3 from "../assets/Image/headset-3.png";
import Headsets4 from "../assets/Image/headset-4.png";

const Headsets = () => {
  return (
    <section className="py-12 lg:py-24">
      <div className="container mx-auto">
        <h2
          className="text-3xl font-bold mb-6"
          data-aos="fade-down"
          data-aos-offest="300"
        >
          Mixed Reality Headsets
        </h2>
        <div className="grid gap-y-4 lg:grid-cols-2 lg:gap-9">
          <div
            className="relative"
            data-aos="zoom-in"
            data-aos-delay="1000"
            data-aos-offest="300"
          >
            <img src={Headsets1} alt="Headsets1" />
            <div className=" absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6">
              <h4 className="font-semibold text-xl mb-2">Metaverse</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                aliquid unde illum labore? Eveniet, dolorem?
              </p>
            </div>
          </div>
          <div
            className="relative"
            data-aos="zoom-in"
            data-aos-delay="1300"
            data-aos-offest="300"
          >
            <img src={Headsets2} alt="Headsets1" />
            <div className=" absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6">
              <h4 className="font-semibold text-xl mb-2">AIot</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                aliquid unde illum labore? Eveniet, dolorem?
              </p>
            </div>
          </div>
          <div
            className="relative"
            data-aos="zoom-in"
            data-aos-delay="1600"
            data-aos-offest="300"
          >
            <img src={Headsets3} alt="Headsets1" />
            <div className=" absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6">
              <h4 className="font-semibold text-xl mb-2">HoloLens</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                aliquid unde illum labore? Eveniet, dolorem?
              </p>
            </div>
          </div>
          <div
            className="relative"
            data-aos="zoom-in"
            data-aos-delay="1900"
            data-aos-offest="300"
          >
            <img src={Headsets4} alt="Headsets1" />
            <div className=" absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6">
              <h4 className="font-semibold text-xl mb-2">TPCASTT</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                aliquid unde illum labore? Eveniet, dolorem?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Headsets;
