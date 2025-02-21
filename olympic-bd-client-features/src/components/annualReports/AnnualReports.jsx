/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Typewriter } from "react-simple-typewriter"; // Import the Typewriter effect
import "./style.css"; // Import external CSS
import img1 from "../../../public/annual (4).png";
import img2 from "../../../public/annual (3).png";
import img3 from "../../../public/annual (2).png";
import img4 from "../../../public/annual (1).png";

export default function AnnualReports() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <section className="container mx-auto px-6 pt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left Side - Text */}
        <div className="p-8 space-y-6" data-aos="fade-left">
          {/* Typing Effect */}
          <h2 className="text-4xl font-extrabold text-red-800 leading-tight">
            <Typewriter
              words={["Annual Reports"]} // Text to type
              loop={false} // Runs only once
              cursor
              cursorStyle="_"
              typeSpeed={100} // Typing speed (milliseconds)
              deleteSpeed={50} // Deleting speed
              delaySpeed={1000} // Delay before typing starts
            />
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Stay updated with our latest performance insights, strategies, and
            key milestones. Our annual reports offer a comprehensive view of our
            progress and future vision.
          </p>
          <button className="px-6 py-3 font-medium text-white bg-red-600 border-2 border-red-600 rounded-md shadow-md transition-all duration-300 relative overflow-hidden group hover:bg-red-700">
            <span className="absolute inset-0 w-full h-full bg-red-800 transform scale-x-0 group-hover:scale-x-100 transition-all duration-500 origin-left"></span>
            <span className="relative z-10">Learn More</span>
          </button>
        </div>

        {/* Right Side - Animated Images */}
        <div className="relative flex justify-center" data-aos="fade-up">
          <div className="animated-container">
            <img src={img1} alt="Annual Report 1" />
            <img src={img2} alt="Annual Report 2" />
            <img src={img3} alt="Annual Report 3" />
            <img src={img4} alt="Annual Report 4" />
          </div>
        </div>
      </div>
    </section>
  );
}
