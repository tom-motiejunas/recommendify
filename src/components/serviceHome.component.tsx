import React from "react";

import { Link } from "react-router-dom";

interface Props {}

import RecommendImg from "../assets/recommendation.svg";
import MarketingImg from "../assets/marketing.svg";

export const ServiceHome: React.FC<Props> = () => {
  return (
    <main className="mt-20">
      <h1 className="text-3xl text-center mb-5">Siūlomos paslaugos</h1>

      <div className="service-container flex flex-col justify-center max-w-5xl m-auto md:my-12">
        <Link className="w-full mb-5 cursor-pointer group" to={"volleyball"}>
          <div className="w-full h-64 bg-blue-100 group-hover:translate-y-[-25px] transition-transform">
            <img src={MarketingImg} alt="" className=" w-full h-full" />
          </div>
          <h2 className="text-center p-5 text-xl">Tinklinio Marketingas</h2>
        </Link>
        <Link
          className="w-full mb-5 cursor-pointer group"
          to={"recommendations"}
        >
          <div className="w-full h-64 bg-blue-100 group-hover:translate-y-[-25px] transition-transform">
            <img src={RecommendImg} alt="" className=" w-full h-full" />
          </div>
          <h2 className="text-center p-5 text-xl">Asmeninės Rekomendacijos</h2>
        </Link>
      </div>
    </main>
  );
};
