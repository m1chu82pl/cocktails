import React from "react";

const DrinkShow = (props) => {
  return (
    <div className="drinkShow">
      <img src="" alt="" className="drinkShowImg" />
      <h2 className="drinkShowTitle">title</h2>
      <button onClick={props.click}>close window</button>
    </div>
  );
};

export default DrinkShow;
