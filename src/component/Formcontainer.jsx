import React from "react";
import { Form } from "./Form";
import { useSelector } from "react-redux";

export const Formcontainer = () => {
  const { formDt } = useSelector((state) => state.nameList);
  return (
    <div>
      <h3>{formDt}</h3>
      <hr />
      <Form />
    </div>
  );
};
