import React from "react";

const DrinkShow = (props) => {
  // console.log(props.cocktailID);
  return (
    <div className="drinkShow">
      <img src="" alt="" className="drinkShowImg" />
      <h2 className="drinkShowTitle">title</h2>
      {/* <h3>{props.randomDrinkInstructions}</h3> */}
      <button onClick={props.clickButton}>close window</button>
    </div>
  );
};

export default DrinkShow;
