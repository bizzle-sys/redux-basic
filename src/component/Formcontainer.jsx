import React from "react";
import { useSelector } from "react-redux";
import { Form } from "./Form";

export const Formcontainer = () => {
  const { formDt } = useSelector((state) => state.nameList);

  return (
    <div>
      <h3>Form container</h3>
      <h3>{formDt}</h3>
      <hr />
      <Form />
    </div>
  );
};
