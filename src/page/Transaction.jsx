import { useState } from "react";
import { ArrowLeft, ShoppingBag, DollarSign } from "lucide-react";

const Transaction = () => {
  const [selectedRole, setSelectedRole] = useState("");

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    window.location.href = `/transaction/details?role=${role}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4 flex items-center">
        <a href="/dashboard" className="p-1 hover:bg-gray-100 rounded">
          <ArrowLeft className="h-5 w-5 text-gray-600" />
        </a>
        <h1 className="ml-3 text-lg font-semibold text-gray-900">Create New Transaction</h1>
      </div>

      {/* Progress Steps */}
      <div className="bg-white px-6 py-6 border-b border-gray-200">
        <div className="flex items-center justify-between max-w-md mx-auto w-full">
          {/* Step 1 - Active */}
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 bg-gray-300 text-gray-700 rounded-full flex items-center justify-center text-sm font-medium">
              1
            </div>
            <span className="text-xs text-gray-600 mt-2">Role</span>
          </div>

          <div className="h-px bg-gray-300 flex-1 mx-2"></div>

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 bg-gray-300 text-gray-700 rounded-full flex items-center justify-center text-sm font-medium">
              2
            </div>
            <span className="text-xs text-gray-600 mt-2">Details</span>
          </div>

          <div className="h-px bg-gray-300 flex-1 mx-2"></div>

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 bg-gray-300 text-gray-700 rounded-full flex items-center justify-center text-sm font-medium">
              3
            </div>
            <span className="text-xs text-gray-600 mt-2">Review</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 py-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-8">Select Your Role</h2>

        <div className="flex flex-col sm:flex-row gap-4">
          {/* Buyer Option */}
          <div
            onClick={() => handleRoleSelect("buyer")}
            className={`flex-1 p-6 border-2 rounded-lg transition-colors cursor-pointer ${
              selectedRole === "buyer"
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 hover:border-blue-500"
            }`}
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <ShoppingBag className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Buyer</h3>
                <p className="text-sm text-gray-600">I'm purchasing goods or services</p>
              </div>
            </div>
          </div>

          {/* Seller Option */}
          <div
            onClick={() => handleRoleSelect("seller")}
            className={`flex-1 p-6 border-2 rounded-lg transition-colors cursor-pointer ${
              selectedRole === "seller"
                ? "border-green-500 bg-green-50"
                : "border-gray-200 hover:border-green-500"
            }`}
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Seller</h3>
                <p className="text-sm text-gray-600">I'm selling goods or services</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
