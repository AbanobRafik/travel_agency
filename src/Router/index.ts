import { createBrowserRouter } from "react-router";
import Welcome from "../pages/Welcome";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Flights from "../pages/Flights"; // Import your Flights component
import Hotels from "../pages/Hotels"; // Import your Hotels component
import Notification from "../pages/Notification"; // Import your Notification component
import Payment from "../pages/Payment"; // Import your Payment component
import Date from "../pages/Date"; // Import your Date component
import Profile from "../pages/Profile"; // Import your Profile component

const router = createBrowserRouter([
  {
    path: "/",
    Component: Welcome,
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/home",
    Component: Home,
  },
  {
    path: "/flights", // Add route for Flights
    Component: Flights,
  },
  {
    path: "/hotels", // Add route for Hotels
    Component: Hotels,
  },
  {
    path: "/notification", // Add route for Notification
    Component: Notification,
  },
  {
    path: "/payment", // Add route for Payment
    Component: Payment,
  },
  {
    path: "/date", // Add route for Date
    Component: Date,
  },
  {
    path: "/profile", // Add route for Profile
    Component: Profile,
  },
]);

export default router;
