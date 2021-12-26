import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { Form } from "../components/form/formParent.component";

interface Props {}

export const ContactPage: React.FC<Props> = () => {
  const toRender = {
    isFirstName: true,
    isLastName: true,
    isGroupSize: false,
    isDetails: true,
    isProblem: false,
    isContact: true,
  };
  return (
    <div>
      <h1 className="text-center text-3xl mt-20 mb-10">Susisiek su manim</h1>
      <section>
        <div className="grid place-items-center mb-10">
          <h2 className="text-2xl mb-2">Socialiniai Tinklai</h2>
          <div>
            <a href="#" className="text-blue-500 mr-5">
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-3xl"
              ></FontAwesomeIcon>
            </a>
            <a href="#" className="text-blue-300 mr-5">
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-3xl"
              ></FontAwesomeIcon>
            </a>
            <a href="#" className="text-blue-600 mr-5">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-3xl"
              ></FontAwesomeIcon>
            </a>
          </div>
        </div>
        <div className="grid place-items-center mb-10">
          <h2 className="text-2xl mb-2">Telefono Numeris</h2>
          <span className="text-2xl">+370 600 00000</span>
        </div>
      </section>
      <div className="border-t-[1px] border-solid border-black h-[1px] grid place-items-center mx-20">
        <p className="text-center text-xl m-[-20px] bg-white w-16 ">Arba</p>
      </div>
      <section className="mt-10 grid place-items-center">
        <Form whereToSend="contacts" toRender={toRender} />
      </section>
    </div>
  );
};
