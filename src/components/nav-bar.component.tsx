import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import lithuaniaFlag from "../assets/lithuania.svg";
import UKFlag from "../assets/uk.svg";

import { componentContent } from "../translation";
import { languageContext } from "../App";

interface Props {}

export const NavBar: React.FC<Props> = () => {
  let { language, setLanguage } = useContext(languageContext);

  const [componentContentState, setComponentContentState] = useState(
    componentContent[language]
  );
  useEffect(() => {
    setComponentContentState(componentContent[language]);
  }, [language]);

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

  function changeLanguage(inputLanguage: string) {
    setLanguage(inputLanguage);
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
      <div className="grid grid-cols-3 w-full h-full items-center px-5 max-w-7xl m-auto">
        <div className="wrapper rows-span-4 flex justify-start">
          <h2 className="logo-font text-xl">Recommendify</h2>
        </div>
        <ul className="flex row-span-1 justify-center w-[400px] pb-3">
          <li
            onClick={(e) => addSelected(e)}
            className="list-item p-1 mt-2 cursor-pointer text-center"
          >
            <Link
              to="/"
              className="border-b-2 p-2 w-full hover:bg-blue-400 selected"
            >
              {componentContentState.navBar.home}
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
              {componentContentState.navBar.services}
            </Link>
          </li>
          <li
            onClick={(e) => addSelected(e)}
            className="list-item p-1 mt-2 cursor-pointer text-center"
          >
            <Link
              to="/about"
              className="border-b-2 p-2 w-full hover:bg-blue-400"
            >
              {componentContentState.navBar.aboutMe}
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
              {componentContentState.navBar.contacts}
            </Link>
          </li>
        </ul>
        <div className="flags flex flex-row gap-4 items-end justify-end">
          <button onClick={() => changeLanguage("Lithuanian")}>
            <img src={lithuaniaFlag} alt="lt-flag" className="w-7" />
          </button>
          <button onClick={() => changeLanguage("English")}>
            <img src={UKFlag} alt="uk-flag" className="w-7" />
          </button>
        </div>
      </div>
    </nav>
  );
};
