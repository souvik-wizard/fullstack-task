import React from "react";
import { useState } from "react";
import PrimaryButton from "../PrimaryButton/index.js";
import Modal from "../Modal/Modal.jsx";
import CreateCard from "../CreateCard/index.jsx";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <nav className="h-auto bg-black py-2 md:px-12 px-4 text-white flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="flex justify-center items-center font-bold">
          <img
            className="w-12"
            src="https://i.imgur.com/3EMvh4O.png"
            alt="logo"
          />
          <h1>Abstract</h1>
        </div>
        <p className="border-l pl-2">Help Center</p>
      </div>
      <div className="flex gap-4">
        <PrimaryButton label={"Submit a request"} onClick={openModal} />
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <CreateCard />
        </Modal>
      </div>
    </nav>
  );
};

export default Navbar;
