import React, { useEffect, useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

interface Props {}

import { pageContent } from "../translation";
import { languageContext } from "../App";

export const SuccessPage: React.FC<Props> = () => {
  const { language } = useContext(languageContext);
  const [pageContentState, setPageContentState] = useState(
    pageContent[language]
  );
  useEffect(() => {
    setPageContentState(pageContent[language]);
  }, [language]);
  return (
    <main className="w-full h-screen flex justify-center items-center flex-col pb-10">
      <FontAwesomeIcon
        icon={faCheckCircle}
        className="text-green-500 text-6xl mb-5"
      ></FontAwesomeIcon>
      <h1 className="text-3xl mb-2">{pageContentState.success.info}</h1>
      <Link to={"/"}>
        <button className="cursor-pointer p-2 bg-blue-500 text-white w- mt-5">
          {pageContentState.success.button}
        </button>
      </Link>
    </main>
  );
};
