import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

interface Props {}

export const ErrorPage: React.FC<Props> = () => {
  return (
    <main className="w-full h-screen flex justify-center items-center flex-col pb-10">
      <FontAwesomeIcon
        icon={faTimesCircle}
        className="text-red-500 text-6xl mb-5"
      ></FontAwesomeIcon>
      <h1 className="text-3xl">Užsakymas nebuvo išsiųstas</h1>
      <Link to={"/"}>
        <button className="cursor-pointer p-2 bg-blue-500 text-white w- mt-5">
          Grįžti į pradžią
        </button>
      </Link>
    </main>
  );
};
