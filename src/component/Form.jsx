import React from "react";
import { useDispatch } from "react-redux";
import { setformDt, setlistDt } from "../nameSlice";

export const Form = () => {
  const dispatch = useDispatch();
  const handleonchange = (e) => {
    const { value } = e.target;
    dispatch(setformDt(value));
  };
  const handleonsubmit = (e) => {
    e.preventDefault();
    dispatch(setlistDt());
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
