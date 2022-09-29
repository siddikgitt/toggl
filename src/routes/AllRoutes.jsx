import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Homepage from "../pages/Homepage";
import Navbar from "../components/Navbar/Navbar";
import { LoginPage } from "../pages/Login/Login";
import { Timer } from "../pages/Timer";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Homepage />
              <Footer />
            </>
          }
        />
       <Route 
        path="/login"
        element={
          <>
           <Navbar />
            <LoginPage />
            <Footer />
          </>
           
        }
       />
       <Route path="/timer" element={<Timer/>}/>
      </Routes>
    </div>
  );
};

export default AllRoutes;
