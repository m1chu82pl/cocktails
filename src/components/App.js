import React from "react";
import "./App.css";
import DrinksByName from "./DrinksByName";
import RandomDrink from "./RandomDrink";
import Form from "./Form";

class App extends React.Component {
  state = {
    drinkName: "",
    cocktails: [],
    randomDrink: "",
    randomDrinkName: "",
    randomDrinkInstructions: "",
    error: false,
  };

  handleChangeInputValue = (event) => {
    this.setState({
      drinkName: event.target.value,
    });
  };

  componentDidMount() {
    const URL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

    fetch(URL)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error("ups!!!");
      })
      .then((response) => response.json())
      .then((randomDrink) => {
        console.log(randomDrink.drinks[0].strDrinkThumb);
        this.setState({
          randomDrink: randomDrink.drinks[0].strDrinkThumb,
          randomDrinkName: randomDrink.drinks[0].strDrink,
          randomDrinkInstructions: randomDrink.drinks[0].strInstructions,
        });
      });
  }

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

  handleClickOnRandomDrink = () => {

  }

  render() {
    // const cocktails = this.state.cocktails.map((cocktail) => (
    //   <div className="imgContainer">
    //     <img src={cocktail.strDrinkThumb} alt="drink" />
    //     <div key={cocktail.idDrink}>{cocktail.strDrink}</div>
    //   </div>
    // ));
    // console.log(this.state.cocktails);

    const cocktails = this.state.cocktails;

    return (
      <div className="App">
        <h1>"This is cocktails webside"</h1>
        <RandomDrink
          randomDrink={this.state.randomDrink}
          randomDrinkName={this.state.randomDrinkName}
          randomDrinkInstructions={this.state.randomDrinkInstructions}
          click={this.handleClickOnRandomDrink}
        />
        <Form
          value={this.state.drinkName}
          change={this.handleChangeInputValue}
          submit={this.handleDrinkSubmit}
        />
        <div className="flexContainer">
          {cocktails ? <DrinksByName cocktails={cocktails} /> : cocktails}
          {/* <DrinksByName cocktails={cocktails}/> */}
          {/* {Drinks} */}
          {/* {cocktails} */}
        </div>
      </div>
    );
  }
}

export default App;
