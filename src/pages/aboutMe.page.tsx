import React from "react";

import randomPerson from "../assets/random-person.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt, faStoreAlt } from "@fortawesome/free-solid-svg-icons";

interface Props {}

export const AboutMePage: React.FC<Props> = () => {
  return (
    <div>
      <div className="flex justify-center gap-10 mt-28 mb-10 flex-wrap">
        <h1 className="text-3xl text-center grid place-items-center md:mb-40 md:mr-20">
          Apie Mane
        </h1>
        <aside className="mx-10 md:mx-0">
          <img src={randomPerson} alt="person-img" className="md:w-96" />
        </aside>
      </div>
      <aside>
        <img src="" alt="" />
      </aside>
      <section>
        <h2 className="text-center p-5 text-2xl sm:mb-10">Statistika</h2>
        <div className="mx-20 mb-10 flex justify-center flex-wrap">
          <div className="flex flex-col items-center justify-center bg-blue-500 rounded-full w-48 h-48 sm:mr-20 mb-10">
            <FontAwesomeIcon
              icon={faUserAlt}
              className="fa-3x text-white mb-2  "
            ></FontAwesomeIcon>
            <span className="text-center text-3xl text-white">40</span>
            <h3 className="text-center text-white">Aptarnautų klientų</h3>
          </div>
          <div className="flex flex-col items-center justify-center bg-blue-500 rounded-full w-48 h-48">
            <FontAwesomeIcon
              icon={faStoreAlt}
              className="fa-3x text-white mb-2"
            ></FontAwesomeIcon>
            <span className="text-center text-3xl text-white">10</span>
            <h3 className="text-center text-white">Aptarnautų įmonių</h3>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-center p-5 text-2xl">Patirtis</h2>
        <p className=" text-justify text-lg mx-5 sm:mx-20 mb-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
          repudiandae? Obcaecati, voluptate! Minus veniam autem repudiandae
          debitis, rerum non at ullam tempora minima nemo? Dolorum harum nemo
          consequuntur, assumenda quos laborum sequi rem non esse corrupti
          consequatur porro dignissimos laboriosam cumque explicabo eveniet
          provident, velit maiores, magni facilis possimus recusandae!
        </p>
      </section>
    </div>
  );
};
