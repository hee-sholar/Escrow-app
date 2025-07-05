import { useState } from "react";

const Logout = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => setIsOpen(false);
  const handleLogout = () => {
    console.log("User logged out");
    // You can also redirect using window.location.href = "/logout"
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-xl px-6 py-8 w-[90%] max-w-sm text-center">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Are you sure you want to Log Out?
        </h2>

        <div className="mt-6 flex justify-center gap-4">
          {/* No Button */}
          <a
            href="/dashboard"
            onClick={handleClose}
            className="px-5 py-2 rounded-md text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
          >
            No
          </a>

          {/* Logout Button */}
          <a
            href="/login"
            onClick={handleLogout}
            className="px-5 py-2 rounded-md text-sm font-medium bg-red-100 text-red-600 hover:bg-red-200 transition"
          >
            Log Out
          </a>
        </div>
      </div>
    </div>
  );
};

export default Logout;
