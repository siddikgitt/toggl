import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Homepage from "../pages/Homepage";
import Navbar from "../components/Navbar/Navbar";
import { LoginPage } from "../pages/Login/Login";
import { Signup } from "../pages/Login/Signup";
import { Timer } from "../pages/Timer";
import { Reports } from "../pages/Reports";
import { Organization } from "../pages/Organization";
import { Sidebar } from "../components/Sidebar";


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

     <Route path="/signup"
            element={ <Signup /> }
     />
       <Route path="/timer" element={<Timer/>}/>
       <Route path="/reports" element={<Reports/>}/>

      </Routes>
      
    </div>
  );
};

export default AllRoutes;
