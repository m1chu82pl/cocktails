// imr
import React from 'react';

// sfc
const DrinksByName = props => {
  console.log(props.cocktails);
  // const { returnedDrinkName } = props.drinkData

const cocktails = props.cocktails.map((cocktail) => (
      <div className="imgContainer" key={cocktail.idDrink}>
        <img src={cocktail.strDrinkThumb} alt="drink" />
        <p>{cocktail.strDrink}</p>
      </div>
    ));

  return ( 
    <>
    {cocktails}
    </>
   );
}
 
export default DrinksByName;