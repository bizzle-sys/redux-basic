import React from "react";
import { useSelector } from "react-redux";

export const Display = () => {
  const { listDt } = useSelector((state) => state.nameList);
  return (
    <div>
      <ul>
        {listDt.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};
