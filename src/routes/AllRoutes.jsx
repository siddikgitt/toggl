import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../components/Footer/Footer";
//import Homepage from "../pages/Homepage";
import Navbar from "../components/Navbar/Navbar";


const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              {/* <Homepage /> */}
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default AllRoutes;
