import React, { useEffect, useState, useContext } from "react";

import RecommendImg from "../assets/personal.svg";
import { Form } from "../components/form/formParent.component";
import { pageContent } from "../translation";
import { languageContext } from "../App";

interface Props {}

export const RecommendationPage: React.FC<Props> = () => {
  const { language } = useContext(languageContext);
  const [pageContentState, setPageContentState] = useState(
    pageContent[language]
  );
  useEffect(() => {
    setPageContentState(pageContent[language]);
  }, [language]);

  const toRender = {
    isFirstName: true,
    isLastName: true,
    isGroupSize: false,
    isDetails: true,
    isProblem: true,
    isContact: true,
  };

  return (
    <main>
      <section className="flex mt-20 mb-10 justify-center gap-10 flex-wrap">
        <h1 className="w-96 text-3xl">
          {pageContentState.recommendation.title}
        </h1>
        <img src={RecommendImg} alt="quiz-img" className="w-96" />
      </section>
      <section className="grid place-items-center">
        <Form toRender={toRender} whereToSend="recommendationOrders" />
      </section>
    </main>
  );
};
