import React from "react";

import { ErrorMsg } from "../errorMsg.component";

interface Props {
  validateInput: Function;
  internReg: RegExp;
  firstName: Array<string>;
}

export const FirstNameForm: React.FC<Props> = ({
  validateInput,
  internReg,
  firstName,
}) => {
  return (
    <div className="flex flex-col mb-5">
      <label htmlFor="firstName" className="mb-2">
        Vardas
      </label>
      <input
        type="text"
        name="firstName"
        className="border-gray-400 p-1 
            border-solid border-[1px] outline-blue-500 names"
        onChange={(e) => validateInput("firstName", e, 20, internReg, true)}
      />
      {firstName
        ? firstName.map((el, index) => {
            return <ErrorMsg key={index} message={el}></ErrorMsg>;
          })
        : null}
    </div>
  );
};
