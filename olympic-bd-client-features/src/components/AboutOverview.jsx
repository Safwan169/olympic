/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import {
  FaGlobe,
  FaStore,
  FaUsers,
  FaClock,
  FaCertificate,
  FaMoneyBillWave,
  FaDollarSign,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const stats = [
  {
    icon: <FaGlobe className="text-blue-500 text-3xl" />,
    label: "Exporting to",
    value: 38,
    suffix: "+ countries",
  },
  {
    icon: <FaStore className="text-green-500 text-3xl" />,
    label: "Retail outlets",
    value: 1000000,
    suffix: "+",
  },
  {
    icon: <FaUsers className="text-yellow-500 text-3xl" />,
    label: "Employees",
    value: 12000,
    suffix: "+",
  },
  {
    icon: <FaClock className="text-purple-500 text-3xl" />,
    label: "Experience",
    value: 40,
    suffix: "+ years",
  },
  {
    icon: <FaCertificate className="text-red-500 text-3xl" />,
    label: "Certification",
    value: 22000,
    suffix: "",
  },
  {
    icon: <FaMoneyBillWave className="text-indigo-500 text-3xl" />,
    label: "Annual Revenue",
    value: 2592,
    suffix: "CR BDT",
  },
  {
    icon: <FaDollarSign className="text-teal-500 text-3xl" />,
    label: "Export Revenue",
    value: 3190000,
    suffix: " USD",
  },
];

export default function BiscuitStats() {
  const [counts, setCounts] = useState(
    stats.map((stat) => ({ value: 0, suffix: stat.suffix }))
  );

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      once: true, // Trigger animation only once
    });

    const timers = stats.map((stat, index) => {
      let count = 0;
      const duration = 500; // 1/2 second
      const incrementSpeed = stat.value / duration; // Calculate how much to increment per interval

      const interval = setInterval(() => {
        count += incrementSpeed;
        if (count >= stat.value) {
          count = stat.value;
          clearInterval(interval); // Stop once the value is reached
        }

        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          newCounts[index] = { value: Math.floor(count), suffix: stat.suffix };
          return newCounts;
        });
      }, 10); // Update every 10ms to simulate smooth counting

      return interval;
    });

    // Cleanup timers on component unmount
    return () => timers.forEach((timer) => clearInterval(timer));
  }, []);

  return (
    <div className=" p-8 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Highlights Statistics
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* New card for Largest Biscuit Manufacturer in Bangladesh */}
        <div
          className="flex items-center gap-4 p-4 bg-orange-100 rounded-lg shadow-sm hover:shadow-lg transform transition-all hover:scale-105"
          data-aos="fade-up"
        >
          <FaStore className="text-orange-500 text-3xl" />
          <div>
            <p className="text-gray-700 font-semibold">
              Largest Biscuit Manufacturer
            </p>
            <p className="text-xl font-bold text-gray-900">Bangladesh</p>
          </div>
        </div>

        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-4 bg-gray-100 rounded-lg shadow-sm hover:shadow-lg transform transition-all hover:scale-105"
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`} // Stagger the animations
          >
            {stat.icon}
            <div>
              <p className="text-gray-700 font-semibold">{stat.label}</p>
              <p className="text-xl font-bold text-gray-900">
                {counts[index].value}
                {stat.suffix}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
