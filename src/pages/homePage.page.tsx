import React, { useContext, useEffect, useState } from "react";

import workPlace from "../assets/workplace.svg";
import { StartFeatures } from "../components/start-features.component";
import { StartClients } from "../components/start-clients.component";
import { StartFaq } from "../components/start-faq.component";

import { Link } from "react-router-dom";

import { pageContent } from "../translation";
import { languageContext } from "../App";

export const HomePage: React.FC = () => {
  const { language } = useContext(languageContext);
  const [pageContentState, setPageContentState] = useState(
    pageContent[language]
  );
  useEffect(() => {
    setPageContentState(pageContent[language]);
  }, [language]);

  return (
    <div>
      <main className="flex flex-col-reverse justify-center items-center text-center max-w-5xl m-auto my-14 md:my-28 md:flex-row md:text-left">
        <section className=" px-10 text-start flex flex-col">
          <h1 className="text-4xl pb-4 pt-4">{pageContentState.home.title}</h1>
          <span className="text-lg pb-8 opacity-70">
            {pageContentState.home.summary}
          </span>
          <div>
            <Link to={"/service"}>
              <button className="w-36 h-10 bg-blue-500 text-white mb-3 md:mr-2 text-lg">
                {pageContentState.home.links.service}
              </button>
            </Link>
            <Link to={"/contact"}>
              <button className="w-36 h-10 border-2 border-black text-lg">
                {pageContentState.home.links.contacts}
              </button>
            </Link>
          </div>
        </section>
        <section className="px-10 max-w-full flex justify-center">
          <img className="w-96 h-auto" src={workPlace} alt="main-img" />
        </section>
      </main>
      <StartFeatures></StartFeatures>
      <StartClients></StartClients>
      <StartFaq></StartFaq>
    </div>
  );
};
