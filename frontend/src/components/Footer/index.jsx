import React from "react";

const Footer = () => {
  return (
    <footer className=" lg:flex grid grid-cols-2 justify-around w-full bg-black text-white px-8 lg:px-20 py-8 lg:h-[320px] gap-8">
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-lg">Abstract</h1>
        <p className="text-sm cursor-pointer">Branches</p>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="font-bold  text-lg">Resources</h1>
        <div className="text-sm flex flex-col gap-1 cursor-pointer">
          <p>Help Center</p>
          <p>Blog</p>
          <p>Status</p>
          <p>Release Notes</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="font-bold  text-lg">Community</h1>
        <div className="text-sm flex flex-col gap-1 cursor-pointer">
          <p>Linkedin</p>
          <p>Twitter</p>
          <p>Facebook</p>
          <p>Dribble</p>
          <p>Podcast</p>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold  text-lg">Company</h1>
          <div className="text-sm flex flex-col gap-1 cursor-pointer">
            <p>About us</p>
            <p>Careers</p>
            <p>Legal</p>
          </div>
        </div>
        <div>
          <h1 className="font-bold  text-lg">Contact Us</h1>
          <a className="text-sm" href="mailto:info@abstract.com">
            info@abstract.com
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-end">
        <img src="https://i.imgur.com/3EMvh4O.png" className="w-12" alt="" />
        <p>© Copyright 2022</p>
        <p>Abstract Studio Design, Inc</p>
        <p>All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
