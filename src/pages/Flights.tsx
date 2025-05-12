const Flights = () => {
  const specialOffers = [
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
  ];

  const incomingFlights = [
    {
      name: "Paris, France",
      price: "$1,200",
      discount: "12%",
      imgSrc: "/img/paris.jpg",
    },
    {
      name: "New York, USA",
      price: "$800",
      discount: "5%",
      imgSrc: "/img/newyork.jpg",
    },
    {
      name: "Dubai, UAE",
      price: "$1,000",
      discount: "18%",
      imgSrc: "/img/dubai.jpg",
    },
  ];

  const popularDestinations = [
    {
      name: "Rome, Italy",
      price: "$1,100",
      discount: "8%",
      imgSrc: "/img/rome.jpg",
    },
    {
      name: "Sydney, Australia",
      price: "$1,350",
      discount: "7%",
      imgSrc: "/img/sydney.jpg",
    },
    {
      name: "Giza, Egypt",
      price: "$1,200",
      discount: "10%",
      imgSrc: "/img/egypt.jpg",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-pink-50 to-rose-100 min-h-screen p-8">
      {/* Home Page Title */}
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-16">
        Explore Our Flight Destinations
      </h1>

      {/* Special Offers Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Special Offers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialOffers.map((flight, index) => (
            <div
              key={index}
              className="relative group rounded-3xl overflow-hidden shadow-lg transition-all duration-500 hover:scale-105 bg-white"
            >
              <img
                src={flight.imgSrc}
                alt={flight.name}
                className="w-full h-72 object-cover rounded-t-3xl group-hover:opacity-80 transition-opacity duration-500"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-5 rounded-b-3xl">
                <div className="text-white">
                  <h3 className="text-xl font-semibold">{flight.name}</h3>
                  <div className="mt-2">
                    <span className="block text-lg font-bold">
                      {flight.price}
                    </span>
                    <span className="block text-sm text-yellow-300">
                      {flight.discount} OFF
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Incoming Flights Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Incoming Flights
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {incomingFlights.map((flight, index) => (
            <div
              key={index}
              className="relative group rounded-3xl overflow-hidden shadow-lg transition-all duration-500 hover:scale-105 bg-white"
            >
              <img
                src={flight.imgSrc}
                alt={flight.name}
                className="w-full h-72 object-cover rounded-t-3xl group-hover:opacity-80 transition-opacity duration-500"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-5 rounded-b-3xl">
                <div className="text-white">
                  <h3 className="text-xl font-semibold">{flight.name}</h3>
                  <div className="mt-2">
                    <span className="block text-lg font-bold">
                      {flight.price}
                    </span>
                    <span className="block text-sm text-yellow-300">
                      {flight.discount} OFF
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Destinations Section */}
      <section>
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Popular Destinations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularDestinations.map((flight, index) => (
            <div
              key={index}
              className="relative group rounded-3xl overflow-hidden shadow-lg transition-all duration-500 hover:scale-105 bg-white"
            >
              <img
                src={flight.imgSrc}
                alt={flight.name}
                className="w-full h-72 object-cover rounded-t-3xl group-hover:opacity-80 transition-opacity duration-500"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-5 rounded-b-3xl">
                <div className="text-white">
                  <h3 className="text-xl font-semibold">{flight.name}</h3>
                  <div className="mt-2">
                    <span className="block text-lg font-bold">
                      {flight.price}
                    </span>
                    <span className="block text-sm text-yellow-300">
                      {flight.discount} OFF
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Flights;
