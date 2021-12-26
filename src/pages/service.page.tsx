import React from "react";
import { Routes, Route } from "react-router";

import { ServiceHome } from "../components/serviceHome.component";
import { RecommendationPage } from "./recommendation.page";
import { VolleyballPage } from "./volleyball.page";

interface Props {}

export const ServicePage: React.FC<Props> = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ServiceHome />}></Route>
        <Route path="/volleyball" element={<VolleyballPage />}></Route>
        <Route path="/recommendations" element={<RecommendationPage />}></Route>
      </Routes>
    </div>
  );
};
