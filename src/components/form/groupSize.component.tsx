import React from "react";

import { ErrorMsg } from "../errorMsg.component";

interface Props {
  groupSize: Array<string>;
  removeError: Function;
}

export const GroupSizeForm: React.FC<Props> = ({ groupSize, removeError }) => {
  return (
    <div className="mb-5">
      <label htmlFor="">Tinklinio grupės dydis</label>
      <div className="mt-2">
        <div>
          <input
            type="radio"
            name="group-size"
            className="mr-2 cursor-pointer mb-2 group-size"
            value="Up to 50"
            onChange={() => removeError("groupSize")}
          />
          <label htmlFor="fifty-size">Iki 50 narių</label>
        </div>
        <div>
          <input
            type="radio"
            name="group-size"
            className="mr-2 cursor-pointer mb-2 group-size"
            value="Up to 100"
            onChange={() => removeError("groupSize")}
          />
          <label htmlFor="fifty-size">Iki 100 narių</label>
        </div>
        <div>
          <input
            type="radio"
            name="group-size"
            className="mr-2 cursor-pointer group-size"
            value="More than 100"
            onChange={() => removeError("groupSize")}
          />
          <label htmlFor="fifty-size">Virš 100 narių</label>
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
