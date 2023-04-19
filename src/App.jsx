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
import PrivateRoute from "./components/PrivateRoute";
import ProtectedRoute from "./components/ProtectedRoute";
import Account from "./pages/account";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Navbar />

        <Routes>
          <Route element={<ProtectedRoute allowedRoles={["admin"]}/>}>
            <Route element={<Home />} path="/" exact />
            <Route element={<Admin />} path="/admin" />
          </Route>

          <Route element={<ProtectedRoute allowedRoles={["admin", "patient"]}/>}>
            <Route element={<Patient />} path="/patient"  />
            <Route element={<Account />} path="/account"  />
          </Route>

          <Route element={<ProtectedRoute allowedRoles={["admin", "doctor"]}/>}>
            <Route element={<Doctor />} path="/doctor"  />
          </Route>

          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
