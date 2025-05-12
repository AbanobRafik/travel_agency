import ButtonC from "../components/ButtonC";
import InputC from "../components/InputC";
import ErrorMsg from "../components/ErrorMsg";
import { Link, useNavigate } from "react-router-dom"; // ✅ fix import
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Dummy user (same as one you registered)
const registeredUser = {
  email: "JohnDoe@example.com",
  password: "john123", // must match the zod min length
};

// Login validation schema
const LoginSchema = z.object({
  email: z
    .string()
    .nonempty("Email is required")
    .email("Invalid email address"),
  password: z
    .string()
    .nonempty("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

type LoginForm = z.infer<typeof LoginSchema>;

const Login = () => {
  const navigate = useNavigate(); // ✅ useNavigate hook

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginForm>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit: SubmitHandler<LoginForm> = (data) => {
    if (
      data.email === registeredUser.email &&
      data.password === registeredUser.password
    ) {
      console.log("Login successful ✅", data);
      navigate("/home"); // ✅ Navigate to Home page
    } else {
      setError("password", {
        message: "Invalid email or password",
      });
    }
  };

  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute h-screen inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url('/img/background.png')` }}
      ></div>

      {/* Form container */}
      <div className="max-w-md w-full z-10">
        <h1 className="text-4xl text-shadow-gray-400 text-shadow-md text-center font-bold mb-8 text-gray-800">
          Login Now
        </h1>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <InputC
            type="email"
            id="email"
            placeholder="Email"
            {...register("email")}
          />
          {errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}

          <InputC
            type="password"
            id="password"
            placeholder="Password"
            {...register("password")}
          />
          {errors.password && <ErrorMsg>{errors.password.message}</ErrorMsg>}

          <div className="pt-4">
            <ButtonC
              type="submit"
              className="w-full btn2 text-white font-medium py-3 px-4 rounded-md transition-colors duration-300 shadow-md"
            >
              Login
            </ButtonC>
          </div>
        </form>

        <div className="flex items-center justify-between mt-4">
          <label className="flex items-center text-gray-800">
            <input type="checkbox" className="mr-2" />
            <p className="font-semibold">Remember me</p>
          </label>
          <Link
            to="/forgot-password"
            className="text-indigo-700 font-semibold hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        <p className="text-center text-gray-800 font-semibold mt-4">
          Don't have an account?
          <Link to="/register" className="link">
            {" "}
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
