/* eslint-disable no-unused-vars */
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WelcomeSection() {
  return (
    <section className="container mx-auto px-6 py-16 text-center">
      <h1 className="text-6xl font-extrabold uppercase tracking-wide text-red-600 mb-4">
        Welcome to Olympic
      </h1>
      <p className="text-gray-700 text-xl mt-6 leading-relaxed max-w-4xl mx-auto font-medium">
        Founded in 1979, Olympic Industries is the largest manufacturer, distributor, and marketer of biscuits in Bangladesh. 
        What makes Olympic so popular is the quality of our products. We understand that our consumers have high expectations of us, 
        and that their loyalty depends on it. As the market leader in the biscuits industry, we have achieved what we have by staying 
        true to our core values and focusing on our consumers.
      </p>
      <p className="text-gray-600 text-lg mt-4 leading-relaxed max-w-3xl mx-auto italic">
        To learn more about us, please visit our About Us page by clicking on the link below.
      </p>
      <button className="mt-6 px-6 py-3 text-lg font-bold text-white bg-gradient-to-r from-red-600 to-yellow-500 border-2 border-red-600 rounded-md shadow-md transition-all duration-300 hover:scale-105 hover:from-red-700 hover:to-yellow-600">
        About Us
      </button>
    </section>
  );
}
