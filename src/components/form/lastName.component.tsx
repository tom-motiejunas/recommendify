import React from "react";

import { ErrorMsg } from "../errorMsg.component";

interface Props {
  validateInput: Function;
  internReg: RegExp;
  lastName: Array<string>;
}

export const LastNameForm: React.FC<Props> = ({
  validateInput,
  internReg,
  lastName,
}) => {
  return (
    <div className="flex flex-col mb-5">
      <label htmlFor="lastName" className="mb-2">
        Pavardė
      </label>
      <input
        type="text"
        name="lastName"
        className="border-gray-400 p-1 
    border-solid border-[1px] outline-blue-500 names"
        onChange={(e) => validateInput("lastName", e, 50, internReg, true)}
      />
      {lastName
        ? lastName.map((el, index) => {
            return <ErrorMsg key={index} message={el}></ErrorMsg>;
          })
        : null}
    </div>
  );
};
