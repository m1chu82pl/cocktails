import React from "react";
import "./App.css";
import Drink from "./Drink";
import RandomDrink from "./RandomDrink";
import Form from "./Form";

class App extends React.Component {
  state = {
    drinkName: "",
    cocktails: [],
    error: false,
    //   drinkID: "",
    //   drinkName: "",
    //   drinkIngredient1: "",
    //   drinkIngredient2: "",
    //   drinkIngredient3: "",
    //   drinkIngredient4: "",
    //   drinkIngredient5: "",
    //   drinkMeasure1: "",
    //   drinkMeasure2: "",
    //   drinkMeasure3: "",
    //   drinkMeasure4: "",
    //   drinkMeasure5: "",
    //   drinkInstructionsEN: "",
    //   drinkInstructionsDE: "",
  };

  handleChangeInputValue = (event) => {
    this.setState({
      drinkName: event.target.value,
    });
  };

  handleDrinkSubmit = (event) => {
    // console.log(this.state.drinkValue);
    event.preventDefault();
    const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.state.drinkName}`;

    fetch(URL)
      .then((response) => {
        if (response.ok) {
          console.log(response);
          return response;
        }
        throw Error("coś poszło nie tak");
      })
      .then((response) => response.json())
      .then((cocktails) => {
        // console.log(data);
        // console.log(cocktails.drinks[0].strDrink);
        console.log(cocktails.drinks);
        this.setState({ cocktails: cocktails.drinks });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          error: true,
        });
      });

    this.setState({
      drinkName: "",
    });
  };

  render() {
    const cocktails = this.state.cocktails.map((cocktail) => (
      <div className="imgContainer">
        <img src={cocktail.strDrinkThumb} alt="drink" />
        <div key={cocktail.idDrink}>{cocktail.strDrink}</div>
      </div>
    ));
    // console.log(this.state.cocktails);

    return (
      <div className="App">
        <RandomDrink />
        "This is cocktails webside"
        <Form
          value={this.state.drinkName}
          change={this.handleChangeInputValue}
          submit={this.handleDrinkSubmit}
        />
        <div className="flexContainer">
          {/* <Drink drinkData={this.state} /> */}
          {/* {Drinks} */}
          {cocktails}
        </div>
      </div>
    );
  }
}

export default App;
