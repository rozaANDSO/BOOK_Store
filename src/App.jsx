import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./componenet/Navbar";
import { AuthProvider } from "./context/AuthContext";
import Footer from "./componenet/Footer";


const App = () => {
  return (
    <>
      <AuthProvider>
        <nav>
          <Navbar />
        </nav>
        <main className="min-h-screen max-w-2xl mx-auto py-6">
          <Outlet />
        </main>
        <Footer/>
      </AuthProvider>
    </>
  );
};

export default App;
