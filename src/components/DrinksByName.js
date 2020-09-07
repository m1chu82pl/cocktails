// imr
import React from 'react';

// sfc
const DrinksByName = props => {
  console.log(props.cocktails);
  // const { returnedDrinkName } = props.drinkData

const cocktails = props.cocktails.map((cocktail) => (
      <div className="imgContainer">
        <img src={cocktail.strDrinkThumb} alt="drink" />
        <div key={cocktail.idDrink}>{cocktail.strDrink}</div>
      </div>
    ));

  return ( 
    <>
    {cocktails}
    </>
   );
}
 
export default DrinksByName;