import React, { useEffect, useContext, useState } from "react";

import { ErrorMsg } from "../errorMsg.component";
import { componentContent } from "../../translation";
import { languageContext } from "../../App";

interface Props {
  groupSize: Array<string>;
  removeError: Function;
}

export const GroupSizeForm: React.FC<Props> = ({ groupSize, removeError }) => {
  const { language } = useContext(languageContext);
  const [componentContentState, setComponentContentState] = useState(
    componentContent[language]
  );
  useEffect(() => {
    setComponentContentState(componentContent[language]);
  }, [language]);

  return (
    <div className="mb-5">
      <label htmlFor="">{componentContentState.form.groupSize.title}</label>
      <div className="mt-2">
        <div>
          <input
            type="radio"
            name="group-size"
            className="mr-2 cursor-pointer mb-2 group-size"
            value="Up to 50"
            onChange={() => removeError("groupSize")}
          />
          <label htmlFor="fifty-size">
            {componentContentState.form.groupSize.upToFifty}
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="group-size"
            className="mr-2 cursor-pointer mb-2 group-size"
            value="Up to 100"
            onChange={() => removeError("groupSize")}
          />
          <label htmlFor="fifty-size">
            {componentContentState.form.groupSize.upToOneHundred}
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="group-size"
            className="mr-2 cursor-pointer group-size"
            value="More than 100"
            onChange={() => removeError("groupSize")}
          />
          <label htmlFor="fifty-size">
            {componentContentState.form.groupSize.moreThanOneHundred}
          </label>
        </div>
        {groupSize
          ? groupSize.map((el, index) => {
              return <ErrorMsg key={index} message={el}></ErrorMsg>;
            })
          : null}
      </div>
    </div>
  );
};
