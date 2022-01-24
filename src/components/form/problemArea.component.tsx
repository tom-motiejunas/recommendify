import React, { useContext, useState, useEffect } from "react";

import { ErrorMsg } from "../errorMsg.component";
import { componentContent } from "../../translation";
import { languageContext } from "../../App";

interface Props {
  validateProblemArea: VoidFunction;
  problemArea: Array<string>;
}

export const ProblemAreaForm: React.FC<Props> = ({
  problemArea,
  validateProblemArea,
}) => {
  const { language } = useContext(languageContext);
  const [componentContentState, setComponentContentState] = useState(
    componentContent[language]
  );
  useEffect(() => {
    setComponentContentState(componentContent[language]);
  }, [language]);

  return (
    <div className="mb-5">
      <label htmlFor="">{componentContentState.form.problemArea.title}</label>
      <div className="mt-2">
        <input
          type="checkbox"
          name="economic"
          className="mr-2 cursor-pointer mb-2 problem"
          value="Economic"
          onChange={validateProblemArea}
        />
        <label htmlFor="economic">
          {componentContentState.form.problemArea.economic}
        </label>
      </div>
      <div>
        <input
          type="checkbox"
          name="regulations"
          className="mr-2 cursor-pointer mb-2 problem"
          value="Legal acts, regulations"
          onChange={validateProblemArea}
        />
        <label htmlFor="regulations">
          {componentContentState.form.problemArea.regulations}
        </label>
      </div>
      <div>
        <input
          type="checkbox"
          name="company-image"
          className="mr-2 cursor-pointer mb-2 problem"
          value="Company image"
          onChange={validateProblemArea}
        />
        <label htmlFor="company-image">
          {componentContentState.form.problemArea.companyImage}
        </label>
      </div>
      <div>
        <input
          type="checkbox"
          name="advertisement"
          className="mr-2 cursor-pointer mb-2 problem"
          value="Advertisement"
          onChange={validateProblemArea}
        />
        <label htmlFor="">
          {componentContentState.form.problemArea.advertisement}
        </label>
      </div>
      <div className="flex flex-col">
        <label htmlFor="other">
          {componentContentState.form.problemArea.other}
        </label>
        <input
          type="text"
          name="other"
          className="border-gray-400 p-1
  border-solid border-[1px] outline-blue-500 mt-2 problem-other"
          onChange={validateProblemArea}
        />
      </div>
      {problemArea
        ? problemArea.map((el, index) => {
            return <ErrorMsg key={index} message={el}></ErrorMsg>;
          })
        : null}
    </div>
  );
};
