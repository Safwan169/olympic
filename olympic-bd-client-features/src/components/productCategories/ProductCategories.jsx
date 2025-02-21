/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Typewriter } from "react-simple-typewriter"; // Using a more stable typing effect

const categories = [
  { name: "Biscuits", image: "/Images/categoriesImages/image1.png" },
  { name: "Cookies & Bakery", image: "/Images/categoriesImages/image2.png" },
  { name: "Confectionery", image: "/Images/categoriesImages/image3.png" },
  { name: "Snacks", image: "/Images/categoriesImages/image4.png" },
  { name: "Powder Drinks", image: "/Images/categoriesImages/image5.png" },
  { name: "Batteries", image: "/Images/categoriesImages/image6.png" },
];

const tiltOptions = {
  max: 15,
  scale: 1.05,
  speed: 400,
  glare: true,
  "max-glare": 0.3,
};

const ProductCategories = () => {
  return (
    <div className="p-6">
      {/* Typing Effect Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
        <Typewriter
          words={["Product Categories"]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={2000}
        />
      </h2>

      {/* Product Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <Tilt key={index} options={tiltOptions}>
            <motion.div
              className="relative overflow-hidden rounded-2xl cursor-pointer shadow-lg border-2 border-transparent group transition-all duration-300"
              whileHover={{ scale: 1.08 }}
            >
              {/* Background Image with Increased Width & Height */}
              <motion.img
                src={category.image}
                alt={category.name}
                className="w-full h-56 md:h-64 lg:h-72 object-cover transition-transform duration-300"
              />

              {/* Soft Shadow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Category Name with Previous Button Style */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <motion.span
                  className="text-white text-lg font-semibold px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-pink-500 shadow-lg"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {category.name}
                </motion.span>
              </div>

              {/* Animated Border Effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-4 border-transparent group-hover:border-gradient-to-r from-indigo-400 to-pink-500 transition-all duration-300"
              />

              {/* Bottom Neon Glow Effect */}
              <div className="absolute bottom-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </motion.div>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
