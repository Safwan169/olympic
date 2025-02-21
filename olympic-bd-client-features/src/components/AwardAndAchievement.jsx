/* eslint-disable no-unused-vars */
import React from "react";
import "aos/dist/aos.css";

export default function AwardAndAchievement() {
  // Image sources should be placed in the public folder and accessed via a relative path
  const images = ["/award (1).jpg", "/award (2).jpg"];

  return (
    <section className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Content on the Left */}
        <div className="p-8 text-start space-y-10" data-aos="fade-right">
          <h2 className="text-4xl font-extrabold text-red-800 leading-tight">
            Awards and Achievements
          </h2>
          <p className="text-gray-600 text-lg mt-4 leading-relaxed">
            Olympic is proud to be recognized for its unwavering commitment to
            excellence, transparency, and ethical business practices. We are
            honored to have received the{" "}
            <b>
              Institute of Chartered Secretaries of Bangladesh (ICSB) & Institute of Cost and Management Accountants of Bangladesh (ICMAB)
            </b>
            , reflecting our dedication to upholding the highest standards of
            corporate governance.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our consistent contributions to the nation’s economy have also been
            acknowledged through prestigious awards for excellence in{" "}
            <b>VAT</b> and <b>Tax compliance</b>, reinforcing our role as a
            responsible corporate citizen. These accolades inspire us to
            continue striving for excellence in every aspect of our operations.
          </p>
          <button className="w-full md:w-auto px-10 py-2 font-medium text-white bg-red-600 border-2 border-red-600 rounded-md shadow-md transition-all duration-300 hover:bg-red-700 hover:border-red-700">
            View All
          </button>
        </div>

        {/* Images on the Right */}
        <div className="flex flex-col gap-6" data-aos="fade-left">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Award ${index + 1}`}
              className="w-full hover:scale-105 transition-transform duration-300 rounded-lg shadow-lg"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
