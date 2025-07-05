import { useState } from "react";
import { Eye, EyeOff, User, Mail } from "lucide-react";

const Create = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="p-6 pt-12">
        <h1 className="text-xl md:text-2xl font-bold text-slate-800 text-center">
          Create Account
        </h1>
      </div>

      {/* Form */}
      <div className="flex-1 px-6 max-w-md mx-auto w-full">
        <form className="space-y-4">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="text-sm font-medium text-slate-700">
              Name
            </label>
            <div className="relative mt-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                <User size={16} />
              </span>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                className="w-full pl-10 pr-3 py-2 text-sm bg-gray-100 border-0 rounded-md focus:bg-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="text-sm font-medium text-slate-700">
              Email
            </label>
            <div className="relative mt-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                <Mail size={16} />
              </span>
              <input
                id="email"
                type="email"
                placeholder="name@example.com"
                className="w-full pl-10 pr-3 py-2 text-sm bg-gray-100 border-0 rounded-md focus:bg-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Phone Field */}
          <div>
            <label htmlFor="phone" className="text-sm font-medium text-slate-700">
              Phone Number
            </label>
            <div className="flex mt-1">
              <div className="flex items-center px-3 py-2 bg-gray-100 rounded-l-md border-r border-gray-300 text-sm text-slate-600">
                +234
              </div>
              <input
                id="phone"
                type="tel"
                placeholder="8012345678"
                className="flex-1 px-4 py-2 text-sm bg-gray-100 border-0 rounded-l-none rounded-r-md focus:bg-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="text-sm font-medium text-slate-700">
              Password
            </label>
            <div className="relative mt-1">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-4 pr-10 py-2 text-sm bg-gray-100 border-0 rounded-md focus:bg-white focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirmPassword" className="text-sm font-medium text-slate-700">
              Confirm Password
            </label>
            <div className="relative mt-1">
              <input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full px-4 pr-10 py-2 text-sm bg-gray-100 border-0 rounded-md focus:bg-white focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* Get Started Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-slate-800 hover:bg-slate-700 text-white font-medium py-2 rounded-md text-sm transition"
            >
              Get Started
            </button>
          </div>

          {/* Terms */}
          <div className="text-center pt-4">
            <p className="text-xs text-slate-500 leading-relaxed">
              By registering, you accept our{" "}
              <a href="#" className="text-blue-500 underline">
                Terms of Use
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-500 underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>

          {/* Social Logins */}
          <div className="space-y-3 pt-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 border border-gray-300 text-slate-700 text-sm font-medium py-2 rounded-md bg-white hover:bg-gray-50 transition"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg"
                alt="fb"
                className="w-4 h-4"
              />
              Continue with Facebook
            </a>

            <a
              href="https://accounts.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 border border-gray-300 text-slate-700 text-sm font-medium py-2 rounded-md bg-white hover:bg-gray-50 transition"
            >
              <img
                src="https://developers.google.com/identity/images/g-logo.png"
                alt="google"
                className="w-4 h-4"
              />
              Continue with Google
            </a>
          </div>

          {/* Login Link */}
          <div className="text-center pt-4 pb-8">
            <p className="text-sm text-slate-600">
              Already have an account?{" "}
              <a href="/login" className="text-blue-500 font-medium">
                Log In
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
