import React, { useState, useEffect, useContext } from "react";

import { ContactForm } from "./contact.component";
import { DetailsForm } from "./details.component";
import { FirstNameForm } from "./firstName.component";
import { GroupSizeForm } from "./groupSize.component";
import { LastNameForm } from "./lastName.component";
import { ProblemAreaForm } from "./problemArea.component";

import { FormSubmit } from "../formSubmit.component";
import { componentContent } from "../../translation";
import { languageContext } from "../../App";

interface rendarableObject {
  isFirstName: boolean;
  isLastName: boolean;
  isGroupSize: boolean;
  isDetails: boolean;
  isProblem: boolean;
  isContact: boolean;
}
interface errorInterface {
  firstName: Array<string>;
  lastName: Array<string>;
  groupSize: Array<string>;
  problem: Array<string>;
  details: Array<string>;
  contact: Array<string>;
  email?: Array<string>;
  phone?: Array<string>;
}

interface Props {
  toRender: rendarableObject;
  whereToSend: string;
}
export const Form: React.FC<Props> = ({
  toRender: rendarableObject,
  whereToSend,
}) => {
  let internReg =
    /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
  let emailReg = /\S+@\S+\.\S+/;

  const { language } = useContext(languageContext);
  const [componentContentState, setComponentContentState] = useState(
    componentContent[language]
  );
  useEffect(() => {
    setComponentContentState(componentContent[language]);
  }, [language]);

  const error: errorInterface = {
    firstName: [],
    lastName: [],
    groupSize: [],
    problem: [],
    details: [],
    contact: [],
    email: [],
    phone: [],
  };
  const [errorState, setErrorState] = useState(error);

  function validateInput(
    error: string,
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
    letterLimit: number | null,
    regMatch: RegExp | null,
    required: boolean | null
  ) {
    const input = event.target.value;
    let allErrors = [];
    if (letterLimit) {
      if (input.length > letterLimit) {
        allErrors.push(
          componentContentState.form.formParent.validateInput.letterLimit(
            letterLimit
          )
        );
      }
    }
    if (regMatch) {
      if (!input.match(regMatch)) {
        allErrors.push(
          componentContentState.form.formParent.validateInput.regMatch
        );
      }
    }
    if (required) {
      if (input.length === 0) {
        allErrors.push(
          componentContentState.form.formParent.validateInput.required
        );
      }
    }
    let newErrorState = { ...errorState, [error]: allErrors };
    if ((error === "email" || error === "phone") && allErrors.length === 0) {
      setErrorState({ ...newErrorState, contact: [] });
    } else {
      setErrorState({ ...newErrorState });
    }
  }
  function removeError(errorName: string) {
    setErrorState({ ...errorState, [errorName]: [] });
  }

  function validateProblemArea() {
    let allGood = true;
    let allProblemAreas: NodeListOf<HTMLInputElement> =
      document.querySelectorAll(".problem");
    const problems: Array<string> = [];
    allProblemAreas.forEach((el) => {
      if (el.checked) {
        problems.push(el.value);
      }
    });
    const otherProblem: HTMLInputElement | null =
      document.querySelector(".problem-other");
    if (otherProblem?.value) {
      problems.push(otherProblem.value);
    }
    if (problems.length === 0) allGood = false;

    if (allGood) setErrorState({ ...errorState, problem: [] });
    if (!allGood)
      setErrorState({
        ...errorState,
        problem: [
          componentContentState.form.formParent.validateProblemArea.problem,
        ],
      });
  }

  return (
    <form className="mb-5 shadow-md p-5">
      {rendarableObject.isFirstName ? (
        <FirstNameForm
          validateInput={validateInput}
          internReg={internReg}
          firstName={errorState.firstName}
        />
      ) : null}
      {rendarableObject.isLastName ? (
        <LastNameForm
          validateInput={validateInput}
          internReg={internReg}
          lastName={errorState.lastName}
        />
      ) : null}
      {rendarableObject.isGroupSize ? (
        <GroupSizeForm
          removeError={removeError}
          groupSize={errorState.groupSize}
        />
      ) : null}
      {rendarableObject.isProblem ? (
        <ProblemAreaForm
          validateProblemArea={validateProblemArea}
          problemArea={errorState.problem}
        />
      ) : null}
      {rendarableObject.isDetails ? (
        <DetailsForm
          details={errorState.details}
          validateInput={validateInput}
        />
      ) : null}
      {rendarableObject.isContact ? (
        <ContactForm
          contact={errorState.contact}
          validateInput={validateInput}
          email={errorState.email}
          phone={errorState.phone}
          emailReg={emailReg}
        />
      ) : null}
      <FormSubmit
        errorState={errorState}
        setErrorState={setErrorState}
        whereToSend={whereToSend}
        whatToCheck={rendarableObject}
      />
    </form>
  );
};
