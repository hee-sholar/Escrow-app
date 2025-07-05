import { useEffect, useState } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { Facebook, Twitter, Mail, Lock, Eye, EyeOff } from "lucide-react"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [remember, setRemember] = useState(false)
  const [error, setError] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    AOS.init({ duration: 800 })
  }, [])

  const handleLogin = async (e) => {
    e.preventDefault()

    if (email === "user@gmail.com" && password === "password123") {
      navigate("/dashboard")
    } else {
      setError("Invalid email or password")
    }
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-lg space-y-6" data-aos="zoom-in">
        {/* Header */}
        <div className="text-center space-y-1">
          <h1 className="text-2xl font-bold text-slate-800">Welcome Back</h1>
          <p className="text-sm text-slate-500">Login to your account</p>
        </div>

        {/* Error */}
        {error && <div className="text-sm text-red-500 text-center -mt-2">{error}</div>}

        {/* Form */}
        <form className="space-y-4" onSubmit={handleLogin}>
          {/* Email */}
          <div>
            <label htmlFor="email" className="text-sm text-slate-600 font-medium flex items-center gap-2">
              <Mail size={16} />
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 w-full px-4 py-2 text-sm border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="text-sm text-slate-600 font-medium flex items-center gap-2">
              <Lock size={16} />
              Password
            </label>
            <div className="relative mt-1">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 text-sm border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={remember}
                onChange={() => setRemember(!remember)}
                className="accent-blue-600"
              />
              Remember me
            </label>
            <button type="button" className="text-blue-600 hover:underline">
              Forgot password?
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-slate-800 text-white font-medium py-2 rounded-md hover:bg-slate-700 transition"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3">
          <div className="flex-grow h-px bg-gray-200" />
          <span className="text-xs text-slate-400">OR CONTINUE WITH</span>
          <div className="flex-grow h-px bg-gray-200" />
        </div>

        {/* Social Login */}
        <div className="flex justify-center gap-3">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
          >
            <Facebook className="text-blue-600" size={18} />
          </a>
          <a
            href="https://accounts.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
          >
            <img
              src="https://developers.google.com/identity/images/g-logo.png"
              alt="Google"
              className="w-4 h-4"
            />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
          >
            <Twitter className="text-blue-400" size={18} />
          </a>
        </div>

        {/* Signup Prompt */}
        <div className="text-center text-sm text-slate-600 pt-2">
          Don’t have an account?{" "}
          <a href="/create" className="text-blue-600 font-medium hover:underline">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  )
}

export default Login;
