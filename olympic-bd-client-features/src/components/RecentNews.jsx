/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const newsData = [
  {
    img: "/updateNews (1).png",
    title: "Olympic Industries comes first in the chase after foreign funds in 2023",
    description: "A significant rise in foreign investments has propelled Olympic Industries into a strong financial position.",
    date: "Jan 30, 2023",
  },
  {
    img: "/updateNews (2).png",
    title: "Highest VAT depositor nine firms honoured",
    description: "Recognizing excellence in compliance, these firms lead in tax contributions.",
    date: "Jan 25, 2023",
  },
  {
    img: "/updateNews (3).png",
    title: "Olympic invests Tk360cr in six years for business diversification",
    description: "The leading biscuit manufacturer expands into new markets with a bold investment strategy.",
    date: "Jan 24, 2023",
  },
  {
    img: "/updateNews (4).png",
    title: "Olympic Industries to buy 54 plots in Purbachal",
    description: "A strategic move to expand assets and secure prime locations for future development.",
    date: "Jan 20, 2023",
  },
];

const RecentNews = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="w-full p-6 text-gray-900 bg-gray-50">
      {/* Title Section */}
      <h2
        className="text-4xl font-extrabold text-center border-b-4 border-gray-600 pb-4 mb-6 uppercase tracking-wide"
        data-aos="fade-up"
      >
        Recent News
      </h2>

      {/* News Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 hover:cursor-pointer">
        {newsData.map((news, index) => (
          <div
            key={index}
            className="relative rounded-xl shadow-xl overflow-hidden border border-gray-300 bg-white group transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-2xl"
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent to-gray-900 opacity-0 group-hover:opacity-90 transition-opacity duration-500 ease-out"></div>

            {/* Image Section */}
            <img
              src={news.img}
              alt="News"
              className="w-full h-48 object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />

            {/* Text Content */}
            <div className="p-5 relative transition-all duration-500 ease-out">
              <h3
                className="text-lg font-semibold border-b pb-2 text-gray-800 transition-colors duration-500 ease-out group-hover:text-white"
                data-aos="fade-right"
              >
                {news.title}
              </h3>
              <p
                className="text-sm text-gray-600 mt-3 leading-relaxed transition-colors duration-500 ease-out group-hover:text-gray-300"
                data-aos="fade-left"
              >
                {news.description}
              </p>
              <p
                className="text-xs font-bold text-gray-500 mt-4 uppercase transition-colors duration-500 ease-out group-hover:text-gray-400"
                data-aos="zoom-in"
              >
                {news.date}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-8" data-aos="fade-up">
        <button className="relative px-3 py-2 w-40 hover:cursor-pointer font-medium text-white bg-red-600 border-2 border-red-600 rounded-md shadow-md transition-all duration-500 ease-out overflow-hidden group hover:bg-red-700">
          <span className="absolute inset-0 w-full h-full bg-red-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"></span>
          <span className="relative z-10">View All</span>
        </button>
      </div>
    </div>
  );
};

export default RecentNews;
