import React from "react";

import TestimonialSlider from "./TestimonialSlider";

const Testimonial = () => {
  return (
    <section className="mb-64 lg:mb-48" id="features">
      <div className="container mx-auto">
        <div className="bg-purple-400/10 max-h-[400px] p-12 rounded-lg">
          <div className="text-center">
            <h2
              className="text-3xl font-bold mb-6"
              data-aos="fade-up"
              data-aos-delay="1600"
              data-aos-offest="300"
            >
              What our clients say
            </h2>
            <p
              className="max-w-2xl mx-auto mb-12 lg:mb-24"
              data-aos="fade-up"
              data-aos-delay="1800"
              data-aos-offest="300"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              ex cupiditate aspernatur doloribus eligendi rem voluptate
              explicabo labore enim officia?
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="2000" data-aos-offest="300">
            <TestimonialSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
