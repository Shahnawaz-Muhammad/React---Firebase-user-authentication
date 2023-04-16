import { Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./pages/admin";
import Doctor from "./pages/doctor";
import Home from "./pages/home";
import Login from "./pages/login";
import NotFound from "./pages/not-found";
import Patient from "./pages/patient";
import Register from "./pages/register";
import Navbar from "./components/Navbar";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Navbar />

        <Routes>
          <Route path="" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="patient" element={<Patient />} />
          <Route path="doctor" element={<Doctor />} />
          <Route path="admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
