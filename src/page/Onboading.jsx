import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Onboarding = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header with Skip button */}
      <div className="flex justify-end p-4 pt-8">
        <button
          className="text-slate-600 text-sm font-medium"
          onClick={() => window.location.href = "/"}
        >
          Skip
        </button>
      </div>

      {/* Main Content */}
      <div
        className="flex-1 flex flex-col items-center justify-center px-6 pb-8"
        data-aos="fade-up"
      >
        <div className="w-full max-w-sm space-y-8">
          {/* Illustration */}
          <div className="flex justify-center">
            <div className="w-80 h-64">
              <img
                src="/image 10.png"
                alt="African professionals working on laptops"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center space-y-4" data-aos="fade-up">
            <h1 className="text-2xl font-bold text-slate-800 leading-tight">
              Built <span className="text-blue-500">for</span> African
              <br />
              Professionals
            </h1>

            <p className="text-slate-600 text-sm leading-relaxed px-2">
              Designed specifically for freelancers, business owners, and other sellers in Nigeria to build trust and
              confidence.
            </p>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center space-x-2 mb-6 mt-8" data-aos="fade-up">
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-7 h-2 rounded-full bg-gray-800"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </div>

      {/* Next Button */}
      <div className="p-6">
        <button
          className="w-full bg-slate-800 hover:bg-slate-800 text-white font-medium py-3 rounded-md"
          onClick={() => window.location.href = "/create"}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Onboarding;
