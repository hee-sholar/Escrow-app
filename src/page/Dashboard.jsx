import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Bell,
  Eye,
  EyeOff,
  Plus,
  ArrowUpRight,
  ArrowDownLeft,
  Send,
  History,
  ShoppingBag,
  Home,
  Settings,
} from "lucide-react";

const Dashboard = () => {
  const [showBalance, setShowBalance] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    AOS.init({ duration: 800 });

    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const transactions = [
    {
      id: "trx1",
      title: "E-commerce Purchase",
      subtitle: "Jumia Store",
      amount: "₦45,000",
      status: "In Progress",
      statusColor: "text-yellow-700 bg-yellow-100",
      iconColor: "text-blue-600",
      href: "/transaction/trx1",
    },
    {
      id: "trx2",
      title: "Website Development",
      subtitle: "TechCorp Ltd",
      amount: "₦350,000",
      status: "Completed",
      statusColor: "text-green-700 bg-green-100",
      iconColor: "text-green-600",
      href: "/transaction/trx2",
    },
    {
      id: "trx3",
      title: "Product Purchase",
      subtitle: "Konga Store",
      amount: "₦85,000",
      status: "Disputed",
      statusColor: "text-red-700 bg-red-100",
      iconColor: "text-red-600",
      href: "/transaction/trx3",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 max-w-sm mx-auto pb-24 overflow-visible relative z-0">
      {/* Header */}
      <header
        className="bg-white px-4 py-3 flex items-center justify-between border-b relative z-20"
        data-aos="fade-down"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#0B2C45] rounded-lg flex items-center justify-center text-white font-bold text-sm">
            B
          </div>
          <span className="font-semibold text-gray-900">BizzEscrow</span>
        </div>

        <div className="relative" ref={dropdownRef}>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
            </div>
            <img
              src="/Frame 423.png"
              alt="User Avatar"
              className="w-8 h-8 rounded-full object-cover cursor-pointer"
              onClick={() => setShowDropdown(!showDropdown)}
            />
          </div>

          {showDropdown && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50">
              <a
                href="/profile"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Profile
              </a>
              <a
                href="/settings"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Settings
              </a>
              <a
                href="/logout"
                className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
              >
                Logout
              </a>
            </div>
          )}
        </div>
      </header>

      {/* Welcome */}
      <section className="px-4 py-4 bg-white" data-aos="fade-right">
        <h1 className="text-lg font-semibold text-gray-900">Welcome, Abdul</h1>
        <p className="text-sm text-gray-500">Friday, 07 June 2024</p>
      </section>

      {/* Balance */}
      <section className="px-4 py-4" data-aos="zoom-in">
        <div className="bg-[#0B2C45] text-white rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-blue-100">Available Balance</span>
            <button onClick={() => setShowBalance(!showBalance)}>
              {showBalance ? (
                <Eye className="w-5 h-5 text-blue-100" />
              ) : (
                <EyeOff className="w-5 h-5 text-blue-100" />
              )}
            </button>
          </div>
          <div className="text-3xl font-bold mb-6">
            {showBalance ? "₦1,250,000.00" : "•••••••••"}
          </div>
          <div className="flex gap-3">
            <a
              href="/deposit"
              className="flex-1 text-center bg-white text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-100 flex items-center justify-center"
            >
              <ArrowDownLeft className="w-4 h-4 mr-2" />
              Deposit
            </a>
            <a
              href="/withdraw"
              className="flex-1 text-center border border-white text-white py-2 rounded-lg font-medium hover:bg-white hover:text-gray-800 flex items-center justify-center"
            >
              <ArrowUpRight className="w-4 h-4 mr-2" />
              Withdraw
            </a>
          </div>
        </div>
      </section>

      {/* Action Icons */}
      <section className="px-4 mb-4" data-aos="fade-up">
        <div className="flex justify-between">
          {[
            {
              icon: <Plus className="w-6 h-6 text-green-600" />,
              label: "New",
              href: "/new",
            },
            {
              icon: <Send className="w-6 h-6 text-purple-600" />,
              label: "Send",
              href: "/send",
            },
            {
              icon: <ArrowDownLeft className="w-6 h-6 text-pink-600" />,
              label: "Request",
              href: "/request",
            },
            {
              icon: <History className="w-6 h-6 text-orange-600" />,
              label: "History",
              href: "/history",
            },
          ].map((action, idx) => (
            <a
              key={idx}
              href={action.href}
              className="flex flex-col items-center gap-2"
            >
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                {action.icon}
              </div>
              <span className="text-xs text-gray-600">{action.label}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Transaction Summary */}
      <section className="px-4 mb-4" data-aos="fade-right">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">
          Transaction Summary
        </h2>
        <div className="flex justify-between text-center gap-3">
          {[
            { count: 5, label: "Active" },
            { count: 28, label: "Completed" },
            { count: 1, label: "Disputes" },
          ].map((item, idx) => (
            <div key={idx} className="flex-1 border rounded-lg p-3">
              <div className="text-2xl font-bold text-gray-900">
                {item.count}
              </div>
              <div className="text-sm text-gray-500">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Transactions */}
      <section className="px-4" data-aos="fade-up">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold text-gray-900">
            Recent Transactions
          </h2>
          <a href="/transactions" className="text-gray-600 text-sm">
            View All
          </a>
        </div>

        <div className="space-y-3">
          {transactions.map((tx, idx) => (
            <div
              key={tx.id}
              className="bg-white border rounded-lg shadow-sm p-4"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <ShoppingBag className={`w-5 h-5 ${tx.iconColor}`} />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">{tx.title}</div>
                  <div className="text-sm text-gray-500">{tx.subtitle}</div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-gray-900">{tx.amount}</div>
                  <span
                    className={`text-xs px-2 py-1 rounded ${tx.statusColor}`}
                  >
                    {tx.status}
                  </span>
                </div>
              </div>
              <div className="mt-3 flex justify-end">
                <a
                  href={tx.href}
                  className="text-gray-600 text-sm hover:underline"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Floating Plus Button */}
      <a
        href="/new"
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-[#0B2C45] hover:bg-gray-900 text-white shadow-xl flex items-center justify-center z-30"
        data-aos="zoom-in"
      >
        <Plus className="w-7 h-7" />
      </a>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-sm flex justify-around items-center h-16 z-10">
        <a
          href="/dashboard"
          className="flex flex-col items-center text-gray-600 hover:text-[#0B2C45]"
        >
          <Home className="w-5 h-5" />
          <span className="text-xs">Home</span>
        </a>

        <a
          href="/history"
          className="flex flex-col items-center text-gray-600 hover:text-[#0B2C45]"
        >
          <History className="w-5 h-5" />
          <span className="text-xs">History</span>
        </a>

        <a
          href="/settings"
          className="flex flex-col items-center text-gray-600 hover:text-[#0B2C45]"
        >
          <Settings className="w-5 h-5" />
          <span className="text-xs">Settings</span>
        </a>
      </nav>
    </div>
  );
};

export default Dashboard;
