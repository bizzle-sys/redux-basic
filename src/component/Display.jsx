import React from "react";
import { useSelector } from "react-redux";

export const Display = () => {
  const { dtList } = useSelector((state) => state.nameList);
  return (
    <div>
      <ul>
        {dtList.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};
