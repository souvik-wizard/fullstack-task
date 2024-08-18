import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SearchBar from "./SearchComponent";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <SearchBar />
      <Footer />
    </div>
  );
};

export default Home;
