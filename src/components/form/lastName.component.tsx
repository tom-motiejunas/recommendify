import React, { useState, useContext, useEffect } from "react";

import { ErrorMsg } from "../errorMsg.component";
import { componentContent } from "../../translation";
import { languageContext } from "../../App";

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
  const { language } = useContext(languageContext);
  const [componentContentState, setComponentContentState] = useState(
    componentContent[language]
  );
  useEffect(() => {
    setComponentContentState(componentContent[language]);
  }, [language]);

  return (
    <div className="flex flex-col mb-5">
      <label htmlFor="lastName" className="mb-2">
        {componentContentState.form.lastName.title}
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
