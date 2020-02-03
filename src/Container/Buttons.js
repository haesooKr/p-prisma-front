import React from "react";

export const Buttons = ({ update }) => {
  return (
    <div>
      <button onClick={() => update('meals')}>식사류</button>
      <button onClick={() => update('ramens')}>라면류</button>
      <button onClick={() => update('snacks')}>과자류</button>
      <button onClick={() => update('beverages')}>음료류</button>
    </div>
  );
};
