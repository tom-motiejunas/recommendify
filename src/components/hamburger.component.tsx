import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfo,
  faPhone,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

interface Props {}

export const Hamburger: React.FC<Props> = () => {
  function toggleOn() {
    const burgerList = document.querySelector(".nav-list");
    burgerList?.classList.toggle("active");
  }

  return (
    <nav className="absolute z-10 top-0 right-0 w-[100px]">
      <div
        className="burger h-14 relative flex justify-center items-center z-20 bg-gray-700 cursor-pointer transition-all hover:bg-gray-600"
        onClick={toggleOn}
      >
        <div
          className="burger-patty relative h-[2px] w-[40px] bg-white before:block before:absolute 
                        before:top-[-10px] before:left-0 before:h-[2px] before:bg-white before:w-full
                         after:absolute after:top-[10px] after:left-0 after:h-[2px] after:w-full after:bg-white"
        ></div>
      </div>
      <ul className="nav-list flex flex-col flex-wrap h-72 transition-all">
        <li className="nav-item flex-1 relative bg-gray-700 hover:bg-gray-600">
          <Link
            to="/"
            className="nav-link flex justify-center items-center absolute h-full w-full top-0 left-0 text-2xl"
          >
            <FontAwesomeIcon
              icon={faHome}
              className="text-blue-500"
            ></FontAwesomeIcon>
          </Link>
        </li>
        <li className="nav-item flex-1 relative bg-gray-700 hover:bg-gray-600">
          <Link
            to="/service"
            className="nav-link nav-link flex justify-center items-center absolute h-full w-full top-0 left-0 text-2xl"
          >
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="text-yellow-400"
            ></FontAwesomeIcon>
          </Link>
        </li>
        <li className="nav-item flex-1 relative bg-gray-700 hover:bg-gray-600">
          <Link
            to="/about"
            className="nav-link nav-link flex justify-center items-center absolute h-full w-full top-0 left-0 text-2xl"
          >
            <FontAwesomeIcon
              icon={faInfo}
              className="text-red-500"
            ></FontAwesomeIcon>
          </Link>
        </li>
        <li className="nav-item flex-1 relative bg-gray-700 hover:bg-gray-600">
          <Link
            to="/contact"
            className="nav-link nav-link flex justify-center items-center absolute h-full w-full top-0 left-0 text-2xl"
          >
            <FontAwesomeIcon
              icon={faPhone}
              className="text-green-500"
            ></FontAwesomeIcon>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
