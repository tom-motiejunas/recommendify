import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

interface Props {
  message: string;
}

export const ErrorMsg: React.FC<Props> = ({ message }) => {
  return (
    <div className="flex mt-2 gap-2 items-center text-red-500">
      <FontAwesomeIcon icon={faExclamationCircle}></FontAwesomeIcon>
      <p>{message}</p>
    </div>
  );
};
