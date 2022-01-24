import React, { useState, useContext, useEffect } from "react";

import { Link } from "react-router-dom";
import { componentContent } from "../translation";
import { languageContext } from "../App";

interface Props {}

import RecommendImg from "../assets/recommendation.svg";
import MarketingImg from "../assets/marketing.svg";

export const ServiceHome: React.FC<Props> = () => {
  const { language } = useContext(languageContext);
  const [componentContentState, setComponentContentState] = useState(
    componentContent[language]
  );
  useEffect(() => {
    setComponentContentState(componentContent[language]);
  }, [language]);

  return (
    <main className="mt-20">
      <h1 className="text-3xl text-center mb-5">
        {componentContentState.serviceHome.title}
      </h1>
      <div className="service-container flex flex-col justify-center max-w-5xl m-auto md:my-12">
        <Link className="w-full mb-5 cursor-pointer group" to={"volleyball"}>
          <div className="w-full h-64 bg-blue-100 group-hover:translate-y-[-25px] transition-transform">
            <img src={MarketingImg} alt="" className=" w-full h-full" />
          </div>
          <h2 className="text-center p-5 text-xl">
            {componentContentState.serviceHome.volleyball}
          </h2>
        </Link>
        <Link
          className="w-full mb-5 cursor-pointer group"
          to={"recommendations"}
        >
          <div className="w-full h-64 bg-blue-100 group-hover:translate-y-[-25px] transition-transform">
            <img src={RecommendImg} alt="" className=" w-full h-full" />
          </div>
          <h2 className="text-center p-5 text-xl">
            {componentContentState.serviceHome.recommendations}
          </h2>
        </Link>
      </div>
    </main>
  );
};
