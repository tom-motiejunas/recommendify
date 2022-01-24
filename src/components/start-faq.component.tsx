import React, { useRef, useState, useContext, useEffect } from "react";

import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { componentContent } from "../translation";
import { languageContext } from "../App";

interface Props {}

interface spanRefElements {
  [key: number]: HTMLSpanElement | never[] | null;
}
interface buttonRefElements {
  [key: number]: HTMLButtonElement | never[] | null;
}

export const StartFaq: React.FC<Props> = () => {
  const questionTemp = ["", "", "", ""];
  const itemRef = useRef<spanRefElements>([]);
  const buttonRef = useRef<buttonRefElements>([]);

  const { language } = useContext(languageContext);
  const [componentContentState, setComponentContentState] = useState(
    componentContent[language]
  );
  useEffect(() => {
    setComponentContentState(componentContent[language]);
  }, [language]);

  function hideText(index: number) {
    const item = itemRef.current[index];
    if (item instanceof HTMLSpanElement) {
      item.classList.toggle("grow");
    }
    const btn = buttonRef.current[index];
    if (btn instanceof HTMLButtonElement) {
      btn.classList.toggle("rotate-0");
    }
  }

  return (
    <section className="flex flex-col justify-center max-w-5xl m-auto md:my-28">
      <h2 className="text-3xl text-center mb-12">
        {componentContentState.startFaq.title}
      </h2>
      {questionTemp.map((props, i) => (
        <div className="relative" key={i}>
          <div className="bg-blue-500 p-5 rounded-lg flex justify-between text-white font-semibold">
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              ducimus?
            </h2>
            <button
              onClick={(e) => hideText(i)}
              className="rotate-180 transition-transform"
              ref={(el) => (buttonRef.current[i] = el)}
            >
              <FontAwesomeIcon icon={faChevronUp}></FontAwesomeIcon>
            </button>
          </div>
          <div className="p-2 m-2 bg-blue-100">
            <span
              className="h-0 overflow-hidden block transition-all"
              ref={(el) => (itemRef.current[i] = el)}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              placeat laboriosam fugiat qui molestiae dolore autem adipisci
              praesentium! Nemo nostrum quia dignissimos saepe! Deserunt amet
              voluptatibus, aut rerum quam repellat facilis molestias veritatis
              quos iusto, cum tenetur illum repellendus minima?
            </span>
          </div>
        </div>
      ))}
    </section>
  );
};
