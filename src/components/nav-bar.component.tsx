import React, { useEffect } from "react";
import { Link } from "react-router-dom";

interface Props {}

export const NavBar: React.FC<Props> = () => {
  function addSelected(e: React.MouseEvent<HTMLLIElement, MouseEvent>) {
    let target = e.target as HTMLHeadingElement;

    const allListItems =
      document.querySelectorAll<HTMLLIElement>(".list-item a");
    allListItems.forEach((el) => el.classList.remove("selected"));

    // If clicks on li element instead of h2
    if (target instanceof HTMLLIElement) {
      target = target.children[0] as HTMLHeadingElement;
    }
    target.classList.add("selected");
  }

  useEffect(() => {
    const urlString = window.location.href;
    const whichPageArr = urlString.split("/");
    const whichPage = whichPageArr.pop();

    const allListItems =
      document.querySelectorAll<HTMLLIElement>(".list-item a");
    allListItems.forEach((el) => el.classList.remove("selected"));
    switch (whichPage) {
      case "": // home page
        allListItems[0].classList.add("selected");
        break;
      case "service":
        allListItems[1].classList.add("selected");
        break;
      case "about":
        allListItems[2].classList.add("selected");
        break;
      case "contact":
        allListItems[3].classList.add("selected");
        break;
    }
  }, []);

  return (
    <nav className="bg-blue-500 text-white w-full h-14 pl-5">
      <div className="container grid grid-cols-2 gap-4 w-full h-full items-center">
        <div className="wrapper rows-span-4 flex justify-start">
          <h2 className="logo-font text-xl">Recommendify</h2>
        </div>
        <ul className="flex row-span-1 justify-center">
          <li
            onClick={(e) => addSelected(e)}
            className="list-item p-1 mt-2 cursor-pointer  text-center "
          >
            <Link
              to="/"
              className="border-b-2 p-2 w-full hover:bg-blue-400 selected"
            >
              Pradžia
            </Link>
          </li>
          <li
            onClick={(e) => addSelected(e)}
            className="list-item p-1 mt-2  cursor-pointer  text-center"
          >
            <Link
              to="/service"
              className="border-b-2 p-2 w-full hover:bg-blue-400"
            >
              Paslaugos
            </Link>
          </li>
          <li
            onClick={(e) => addSelected(e)}
            className="list-item p-1 mt-2 cursor-pointer  text-cente"
          >
            <Link
              to="/about"
              className="border-b-2 p-2 w-full hover:bg-blue-400"
            >
              Apie Mane
            </Link>
          </li>
          <li
            onClick={(e) => addSelected(e)}
            className="list-item p-1 mt-2  cursor-pointer  text-cente"
          >
            <Link
              to="/contact"
              className="border-b-2 p-2 w-full hover:bg-blue-400"
            >
              Kontaktai
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
