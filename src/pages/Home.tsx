"use client";

import { motion } from "framer-motion";
import { Link } from "react-router";

const Home = () => {
  const cards = [
    {
      label: "Flights",
      icon: "✈️",
      color: "from-blue-500",
      link: "/flights",
    },
    {
      label: "Hotels",
      icon: "🏨",
      color: "from-green-500",
      link: "/hotels",
    },
    {
      label: "Notification",
      icon: "🔔",
      color: "from-yellow-500",
      link: "/notification",
    },
    {
      label: "Payment",
      icon: "💳",
      color: "from-red-500",
      link: "/payment",
    },
    { label: "Date", icon: "📅", color: "from-purple-500", link: "/date" },
    {
      label: "Profile",
      icon: "👤",
      color: "from-pink-500",
      link: "/profile",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 flex flex-col items-center px-4 pb-12 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="fixed -bottom-20 -left-20 w-64 h-64 rounded-full bg-pink-300/20 blur-xl -z-10"></div>
      <div className="fixed -top-20 -right-20 w-72 h-72 rounded-full bg-rose-400/20 blur-xl -z-10"></div>
      <div className="fixed top-1/4 left-1/3 w-40 h-40 rounded-full bg-blue-300/10 blur-xl -z-10"></div>
      <div className="fixed bottom-1/3 right-1/4 w-56 h-56 rounded-full bg-purple-300/10 blur-xl -z-10"></div>

      {/* Modern Header with Navigation */}
      <header className="w-full max-w-6xl flex justify-between items-center py-6 px-4">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-pink-500 to-rose-400 flex items-center justify-center text-white font-bold text-xl">
            T
          </div>
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-400">
            Turistoe
          </h1>
        </div>
        <nav className="hidden md:flex gap-6 text-gray-600">
          <a href="#" className="hover:text-pink-600 transition-colors">
            Home
          </a>
          <a href="#" className="hover:text-pink-600 transition-colors">
            Destinations
          </a>
          <a href="#" className="hover:text-pink-600 transition-colors">
            Deals
          </a>
          <a href="#" className="hover:text-pink-600 transition-colors">
            About
          </a>
        </nav>
        <button className="rounded-full p-2 md:hidden text-gray-700 hover:bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </header>

      {/* Enhanced Hero Section */}
      <div className="relative w-full max-w-6xl mb-12 rounded-3xl overflow-hidden shadow-2xl">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t  z-10"></div>

        {/* Image with blur effect and opacity */}
        <img
          src="/img/ucp.png"
          alt="Travel"
          className="w-full h-auto object-cover aspect-[16/9] md:aspect-[21/9]"
        />
        {/* Popular Destinations Tags */}
      </div>

      {/* Section Title */}
      <div className="w-full max-w-4xl mb-8 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          Travel Services
        </h3>
        <p className="text-gray-600">
          Everything you need for your perfect journey
        </p>
      </div>

      {/* Enhanced Cards Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 sm:grid-cols-3 gap-6 w-full max-w-4xl mb-16"
      >
        {cards.map((card) => (
          <Link
            key={card.label}
            to={card.link} // Use the link for navigation
            className="w-full"
          >
            <motion.div
              variants={item}
              className="bg-white rounded-2xl p-5 flex flex-col items-center justify-center hover:scale-[1.03] transition-all duration-300 ease-in-out cursor-pointer group relative overflow-hidden shadow-lg hover:shadow-xl h-32 sm:h-40"
            >
              {/* Gradient Background Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
              ></div>

              {/* Card Content */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="text-4xl sm:text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <div className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-gray-700 transition-colors duration-300">
                  {card.label}
                </div>
              </div>

              {/* Subtle shine effect */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Additional shine effect for more prominence */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
      {/* Featured Destinations Section */}
      <div className="w-full max-w-6xl mb-8">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
            Featured Destinations
          </h3>
          <button className="text-pink-600 flex items-center gap-1 hover:bg-pink-50 px-3 py-2 rounded-lg">
            View all
            <svg
              className="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Santorini, Greece",
              price: "$1,299",
              discount: "20%",
              imgSrc: "/img/greece.jpg",
            },
            {
              name: "Bali, Indonesia",
              price: "$899",
              discount: "15%",
              imgSrc: "/img/bali.jpg",
            },
            {
              name: "Kyoto, Japan",
              price: "$1,499",
              discount: "10%",
              imgSrc: "/img/japan.jpg",
            },
          ].map((destination, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={destination.imgSrc}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-3 right-3 bg-rose-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {destination.discount} OFF
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-gray-800 mb-1">
                  {destination.name}
                </h4>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-pink-600 font-bold">
                      {destination.price}
                    </span>
                    <span className="text-gray-500 text-sm ml-1">
                      per person
                    </span>
                  </div>
                  <button className="bg-gradient-to-r from-pink-500 to-rose-400 text-white rounded-full px-4 py-1 text-sm font-medium">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="w-full max-w-4xl bg-gradient-to-r from-pink-500/10 to-rose-400/10 rounded-3xl p-8 mb-12">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Get Travel Inspiration
          </h3>
          <p className="text-gray-600">
            Subscribe to our newsletter for exclusive deals and travel tips
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="bg-white/80 border border-gray-200 rounded-lg px-4 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <button className="bg-gradient-to-r from-pink-500 to-rose-400 text-white rounded-lg px-6 py-2 font-medium">
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full max-w-6xl text-center text-gray-500 text-sm">
        <div className="flex justify-center gap-6 mb-4">
          <a href="#" className="hover:text-pink-600 transition-colors">
            About
          </a>
          <a href="#" className="hover:text-pink-600 transition-colors">
            Contact
          </a>
          <a href="#" className="hover:text-pink-600 transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-pink-600 transition-colors">
            Terms
          </a>
        </div>
        <p>© 2025 Turistoe. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
