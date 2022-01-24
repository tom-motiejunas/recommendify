import React, { useContext, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { pageContent } from "../translation";
import { languageContext } from "../App";

interface Props {}

export const ErrorPage: React.FC<Props> = () => {
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
        icon={faTimesCircle}
        className="text-red-500 text-6xl mb-5"
      ></FontAwesomeIcon>
      <h1 className="text-3xl mb-2">{pageContentState.error.info}</h1>
      <Link to={"/"}>
        <button className="cursor-pointer p-2 bg-blue-500 text-white w- mt-5">
          {pageContentState.error.button}
        </button>
      </Link>
    </main>
  );
};
