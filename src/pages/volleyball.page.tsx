import React, { useRef, useState } from "react";

import Quiz from "../assets/quiz.svg";
import { Form } from "../components/form/formParent.component";

interface Props {}

export const VolleyballPage: React.FC<Props> = () => {
  const toRender = {
    isFirstName: true,
    isLastName: true,
    isGroupSize: true,
    isDetails: true,
    isProblem: true,
    isContact: true,
  };

  return (
    <main>
      <section className="flex mt-20 mb-10 justify-center gap-10 flex-wrap">
        <h1 className="w-96 text-3xl">Užpildykite trumpą klausimyną</h1>
        <img src={Quiz} alt="quiz-img" className="w-96" />
      </section>
      <section className="grid place-items-center">
        <Form toRender={toRender} whereToSend="volleyballOrders" />
      </section>
    </main>
  );
};
