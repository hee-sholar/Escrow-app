import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const First = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col max-w-md mx-auto">
      {/* Header with Skip button */}
      <div className="flex justify-end p-4">
        <button
          className="text-gray-500 text-sm font-medium"
          onClick={() => window.location.href = "/home"}
        >
          Skip
        </button>
      </div>

      {/* Main content */}
      <div
        className="flex-1 flex flex-col items-center justify-center px-6 pb-8"
        data-aos="fade-up"
      >
        {/* Image container with blue border */}
        <div className="border-blue-400 rounded-lg bg-white mb-8 flex justify-center items-center">
          <img
            src="/image 9.png"
            alt="Secure transaction"
            className="w-[300px] h-[300px] object-contain"
          />
        </div>

        {/* Title */}
        <h1
          className="text-xl font-semibold text-gray-900 text-center mb-4"
          data-aos="fade-up"
        >
          Safe Transactions
          <br />
          Guaranteed
        </h1>

        {/* Description */}
        <p
          className="text-sm text-gray-600 text-center leading-relaxed max-w-xs"
          data-aos="fade-up"
        >
          Our escrow service holds your funds securely until both parties fulfil
          their obligations, eliminating payment risks.
        </p>
      </div>

      {/* Bottom section */}
      <div className="px-6 pb-8">
        {/* Page indicators */}
        <div className="flex justify-center space-x-2 mb-6 mt-5">
          <div className="w-7 h-2 rounded-full bg-gray-800"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        </div>

        {/* Next button */}
        <button
          className="w-full bg-slate-800 hover:bg-slate-700 text-white py-3 rounded-lg font-medium"
          onClick={() => window.location.href = "/onboarding"}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default First;
