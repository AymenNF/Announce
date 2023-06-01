import React from "react";
import { announce, user, cart } from "../images";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="w-screen h-20 bg-[#FCFBFB] border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <div>
        <Link to="/home"><img className="w-28 cursor-pointer" src={announce} alt="" /></Link>
        </div>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="text-base text-black font-bold hover:text-blue-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer">
              <Link to="/home">Home</Link>
            </li>
            <li className="text-base text-black font-bold hover:text-blue-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer">
              <Link to="/announce">Announce</Link>
            </li>
            <li className="text-base text-black font-bold hover:text-blue-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          
          <div>
            <img
              className="w-8 h-8 rounded-full hover:text-blue-900 underline-offset-2 decoration-[1px] cursor-pointer"
              src={user}
              alt="user"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
