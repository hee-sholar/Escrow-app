import { BrowserRouter, Route, Routes } from "react-router-dom";
import First from "./page/First";
import Onboarding from "./page/Onboarding";
import Create from "./page/Create";
import Login from "./page/Login";
import Dashboard from "./page/Dashboard";
import Transaction from "./page/Transaction";
import Logout from "./page/Logout";

function App() {

  return (
    <>
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<First />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/create" element={<Create />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/new" element={<Transaction />} />
        <Route path="/logout" element={<Logout />} />
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
