/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu
  const [dropdown, setDropdown] = useState(null); // For dropdowns

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMouseEnter = (menu) => {
    setDropdown(menu);
  };

  const handleMouseLeave = () => {
    setDropdown(null);
  };

  const dropdownItems = {
    investors: [
      { label: "Corporate Governance", link: "/investors/governance" },
      { label: "Share Structure", link: "/investors/share-structure" },
      { label: "Annual Reports", link: "/investors/annual-reports" },
      { label: "Financial Reports", link: "/investors/financial-reports" },
      { label: "Unclaimed Dividend", link: "/investors/unclaimed-dividend" },
    ],
    exports: [{ label: "Export Info", link: "/exports/info" }],
    media: [{ label: "Media Coverage", link: "/media/coverage" }],
    about: [{ label: "Company History", link: "/about/history" }],
    news: [{ label: "Recent News", link: "/news/recent" }],
  };

  return (
    <nav>
      {/* Top Red Bar */}
      <div className="bg-red-600 py-6 z-50 text-white">
        <div className="container mx-auto px-44 font-semibold flex items-center justify-between">
          {/* Left Links */}
          <div className="hidden md:flex space-x-10">
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("investors")}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#" className="hover:text-gray-200 flex items-center">
                Investors{" "}
                <svg className="fill-current h-4 w-4 ml-1" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </a>
              {dropdown === "investors" && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-md  border border-gray-200">
                  {dropdownItems.investors.map((item) => (
                    <a
                      key={item.label}
                      href={item.link}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("exports")}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#" className="hover:text-gray-200 flex items-center">
                Exports{" "}
                <svg className="fill-current h-4 w-4 ml-1" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </a>
              {dropdown === "exports" && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-md  border border-gray-200">
                  {dropdownItems.exports.map((item) => (
                    <a
                      key={item.label}
                      href={item.link}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("media")}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#" className="hover:text-gray-200 flex items-center">
                Media{" "}
                <svg className="fill-current h-4 w-4 ml-1" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </a>
              {dropdown === "media" && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-md  border border-gray-200">
                  {dropdownItems.media.map((item) => (
                    <a
                      key={item.label}
                      href={item.link}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <a href="/contact" className="hover:text-gray-200">
              Contact Us
            </a>
          </div>

          {/* Right Links and Search */}
          <div className="flex items-center cursor-pointer  space-x-4">
            <button type="button" className="focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
            <span>BSEC</span>
            <span>DSE</span>
            <span>CSE</span>
          </div>

          {/* Mobile Menu Button (for top bar) */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-white focus:outline-none focus:text-gray-300"
              aria-label="Open menu"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.829-4.828 4.829a1 1 0 0 1-1.414-1.414l4.828-4.828-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.828 4.828 4.828z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* White Bottom Bar */}
      <div className="shadow-2xl shadow-neutral-200  py-4">
        <div className="container mx-auto px-40 flex items-center justify-between">
          {/* Logo */}
          <div>
            <a href="/">
              <img src="vite.svg" alt="Logo" className="h-10 w-auto" />
            </a>
          </div>

          {/* Bottom Links */}
          <div className="hidden font-semibold text-xl md:flex space-x-12 text-gray-700">
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("about")}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#" className="hover:text-gray-900 flex items-center">
                About Us{" "}
                <svg className="fill-current h-4 w-4 ml-1" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </a>
              {dropdown === "about" && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded border border-gray-200">
                  {dropdownItems.about.map((item) => (
                    <a
                      key={item.label}
                      href={item.link}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <a href="/brands" className="hover:text-gray-900">
              Our Brands
            </a>
            <a href="/sustainability" className="hover:text-gray-900">
              Sustainability
            </a>
            <a href="/recipes" className="hover:text-gray-900">
              Our Recipes
            </a>
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("news")}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#" className="hover:text-gray-900 flex items-center">
                News{" "}
                <svg className="fill-current h-4 w-4 ml-1" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </a>
              {dropdown === "news" && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded border border-gray-200">
                  {dropdownItems.news.map((item) => (
                    <a
                      key={item.label}
                      href={item.link}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu (Bottom Bar) */}
          <div
            className={`md:hidden absolute top-20 left-0 w-full bg-white shadow-md py-2 ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <div className="flex flex-col items-center space-y-2">
              <a href="/investors" className="hover:text-gray-900">
                Investors
              </a>
              <a href="/exports" className="hover:text-gray-900">
                Exports
              </a>
              <a href="/media" className="hover:text-gray-900">
                Media
              </a>
              <a href="/contact" className="hover:text-gray-900">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
