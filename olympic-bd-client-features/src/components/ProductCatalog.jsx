/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const productsData = {
  newArrivals: [
    { id: 1, img: "/Images/newArrivals/Butter-Bite-New.png", name: "Smart Watch", price: "$99.99", rating: 4 },
    { id: 2, img: "/Images/categoriesImages/image3.png", name: "Wireless Headphones", price: "$79.99", rating: 5 },
    { id: 3, img: "/Images/categoriesImages/image3.png", name: "Gaming Mouse", price: "$49.99", rating: 3 },
  ],
  popular: [
    { id: 4, img: "/Images/categoriesImages/image1.png", name: "4K Smart TV", price: "$599.99", rating: 5 },
    { id: 5, img: "/Images/categoriesImages/image2.png", name: "Bluetooth Speaker", price: "$89.99", rating: 4 },
    { id: 6, img: "/Images/categoriesImages/image3.png", name: "Smartphone", price: "$699.99", rating: 5 },
  ],
};

const ProductCatalog = () => {
  return (
    <div className="w-full py-12 px-6 text-gray-900 bg-gray-50">
      <h2 className="text-5xl font-extrabold text-center mb-8 uppercase tracking-wide text-transparent bg-gradient-to-r from-red-600 to-yellow-400 bg-clip-text">
        Our Product Collection
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="w-full h-[550px]"
      >
        <SwiperSlide>
          <Section title="New Arrivals" products={productsData.newArrivals} />
        </SwiperSlide>
        <SwiperSlide>
          <Section title="Popular Products" products={productsData.popular} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

const Section = ({ title, products }) => {
  return (
    <div className="w-full h-[500px] flex flex-col items-center justify-center">
      <h2 className="relative text-4xl font-bold text-center uppercase pb-4 mb-6 tracking-wide text-gray-800">
        {title}
        <span className="absolute left-1/2 bottom-0 w-20 h-1 bg-gradient-to-r from-red-500 to-yellow-400 transform -translate-x-1/2"></span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 w-full max-w-6xl">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="relative rounded-xl shadow-lg overflow-hidden border bg-white transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
          >
            <img src={product.img} alt={product.name} className="w-full h-64 object-cover" />
            <div className="p-5 text-center">
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-2xl font-bold text-red-600 mt-2">{product.price}</p>
              
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ProductCatalog;
