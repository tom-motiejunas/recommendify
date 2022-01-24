import React, { useEffect, useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { componentContent } from "../translation";
import { languageContext } from "../App";

interface Props {}

export const Footer: React.FC<Props> = () => {
  const { language } = useContext(languageContext);
  const [componentContentState, setComponentContentState] = useState(
    componentContent[language]
  );
  useEffect(() => {
    setComponentContentState(componentContent[language]);
  }, [language]);

  return (
    <footer className="relative bg-blue-100 pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl fonat-semibold pb-3">
              {componentContentState.footer.socialNetworks}
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
              {componentContentState.footer.platforms}
            </h5>
            <div className="mt-6 lg:mb-0 mb-6">
              <button
                className="bg-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 ml-auto">
                <span className="block uppercase text-gray-500 text-sm font-semibold mb-2">
                  {componentContentState.footer.links.title}
                </span>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      className="text-blueGray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                      to="service"
                    >
                      {componentContentState.footer.links.services}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-blueGray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                      to="about"
                    >
                      {componentContentState.footer.links.aboutMe}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-blueGray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                      to="contact"
                    >
                      {componentContentState.footer.links.contacts}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Copyright © <span id="get-current-year">2021</span>
              <a
                href="#"
                className="text-blueGray-500 hover:text-gray-800"
                target="_blank"
              />{" "}
              <a href="#" className="text-blueGray-500 hover:text-blueGray-800">
                Tomas Motiejūnas
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
