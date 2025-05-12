"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

export default function CreativeCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [animation, setAnimation] = useState("");

  const flightDates = [
    new Date(2025, 4, 15),
    new Date(2025, 4, 17),
    new Date(2025, 4, 20),
  ];

  const hasFlight = (date: Date) => {
    return flightDates.some(
      (flightDate) =>
        flightDate.getDate() === date.getDate() &&
        flightDate.getMonth() === date.getMonth() &&
        flightDate.getFullYear() === date.getFullYear()
    );
  };

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const prevMonth = () => {
    setAnimation("slide-right");
    setTimeout(() => {
      setCurrentDate(
        new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
      );
      setAnimation("");
    }, 200);
  };

  const nextMonth = () => {
    setAnimation("slide-left");
    setTimeout(() => {
      setCurrentDate(
        new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
      );
      setAnimation("");
    }, 200);
  };

  const selectDate = (day: number) => {
    setSelectedDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
    );
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getMonthName = (date: Date) => {
    return date.toLocaleDateString("en-US", { month: "long" });
  };

  const renderCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);
    const days = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-12 md:h-16"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isToday = new Date().toDateString() === date.toDateString();
      const isSelected = selectedDate.toDateString() === date.toDateString();
      const hasFlightToday = hasFlight(date);

      days.push(
        <div
          key={day}
          onClick={() => selectDate(day)}
          className={`relative h-12 md:h-16 flex items-center justify-center rounded-full cursor-pointer transition-all duration-300 hover:scale-110 ${
            isSelected
              ? "bg-gradient-to-br from-purple-500 to-pink-500 text-white font-bold shadow-lg"
              : isToday
              ? "border-2 border-purple-400"
              : "hover:bg-purple-100"
          }`}
        >
          <span className="text-lg">{day}</span>
          {hasFlightToday && (
            <div className="absolute -top-1 -right-1 animate-pulse">
              <Sparkles className="h-5 w-5 text-amber-500" />
            </div>
          )}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="p-8 min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:shadow-purple-200 hover:shadow-xl">
          <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-6 text-white">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl md:text-4xl font-bold">
                Creative Calendar
              </h1>
              <div className="text-right">
                <p className="text-xl md:text-2xl font-light">
                  {formatDate(selectedDate)}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center p-4 border-b">
            <button
              onClick={prevMonth}
              className="p-2 rounded-full hover:bg-purple-100 transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-purple-600" />
            </button>

            <h2 className="text-2xl font-bold text-purple-800">
              {getMonthName(currentDate)} {currentDate.getFullYear()}
            </h2>

            <button
              onClick={nextMonth}
              className="p-2 rounded-full hover:bg-purple-100 transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-purple-600" />
            </button>
          </div>

          <div className="p-4">
            <div className="grid grid-cols-7 gap-2 mb-2">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div
                  key={day}
                  className="text-center font-medium text-purple-800"
                >
                  {day}
                </div>
              ))}
            </div>

            <div className={`grid grid-cols-7 gap-2 ${animation}`}>
              {renderCalendarDays()}
            </div>
          </div>

          <div className="p-4 bg-purple-50">
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mr-2"></div>
                <span>Selected</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full border-2 border-purple-400 mr-2"></div>
                <span>Today</span>
              </div>
              <div className="flex items-center">
                <Sparkles className="h-5 w-5 text-amber-500 mr-2" />
                <span>Flight Available</span>
              </div>
            </div>
          </div>

          <div className="p-6 border-t">
            <h3 className="text-xl font-semibold text-purple-800 mb-3">
              Upcoming Flights:
            </h3>
            <div className="space-y-2">
              {flightDates.map((flight, index) => (
                <div
                  key={index}
                  className="p-3 rounded-lg bg-gradient-to-r from-purple-100 to-pink-100 flex items-center justify-between"
                >
                  <div className="flex items-center">
                    <Sparkles className="h-5 w-5 text-amber-500 mr-3" />
                    <span className="font-medium">{flight.toDateString()}</span>
                  </div>
                  <span className="text-sm bg-white px-3 py-1 rounded-full text-purple-700">
                    Flight Available
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .slide-left {
          animation: slideLeft 0.3s ease-out;
        }

        .slide-right {
          animation: slideRight 0.3s ease-out;
        }

        @keyframes slideLeft {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(-20px);
          }
        }

        @keyframes slideRight {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(20px);
          }
        }
      `}</style>
    </div>
  );
}
