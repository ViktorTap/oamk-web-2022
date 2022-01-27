import React from "react";

function Button({ children, message = "", onHandleClick = () => {} }) {
  // children and message props are for demonstrating and exercise
  return (
    <div>
      <button onClick={onHandleClick}>{message ? message : children}</button>
    </div>
  );
}

export default Button;
