import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Details from "./pages/details/detail";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import ForgotPass from "./pages/forgotPass/forgotPass";
import Dashboard from "./pages/dashboard/dashboard";

const AppRouter = () => {
  return (
    <>
      <Router>
        <nav style={{ margin: 10 }}>
          <Link to="/" style={{ padding: 5 }}>
            Menu
          </Link>
          <Link to="/dashboard" style={{ padding: 5 }}>
            Dashboard
          </Link>
          <Link to="/home" style={{ padding: 5 }}>
            Home
          </Link>
          <Link to="/signup" style={{ padding: 5 }}>
            Sign Up
          </Link>
          <Link to="/forgotPassword" style={{ padding: 5 }}>
            Forgot Password
          </Link>
          <Link to="/detail" style={{ padding: 5 }}>
            Details
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotPassword" element={<ForgotPass />} />
          <Route path="/detail" element={<Details name="Cyril" />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;
