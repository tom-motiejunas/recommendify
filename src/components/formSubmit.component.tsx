import React, { useState } from "react";

import {
  getFirestore,
  collection,
  addDoc,
  Timestamp,
} from "firebase/firestore";
import { Routes, Route, Navigate } from "react-router-dom";

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

interface whatToCheck {
  isFirstName: boolean;
  isLastName: boolean;
  isGroupSize: boolean;
  isDetails: boolean;
  isProblem: boolean;
  isContact: boolean;
}

interface Props {
  errorState: errorInterface;
  setErrorState: Function;
  whereToSend: string;
  whatToCheck: whatToCheck;
}

export const FormSubmit: React.FC<Props> = ({
  errorState,
  setErrorState,
  whereToSend,
  whatToCheck,
}) => {
  const [redirect, setRedirect] = useState("");

  function showError() {
    setRedirect("error");
  }

  async function sendData(content: object) {
    const timeoutTime = 10000;
    try {
      // wait certain amount of time before showing error
      new Promise((resolve) => setTimeout(showError, timeoutTime));
      const db = getFirestore();
      const postRef = collection(db, whereToSend);
      await addDoc(postRef, content);
      setRedirect("success");
      // check if this is necessary
      showError();
    } catch (err) {
      console.log(err);
      showError();
    }
  }

  function validateAll(e: React.MouseEvent<HTMLInputElement, MouseEvent>) {
    e.preventDefault();
    let newErrorState = { ...errorState };
    let allGood = true;

    let firstName: Element | HTMLInputElement | string = "";
    let lastName: Element | HTMLInputElement | string = "";
    let groupSize: string = "";
    const problems: Array<string> = [];
    const emailOrPhoneValues: Array<string> = [];

    let detailsValue;
    // if there was a form where only first name is required divide this logic
    if (whatToCheck.isFirstName && whatToCheck.isLastName) {
      [firstName, lastName] = document.querySelectorAll(".names");
      if (
        firstName instanceof HTMLInputElement &&
        lastName instanceof HTMLInputElement
      ) {
        firstName = firstName.value;
        lastName = lastName.value;
        if (!firstName) {
          allGood = false;
          newErrorState = {
            ...newErrorState,
            firstName: ["Laukelis privalomas"],
          };
        }
        if (!lastName) {
          allGood = false;
          newErrorState = {
            ...newErrorState,
            lastName: ["Laukelis privalomas"],
          };
        }
      }
    }
    // Finding checked group size
    if (whatToCheck.isGroupSize) {
      const allGroupSizes: NodeListOf<HTMLInputElement> =
        document.querySelectorAll(".group-size");
      allGroupSizes.forEach((el) => {
        if (el.checked) groupSize = el.value;
      });
      if (!groupSize) {
        allGood = false;
        newErrorState = {
          ...newErrorState,
          groupSize: ["Laukelis privalomas"],
        };
      }
    }
    // Finding problem area
    if (whatToCheck.isProblem) {
      let allProblemAreas: NodeListOf<HTMLInputElement> =
        document.querySelectorAll(".problem");

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
      if (problems.length === 0) {
        allGood = false;
        newErrorState = {
          ...newErrorState,
          problem: ["Pasirinkite vieną iš nurodytų"],
        };
      }
    }
    // Getting details
    if (whatToCheck.isDetails) {
      const detailNode: HTMLInputElement | null =
        document.querySelector(".details");
      detailsValue = detailNode?.value;

      if (!detailsValue) {
        allGood = false;
        newErrorState = { ...newErrorState, details: ["Laukelis privalomas"] };
      }
    }
    // Contact
    if (whatToCheck.isContact) {
      const emailOrPhoneNode: NodeListOf<HTMLInputElement> =
        document.querySelectorAll(".emailOrPhone");

      emailOrPhoneNode.forEach((el) => {
        if (el.value) {
          emailOrPhoneValues.push(el.value);
        }
      });
      if (emailOrPhoneValues.length === 0) {
        allGood = false;
        newErrorState = {
          ...newErrorState,
          contact: ["Pasirinkite bent vieną laukelį ir užpildykite"],
        };
      }
    }
    if (!allGood) setErrorState(newErrorState);
    if (allGood) {
      const data = {
        firstName: firstName,
        lastName: lastName,
        groupSize: groupSize,
        problemArea: problems.join("; "),
        details: detailsValue,
        contact: emailOrPhoneValues.join("; "),
        date: Timestamp.now(),
      };
      sendData(data);
    }
  }

  return (
    <div className="grid place-items-center">
      <input
        type="submit"
        value="Siųsti"
        className="cursor-pointer p-2 bg-blue-500 text-white w-32"
        onClick={(e) => validateAll(e)}
      />
      {redirect === "success" ? (
        <Routes>
          <Route path="*" element={<Navigate to="/success" />} />
        </Routes>
      ) : null}
      {redirect === "error" ? (
        <Routes>
          <Route path="*" element={<Navigate to="/error" />} />
        </Routes>
      ) : null}
    </div>
  );
};
