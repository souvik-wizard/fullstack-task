import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

export const Layout = () => {
  return (
    <main className="h-screen overflow-y-auto">
      <Navbar />
      <Outlet />
      <Footer />
      <Toaster position="top-center" reverseOrder={false} />
    </main>
  );
};
