import React, { useEffect, useContext, useState } from "react";

import { ErrorMsg } from "../errorMsg.component";
import { componentContent } from "../../translation";
import { languageContext } from "../../App";

interface Props {
  validateInput: Function;
  details: Array<string>;
}

export const DetailsForm: React.FC<Props> = ({ validateInput, details }) => {
  const { language } = useContext(languageContext);
  const [componentContentState, setComponentContentState] = useState(
    componentContent[language]
  );
  useEffect(() => {
    setComponentContentState(componentContent[language]);
  }, [language]);

  return (
    <div className="mb-5 flex flex-col">
      <label htmlFor="details">
        {componentContentState.form.details.title}
      </label>
      <textarea
        name="details"
        cols={30}
        rows={10}
        className=" border-gray-400 p-3 mt-2 border-solid border-[1px] outline-blue-500 details"
        onChange={(e) => validateInput("details", e, 500, null, true)}
      ></textarea>

      {details
        ? details.map((el, index) => {
            return <ErrorMsg key={index} message={el}></ErrorMsg>;
          })
        : null}
    </div>
  );
};
