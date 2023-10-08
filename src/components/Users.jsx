import React from "react";
import Avtar1 from "../assets/Image/avt1.png";
import Avtar2 from "../assets/Image/avt2.png";
import Avtar3 from "../assets/Image/avt3.png";
import Avtar4 from "../assets/Image/avt4.png";

// Import Icons
import { BsFillCircleFill } from "react-icons/bs";

const Users = () => {
  return (
    <div
      className="flex flex-col overflow-hidden w-full justify-center items-center space-x-5 space-y-2 lg:flex-row lg:space-y-0 lg:justify-start"
      data-aos="fade-down"
      data-aos-delay="900"
    >
      <div className="flex -space-x-2">
        <div className="w-12 h-12 rounded-full">
          <img src={Avtar1} alt="Avtar1" />
        </div>
        <div className="w-12 h-12 rounded-full">
          <img src={Avtar2} alt="Avtar2" />
        </div>
        <div className="w-12 h-12 rounded-full">
          <img src={Avtar3} alt="Avtar2" />
        </div>
        <div className="w-12 h-12 rounded-full">
          <img src={Avtar4} alt="Avtar2" />
        </div>
      </div>
      <div className="flex items-center space-x-2 font-secondary font-medium">
        <BsFillCircleFill className="text-sm text-green-500 animate-pulse" />
        <div>400K people online</div>
      </div>
    </div>
  );
};

export default Users;
