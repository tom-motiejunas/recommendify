import React, { useState, useContext, useEffect } from "react";

import { ErrorMsg } from "../errorMsg.component";
import { componentContent } from "../../translation";
import { languageContext } from "../../App";

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
  const { language } = useContext(languageContext);
  const [componentContentState, setComponentContentState] = useState(
    componentContent[language]
  );
  useEffect(() => {
    setComponentContentState(componentContent[language]);
  }, [language]);

  return (
    <div className="flex flex-col mb-5">
      <label htmlFor="firstName" className="mb-2">
        {componentContentState.form.firstName.title}
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
