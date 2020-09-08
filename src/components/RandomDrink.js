import React from "react";

const RandomDrink = (props) => {
  return (
    <div>
      <img src={props.randomDrink} onClick={props.click}alt="random drink" />
      <h2>{props.randomDrinkName}</h2>
      <p>{props.randomDrinkInstructions}</p>
    </div>
  );
};

export default RandomDrink;
