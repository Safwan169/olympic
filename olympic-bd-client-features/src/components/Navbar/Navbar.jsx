import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faGlobe, faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import { useSpring, animated, config } from 'react-spring';
import './Navbar.css';

const Navbar = () => {
    const [aboutDropdown, setAboutDropdown] = useState(false);
    const [brandsDropdown, setBrandsDropdown] = useState(false);
    const [mediaDropdown, setMediaDropdown] = useState(false);
    const [sustainabilityDropdown, setSustainabilityDropdown] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const menuRef = useRef(null);
    const mobileMenuRef = useRef(null);

    //Force update is added here
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                (menuRef.current && !menuRef.current.contains(event.target)) &&
                (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target))
            ) {
                setAboutDropdown(false);
                setBrandsDropdown(false);
                setMediaDropdown(false);
                setSustainabilityDropdown(false);
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleDropdownHover = (dropdownSetter) => {
        dropdownSetter(true);
    };

    const handleDropdownLeave = (dropdownSetter) => {
        dropdownSetter(false);
    };

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        //Force update is here
        forceUpdate();
    };

    const dropdownVariants = {
        hidden: { opacity: 0, y: -15, pointerEvents: "none" },
        visible: {
            opacity: 1,
            y: 0,
            pointerEvents: "auto",
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 24,
                duration: 0.3,
                staggerChildren: 0.05,
            },
        },
        exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
    };

    const dropdownItemVariants = {
        hidden: { opacity: 0, y: -5 },
        visible: { opacity: 1, y: 0 },
    };

    const animatedBackground = useSpring({
        backgroundColor: isHovering ? '#FFD700' : '#e44d26',
        config: config.molasses,
    });

    const glowingIcon = useSpring({
        color: isHovering ? 'white' : 'yellow',
        textShadow: isHovering ? '0 0 10px rgba(255,255,0,0.8)' : 'none',
        config: config.wobbly,
    });

    return (
        <animated.nav
            className=" bg-red-500text-white shadow-xl"
            style={{ ...animatedBackground, backgroundColor: '#ff0001' }} 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            ref={menuRef}
        >
            <div className="container mx-auto flex items-center justify-between py-4 px-4">
                {/* Logo */}
                <motion.div
                    className="flex items-center cursor-pointer"
                    // whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
                    transition={{ type: "spring", stiffness: 320, damping: 12 }}
                    style={{ mixBlendMode: 'lighten' }}
                >
                    <img src="/olympic-logo-top.svg" alt=" Logo" className="w-40  mr-2" />
                </motion.div>

                {/* Top Right Section */}
                <div className="flex items-center space-x-4">
                    {/* Hamburger menu for smaller screens */}
                    <div className="md:hidden">
                        <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
                            <FontAwesomeIcon icon={faBars} size="lg" />
                        </button>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <a href="#" className="text-white hover:text-yellow-200 text-sm flex items-center">
                            <FontAwesomeIcon icon="fa-solid fa-book" className="mr-1" /> Product Brochures
                        </a>
                        <a href="#" className="hover:text-yellow-200  text-white text-sm flex items-center">
                            <FontAwesomeIcon icon={faGlobe} className="mr-1" /> Change Country
                        </a>
                        <div className="flex text-white space-x-3">
                            <a href="#" className="hover:text-yellow-200">
                                <FontAwesomeIcon icon={faFacebook} size="25" />
                            </a>
                            <a href="#" className="hover:text-yellow-200">
                                <FontAwesomeIcon icon={faLinkedin} size="25" />
                            </a>
                            <a href="#" className="hover:text-yellow-200">
                                <FontAwesomeIcon icon={faYoutube} size="25" />
                            </a>
                            <a href="#" className="hover:text-yellow-200">
                                <FontAwesomeIcon icon={faInstagram} size="25" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu (Conditionally Rendered) */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="mobile-menu absolute top-full left-0 w-full bg-white text-gray-800 shadow-xl rounded-b-xl py-4 px-6 z-30"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        ref={mobileMenuRef}
                    >
                        <a href="#" className="block py-2 hover:bg-gray-100">Home</a>
                        <div className="mobile-dropdown">
                            <button className="block py-2 hover:bg-gray-100" onClick={() => setAboutDropdown(!aboutDropdown)}>
                                About <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
                            </button>
                            <AnimatePresence>
                                {aboutDropdown && (
                                    <motion.div
                                        className="pl-4"
                                        initial={{ opacity: 0, y: -5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -5 }}
                                        transition={{ duration: 0.15 }}
                                    >
                                        <a href="#" className="block py-2 hover:bg-gray-100">Our Inception</a>
                                        <a href="#" className="block py-2 hover:bg-gray-100">Mission & Vision</a>
                                        <a href="#" className="block py-2 hover:bg-gray-100">Achievements</a>
                                        <a href="#" className="block py-2 hover:bg-gray-100">Corporate Values</a>
                                        <a href="#" className="block py-2 hover:bg-gray-100">Our Sister Concern</a>
                                        <a href="#" className="block py-2 hover:bg-gray-100">Certification</a>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                        {/* Repeat mobile-dropdown for other dropdowns */}
                        <a href="#" className="block py-2 hover:bg-gray-100">Sustainability Reports</a>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Navigation */}
            <div className="container mx-auto flex items-center justify-between px-4 py-2 hidden md:flex"> {/* Hidden on smaller screens */}
                <div className="flex space-x-6 lg:space-x-10 items-center">
                    <motion.a
                        href="#"
                        className="hover:text-yellow-200 font-semibold glowing-text"
                        whileHover={{ rotateX: 360, scale: 1.1 }}
                        transition={{ duration: 0.4, type: "spring", stiffness: 150 }}
                    >
                        Home
                    </motion.a>

                    {/* About Dropdown */}
                    <div
                        className="relative group"
                        onMouseEnter={() => handleDropdownHover(setAboutDropdown)}
                        onMouseLeave={() => handleDropdownLeave(setAboutDropdown)}
                    >
                        <button className="flex items-center text-white hover:text-yellow-200 font-semibold">
                            About <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
                        </button>

                        <AnimatePresence>
                            {aboutDropdown && (
                                <motion.div
                                    className="absolute top-full left-0 bg-white text-gray-800 shadow-xl rounded mt-2 w-48 z-20"
                                    variants={dropdownVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                >
                                    <motion.a variants={dropdownItemVariants} href="#" className="block px-4 py-3 text-sm hover:bg-gray-100">
                                        Our Inception
                                    </motion.a>
                                    <motion.a variants={dropdownItemVariants} href="#" className="block px-4 py-3 text-sm hover:bg-gray-100">
                                        Mission & Vision
                                    </motion.a>
                                    <motion.a variants={dropdownItemVariants} href="#" className="block px-4 py-3 text-sm hover:bg-gray-100">
                                        Achievements
                                    </motion.a>
                                    <motion.a variants={dropdownItemVariants} href="#" className="block px-4 py-3 text-sm hover:bg-gray-100">
                                        Corporate Values
                                    </motion.a>
                                    <motion.a variants={dropdownItemVariants} href="#" className="block px-4 py-3 text-sm hover:bg-gray-100">
                                        Our Sister Concern
                                    </motion.a>
                                    <motion.a variants={dropdownItemVariants} href="#" className="block px-4 py-3 text-sm hover:bg-gray-100">
                                        Certification
                                    </motion.a>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Brands Dropdown */}
                    <div
                        className="relative group"
                        onMouseEnter={() => handleDropdownHover(setBrandsDropdown)}
                        onMouseLeave={() => handleDropdownLeave(setBrandsDropdown)}
                    >
                        <button className="flex text-white items-center hover:text-yellow-200 font-semibold">
                            Brands <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
                        </button>

                        <AnimatePresence>
                            {brandsDropdown && (
                                <motion.div
                                    className="absolute top-full left-0 bg-white text-gray-800 shadow-xl rounded mt-2 w-48 z-20"
                                    variants={dropdownVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                >
                                    <motion.a variants={dropdownItemVariants} href="#" className="block px-4 py-3 text-sm hover:bg-gray-100">
                                        Brand 1
                                    </motion.a>
                                    <motion.a variants={dropdownItemVariants} href="#" className="block px-4 py-3 text-sm hover:bg-gray-100">
                                        Brand 2
                                    </motion.a>
                                    <motion.a variants={dropdownItemVariants} href="#" className="block px-4 py-3 text-sm hover:bg-gray-100">
                                        Brand 3
                                    </motion.a>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <motion.a
                        href="#"
                        className="hover:text-yellow-200 font-semibold glowing-text"
                        whileHover={{ rotateX: 360, scale: 1.1 }}
                        transition={{ duration: 0.4, type: "spring", stiffness: 150 }}
                    >
                        Global Reach
                    </motion.a>

                    {/* Media Dropdown */}
                    <div
                        className="relative group"
                        onMouseEnter={() => handleDropdownHover(setMediaDropdown)}
                        onMouseLeave={() => handleDropdownLeave(setMediaDropdown)}
                    >
                        <button className="flex text-white items-center hover:text-yellow-200 font-semibold">
                            Media <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
                        </button>

                        <AnimatePresence>
                            {mediaDropdown && (
                                <motion.div
                                    className="absolute top-full left-0 bg-white text-gray-800 shadow-xl rounded mt-2 w-48 z-20"
                                    variants={dropdownVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                >
                                    <motion.a variants={dropdownItemVariants} href="#" className="block px-4 py-3 text-sm hover:bg-gray-100">
                                        News
                                    </motion.a>
                                    <motion.a variants={dropdownItemVariants} href="#" className="block px-4 py-3 text-sm hover:bg-gray-100">
                                        Press Releases
                                    </motion.a>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <motion.a
                        href="#"
                        className="hover:text-yellow-200 font-semibold glowing-text"
                        whileHover={{ rotateX: 360, scale: 1.1 }}
                        transition={{ duration: 0.4, type: "spring", stiffness: 150 }}
                    >
                        Agricultural Extension
                    </motion.a>
                    <motion.a
                        href="#"
                        className="hover:text-yellow-200 font-semibold glowing-text"
                        whileHover={{ rotateX: 360, scale: 1.1 }}
                        transition={{ duration: 0.4, type: "spring", stiffness: 150 }}
                    >
                        Suppliers
                    </motion.a>
                    <motion.a
                        href="#"
                        className="hover:text-yellow-200 font-semibold glowing-text"
                        whileHover={{ rotateX: 360, scale: 1.1 }}
                        transition={{ duration: 0.4, type: "spring", stiffness: 150 }}
                    >
                        Career
                    </motion.a>
                    <motion.a
                        href="#"
                        className="hover:text-yellow-200 font-semibold glowing-text"
                        whileHover={{ rotateX: 360, scale: 1.1 }}
                        transition={{ duration: 0.4, type: "spring", stiffness: 150 }}
                    >
                        Contact Us
                    </motion.a>
                    <motion.a
                        href="#"
                        className="hover:text-yellow-200 font-semibold glowing-text"
                        whileHover={{ rotateX: 360, scale: 1.1 }}
                        transition={{ duration: 0.4, type: "spring", stiffness: 150 }}
                    >
                        Our Platforms
                    </motion.a>

                    {/* Sustainability Dropdown */}
                    <div
                        className="relative group"
                        onMouseEnter={() => handleDropdownHover(setSustainabilityDropdown)}
                        onMouseLeave={() => handleDropdownLeave(setSustainabilityDropdown)}
                    >
                        <button className="flex text-white items-center hover:text-yellow-200 font-semibold">
                            Sustainability <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
                        </button>

                        <AnimatePresence>
                            {sustainabilityDropdown && (
                                <motion.div
                                    className="absolute top-full left-0 bg-white text-gray-800 shadow-xl rounded mt-2 w-48 z-20"
                                    variants={dropdownVariants}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <motion.a variants={dropdownItemVariants} href="#" className="block px-4 py-3 text-sm hover:bg-gray-100">
                                        Sustainability Initiatives
                                    </motion.a>
                                    <motion.a variants={dropdownItemVariants} href="#" className="block px-4 py-3 text-sm hover:bg-gray-100">
                                        Environmental Impact
                                    </motion.a>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <motion.a
                        href="#"
                        className="hover:text-yellow-200 font-semibold glowing-text"
                        whileHover={{ rotateX: 360, scale: 1.1 }}
                        transition={{ duration: 0.4, type: "spring", stiffness: 150 }}
                    >
                        Sustainability Reports
                    </motion.a>
                </div>

                {/* Search Icon */}
                <motion.button
                    className="text-white search-icon"
                    style={glowingIcon}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                    <FontAwesomeIcon icon={faSearch} />
                </motion.button>
            </div>
        </animated.nav>
    );
};

export default Navbar;