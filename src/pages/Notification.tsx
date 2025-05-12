const Notification = () => {
  const notifications = [
    {
      type: "Flights",
      message: "New flight offer to Santorini, Greece with 20% off!",
      date: "2025-05-12",
    },
    {
      type: "Hotels",
      message: "The Grand Resort in Santorini now offers 15% off!",
      date: "2025-05-10",
    },
    {
      type: "What's New",
      message: "New exciting destination: Kyoto, Japan with amazing discounts!",
      date: "2025-05-08",
    },
    {
      type: "Flights",
      message: "Bali, Indonesia flights available with 15% discount!",
      date: "2025-05-06",
    },
    {
      type: "Hotels",
      message: "Stay at the Beachfront Paradise in Bali, now at 20% off!",
      date: "2025-05-04",
    },
    {
      type: "What's New",
      message: "Experience the new luxury hotels in Paris, France!",
      date: "2025-05-02",
    },
    {
      type: "Flights",
      message: "Kyoto, Japan now offers direct flights at discounted prices!",
      date: "2025-04-30",
    },
    {
      type: "Hotels",
      message: "Exclusive offer: Book the Paris Luxe Hotel and get 5% off!",
      date: "2025-04-28",
    },
    {
      type: "What's New",
      message: "New flights to Dubai with exciting offers are available!",
      date: "2025-04-26",
    },
    {
      type: "Flights",
      message: "New York Skyline flights now 12% off, hurry and book!",
      date: "2025-04-24",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-pink-50 to-rose-100 min-h-screen p-8">
      {/* Notifications Title */}
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-16">
        Notifications
      </h1>

      {/* Notifications Section */}
      <section>
        <div className="space-y-6">
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded-xl shadow-lg flex items-center space-x-4 transition-all duration-300 hover:scale-105 hover:bg-gray-50"
            >
              <div className="flex-shrink-0">
                <span
                  className={`px-3 py-1 text-sm font-semibold rounded-full ${
                    notification.type === "Flights"
                      ? "bg-blue-500 text-white"
                      : notification.type === "Hotels"
                      ? "bg-green-500 text-white"
                      : "bg-yellow-500 text-white"
                  }`}
                >
                  {notification.type}
                </span>
              </div>
              <div>
                <p className="text-lg font-medium">{notification.message}</p>
                <p className="text-sm text-gray-500">
                  Posted on: {notification.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Notification;
