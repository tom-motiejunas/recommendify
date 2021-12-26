import React, { useRef } from "react";

import { ErrorMsg } from "../errorMsg.component";

interface Props {
  validateInput: Function;
  contact: Array<string>;
  email: Array<string> | undefined;
  phone: Array<string> | undefined;
  emailReg: RegExp;
}

export const ContactForm: React.FC<Props> = ({
  validateInput,
  contact,
  emailReg,
  email,
  phone,
}) => {
  const phoneChoice = useRef<HTMLInputElement>(null);
  const emailChoice = useRef<HTMLInputElement>(null);

  function onChoose(
    e: React.ChangeEvent<HTMLInputElement>,
    choise: HTMLInputElement | null
  ) {
    if (!choise) return;
    if (e.target.checked) {
      choise.style.height = "100px";
    } else {
      choise.style.height = "0px";
    }
  }

  return (
    <div className="mb-5">
      <label htmlFor="">Susisiekti</label>
      <div className="flex flex-col">
        <div className="mt-2">
          <input
            type="checkbox"
            name="email-choise"
            className="mr-2 cursor-pointer"
            onChange={(e) => onChoose(e, emailChoice.current)}
          />
          <label htmlFor="email-choise">Elektroniniu paštu</label>
        </div>
        <div
          className="flex flex-col mt-2 overflow-hidden h-0 transition-all"
          ref={emailChoice}
        >
          <label htmlFor="email">Elektroninis Paštas</label>
          <input
            type="text"
            name="email"
            className="border-gray-400 p-1 m-1
          border-solid border-[1px] outline-blue-500 mt-2 emailOrPhone"
            onChange={(e) => validateInput("email", e, 50, emailReg, false)}
          />
          {email?.map((el, index) => (
            <ErrorMsg key={index} message={el}></ErrorMsg>
          ))}
        </div>
      </div>
      <div className="flex flex-col mt-2">
        <div>
          <input
            type="checkbox"
            name="phone-choise"
            className="mr-2 cursor-pointer"
            onChange={(e) => onChoose(e, phoneChoice.current)}
          />
          <label htmlFor="phone-choise">Telefonu</label>
        </div>
        <div
          className="flex flex-col mt-2 overflow-hidden h-0 transition-all"
          ref={phoneChoice}
        >
          <label htmlFor="phone-num">Telefono Numeris</label>
          <input
            type="number"
            name="phone-num"
            className="border-gray-400 p-1 m-1
          border-solid border-[1px] outline-blue-500 mt-2 emailOrPhone"
            onChange={(e) => validateInput("phone", e, 20, null, true)}
          />
          {phone?.map((el, index) => (
            <ErrorMsg key={index} message={el}></ErrorMsg>
          ))}
        </div>
      </div>
      {contact
        ? contact.map((el, index) => {
            return <ErrorMsg key={index} message={el}></ErrorMsg>;
          })
        : null}
    </div>
  );
};
