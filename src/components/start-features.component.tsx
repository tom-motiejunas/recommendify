import React, { useEffect, useContext, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDove,
  faInfoCircle,
  faPencilAlt,
} from "@fortawesome/free-solid-svg-icons";
import { componentContent } from "../translation";
import { languageContext } from "../App";

interface Props {}

export const StartFeatures: React.FC<Props> = () => {
  const { language } = useContext(languageContext);
  const [componentContentState, setComponentContentState] = useState(
    componentContent[language]
  );
  useEffect(() => {
    setComponentContentState(componentContent[language]);
  }, [language]);

  return (
    <section className="flex max-w-5xl m-auto justify-evenly mb-8 md:mb-32 flex-col md:flex-row">
      <div className="flex-1 mx-5 mb-8">
        <FontAwesomeIcon
          icon={faDove}
          className="fa-2x mb-2 text-blue-600"
        ></FontAwesomeIcon>
        <h3 className="text-xl font-semibold mb-2 mt-3">
          {componentContentState.startFeatures.quickTitle}
        </h3>
        <span className="opacity-70">
          {componentContentState.startFeatures.quickSummary}
        </span>
      </div>
      <div className="flex-1 mx-5 mb-8">
        <FontAwesomeIcon
          icon={faPencilAlt}
          className="fa-2x mb-2 text-blue-600"
        ></FontAwesomeIcon>
        <h3 className="text-xl font-semibold mb-2 mt-3">
          {componentContentState.startFeatures.registrationTitle}
        </h3>
        <span className="opacity-70">
          {componentContentState.startFeatures.registrationSummary}
        </span>
      </div>
      <div className="flex-1 mx-5 mb-8">
        <FontAwesomeIcon
          icon={faInfoCircle}
          className="fa-2x mb-2 text-blue-600"
        ></FontAwesomeIcon>
        <h3 className="text-xl font-semibold mb-2 mt-3">
          {componentContentState.startFeatures.informationTitle}
        </h3>
        <span className="opacity-70">
          {componentContentState.startFeatures.informationSummary}
        </span>
      </div>
    </section>
  );
};
