import { FaEnvelope, FaGoogle } from "react-icons/fa";
import ButtonC from "../components/ButtonC";
import { Link } from "react-router";

const Welcome = () => {
  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/img/background.png')` }}
    >
      <div className="flex flex-col items-center justify-end h-full gap-2">
        <ButtonC className="btn1 flex items-center justify-center transition duration-300 w-64 h-12">
          Login With Email
          <FaEnvelope className=" ml-2" />
        </ButtonC>
        <ButtonC className="btn2 flex items-center justify-center transition duration-300 w-64 h-12">
          Login With Google
          <FaGoogle className="ml-2" />
        </ButtonC>
        <div className="font-semibold text-gray-800 mt-4 mb-5">
          <p>
            Don’t Have an Account ? {" "}
            <Link to="/register" className="link ">
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
