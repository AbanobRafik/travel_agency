import { Link } from "react-router";
import ButtonC from "../components/ButtonC";
import InputC from "../components/InputC";
import { z } from "zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorMsg from "../components/ErrorMsg";

const RegisterSchema = z.object({
  firstName: z
    .string()
    .nonempty("First name is required")
    .min(3, "Must be at least 3 characters"),
  lastName: z
    .string()
    .nonempty("Last name is required")
    .min(3, "Must be at least 3 characters"),
  email: z
    .string()
    .nonempty("Email is required")
    .email("Invalid email address"),
  password: z
    .string()
    .nonempty("Password is required")
    .min(6, "Password must be at least 6 characters long"),
  confirmPassword: z
    .string()
    .nonempty("Confirm password is required")
    .min(6, "Confirm password must be at least 6 characters"),
});

type formValue = z.infer<typeof RegisterSchema>;

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formValue>({
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit: SubmitHandler<formValue> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className="min-h-screen bg-pink-50 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Background image */}
        <div
          className="absolute h-screen inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url('/img/background.png')` }}
        ></div>

        {/* Form container */}
        <div className="max-w-md w-full z-10">
          <h1 className="text-4xl text-shadow-gray-400 text-shadow-md text-center font-bold mb-8 text-gray-800">
            Glad to Join Us 👋
          </h1>

          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <InputC
              type="text"
              id="firstName"
              placeholder="First Name"
              {...register("firstName")}
            />
            {errors.firstName && (
              <ErrorMsg>{errors.firstName.message}</ErrorMsg>
            )}
            <InputC
              type="text"
              id="lastName"
              placeholder="Last Name"
              {...register("lastName")}
            />
            {errors.lastName && <ErrorMsg>{errors.lastName.message}</ErrorMsg>}
            <InputC
              type="email"
              id="email"
              placeholder="Email"
              {...register("email")}
            />
            {errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}
            <InputC
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <ErrorMsg>{errors.confirmPassword.message}</ErrorMsg>
            )}

            <div className="pt-4">
              <ButtonC
                type="submit"
                className="w-full btn2 text-white font-medium py-3 px-4 rounded-md transition-colors duration-300 shadow-md"
              >
                Sign in
              </ButtonC>
            </div>
          </form>
          <p className="text-center text-gray-800 font-semibold mt-4">
            Already have an account?
            <Link to="/login" className="link">
              {" "}
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
