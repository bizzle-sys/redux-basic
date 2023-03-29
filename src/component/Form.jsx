import React from "react";
import { useDispatch } from "react-redux";
import { setDtList, setFormDt } from "../nameSlice";
export const Form = () => {
  const dispatch = useDispatch();
  const handleonchange = (e) => {
    const { value } = e.target;
    dispatch(setFormDt(value));
  };
  const handleonsubmit = (e) => {
    e.preventDefault();
    dispatch(setDtList());
  };
  return (
    <div>
      <form action="" onSubmit={handleonsubmit}>
        <input type="text" onChange={handleonchange} />
        <input type="submit" />
      </form>
    </div>
  );
};
