const Hotels = () => {
  const hotels = [
    {
      name: "The Grand Resort",
      location: "Santorini, Greece",
      price: "$399 per night",
      discount: "15%",
      imgSrc: "/img/grand-resort.jpg",
    },
    {
      name: "Beachfront Paradise",
      location: "Bali, Indonesia",
      price: "$299 per night",
      discount: "20%",
      imgSrc: "/img/beachfront-paradise.jpg",
    },
    {
      name: "Kyoto Palace Hotel",
      location: "Kyoto, Japan",
      price: "$450 per night",
      discount: "10%",
      imgSrc: "/img/kyoto-palace.jpg",
    },
    {
      name: "Paris Luxe Hotel",
      location: "Paris, France",
      price: "$550 per night",
      discount: "5%",
      imgSrc: "/img/paris-luxe.jpg",
    },
    {
      name: "New York Skyline Hotel",
      location: "New York, USA",
      price: "$350 per night",
      discount: "12%",
      imgSrc: "/img/newyork-skyline.jpg",
    },
    {
      name: "Dubai Grand Tower",
      location: "Dubai, UAE",
      price: "$400 per night",
      discount: "18%",
      imgSrc: "/img/dubai-grand.jpg",
    },
    {
      name: "The Royal Retreat",
      location: "London, UK",
      price: "$450 per night",
      discount: "10%",
      imgSrc: "/img/royal-retreat.jpg",
    },
    {
      name: "Ocean View Hotel",
      location: "Maldives",
      price: "$550 per night",
      discount: "8%",
      imgSrc: "/img/ocean-view.jpg",
    },
    {
      name: "Mountain Escape Resort",
      location: "Switzerland",
      price: "$600 per night",
      discount: "20%",
      imgSrc: "/img/mountain-escape.jpg",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-pink-50 to-rose-100 min-h-screen p-8">
      {/* Hotels Title */}
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-16">
        Explore Our Premium Hotels
      </h1>

      {/* Hotels Section */}
      <section>
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Top Hotels
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel, index) => (
            <div
              key={index}
              className="relative group rounded-3xl overflow-hidden shadow-lg transition-all duration-500 hover:scale-105 bg-white"
            >
              <img
                src={hotel.imgSrc}
                alt={hotel.name}
                className="w-full h-72 object-cover rounded-t-3xl group-hover:opacity-80 transition-opacity duration-500"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-5 rounded-b-3xl">
                <div className="text-white">
                  <h3 className="text-xl font-semibold">{hotel.name}</h3>
                  <h4 className="text-lg">{hotel.location}</h4>
                  <div className="mt-2">
                    <span className="block text-lg font-bold">
                      {hotel.price}
                    </span>
                    <span className="block text-sm text-yellow-300">
                      {hotel.discount} OFF
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

export default Hotels;
