import React, { useEffect, useContext, useState } from "react";
import { faStar, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as farFaStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { componentContent } from "../translation";
import { languageContext } from "../App";

interface Props {}

export const StartClients: React.FC<Props> = () => {
  const tempArr = ["Jonas", "Petras", "UAB Tinklininkai", "Ignas"];

  const { language } = useContext(languageContext);
  const [componentContentState, setComponentContentState] = useState(
    componentContent[language]
  );
  useEffect(() => {
    setComponentContentState(componentContent[language]);
  }, [language]);

  return (
    <section className="flex justify-center items-center flex-col text-center w-full m-auto mb-12 md:mb-24">
      <h2 className="text-3xl pb-4">
        {componentContentState.startClients.title}
      </h2>
      <span className="opacity-70 w-96 mb-16 mt-2">
        {componentContentState.startClients.summary}.
      </span>
      <div className="flex border-t-2 border-b-2 p-5 w-full justify-center flex-wrap pb-0">
        {tempArr.map((el, i) => (
          <div
            className="flex flex-col mx-7 rounded-full border-2 w-36 h-36 justify-center mb-5 last:mb-5"
            key={i}
          >
            <div>
              <FontAwesomeIcon
                icon={faUserAlt}
                className="fa-3x text-green-600"
              ></FontAwesomeIcon>
            </div>
            <span>{el}</span>
            <div>
              <FontAwesomeIcon
                icon={faStar}
                className="text-green-600"
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                icon={faStar}
                className="text-green-600"
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                icon={faStar}
                className="text-green-600"
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                icon={faStar}
                className="text-green-600"
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                icon={farFaStar}
                className="text-green-600"
              ></FontAwesomeIcon>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
