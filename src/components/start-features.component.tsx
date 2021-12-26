import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDove,
  faInfoCircle,
  faPencilAlt,
} from "@fortawesome/free-solid-svg-icons";

interface Props {}

export const StartFeatures: React.FC<Props> = () => {
  return (
    <section className="flex max-w-5xl m-auto justify-evenly mb-8 md:mb-32 flex-col md:flex-row">
      <div className="flex-1 mx-5 mb-8">
        <FontAwesomeIcon
          icon={faDove}
          className="fa-2x mb-2 text-blue-600"
        ></FontAwesomeIcon>
        <h3 className="text-xl font-semibold mb-2 mt-3">Greitas Atsakymas</h3>
        <span className="opacity-70">
          Užsisakę paslaugą gausite atsakymą per 2-3 darbo dienas.
        </span>
      </div>
      <div className="flex-1 mx-5 mb-8">
        <FontAwesomeIcon
          icon={faPencilAlt}
          className="fa-2x mb-2 text-blue-600"
        ></FontAwesomeIcon>
        <h3 className="text-xl font-semibold mb-2 mt-3">
          Paprasta Registracija
        </h3>
        <span className="opacity-70">
          Registracijai užtenka tik elektroninio pašto arba telefono numerio.
        </span>
      </div>
      <div className="flex-1 mx-5 mb-8">
        <FontAwesomeIcon
          icon={faInfoCircle}
          className="fa-2x mb-2 text-blue-600"
        ></FontAwesomeIcon>
        <h3 className="text-xl font-semibold mb-2 mt-3">
          Tikslinga Informacija{" "}
        </h3>
        <span className="opacity-70">
          Parūpinu atsakymus, kurie tiksliai atsako į probleminę sritį.
        </span>
      </div>
    </section>
  );
};
