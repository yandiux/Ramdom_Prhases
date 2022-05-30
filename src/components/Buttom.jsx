import React from "react";

const Buttom = ({clickButton, colorRandom }) => {
  return (
    <button
      style={{ color: colorRandom }}
      className="btn-card"
      onClick={clickButton}
    >
      &#187;
    </button>
  );
};
export default Buttom;
