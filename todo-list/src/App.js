import React, { Component } from 'react';
import classes from './App.module.css';
import Ingredient from './Ingredient/Ingredient';
import CreateIngredient from './CreateIngredient/CreateIngredient';

class App extends Component {
  state = {
    createIng: "",
    ingredients: [] 
    // elements of ingredients have the following properties: name, id, checked (so far...)
  }

  // Handles the user editing create ingredient form
  handleIngNameChange = event => {
    const ingName = event.target.value;
    this.setState({
      createIng: ingName
    });
  }

  // Handles the user pressing the "Add" button
  handleIngCreate = () => {
    // if state.createIng is empty, no changes will be made
    if (this.state.createIng !== "") {
      // creates unique ID
      const newID = '_' + Math.random().toString(36).substr(2, 9);

      // creates new object as first in state.ingredients array
      const newIngs = [{
        name: this.state.createIng,
        id: newID,
        checked: false,
        hover: false
      }, ...this.state.ingredients];

      // resets state.createIng, updates state.ingredients
      this.setState({
        createIng: "",
        ingredients: newIngs
      })
    }
  }

  handleCreateKeyPress = event => {
    if (event.key === "Enter") {
      this.handleIngCreate();
    }
  }

  // Handles the user checking/unchecking checkbox next to ingredient
  handleIngChecked = id => {
    // finds ing with given id
    const ingIndex = this.state.ingredients.findIndex(i => {
      return i.id === id;
    });

    // creates deep copy of original ing object
    const ing = {
      ...this.state.ingredients[ingIndex]
    }

    // inverses ing.checked
    const ingCheckedInverse = !ing.checked;
    ing.checked = ingCheckedInverse;

    // creates copy of original ingredients array, updates ing
    const ings = [...this.state.ingredients];
    ings[ingIndex] = ing;

    // updates state
    this.setState({
      ingredients: ings
    })
  }

  handleIngHover = (hovered, index) => {
    const hoveredIng = {
      ...this.state.ingredients[index]
    };

    hoveredIng.hover = hovered;

    const newIngs = [...this.state.ingredients];
    newIngs[index] = hoveredIng;

    this.setState({
      ingredients: newIngs
    })
  }

  handleIngDelete = index => {
    const newIngs = [...this.state.ingredients];
    newIngs.splice(index, 1);
    this.setState({
      ingredients: newIngs
    })
  }

  render() {
    let ingredientCreate = null;
    let ingredientComponents = null;

    if (this.state.createIng !== "") {
      ingredientCreate = (
        <Ingredient 
          name={this.state.createIng}
          init={false}
          create={true}
          checked={false}
          mouseOver={null}
          mouseOut={null}
        />
      );
    }

    if (this.state.ingredients.length > 0) {
      ingredientComponents = (
        <div>
          {this.state.ingredients.map((ing, index) => {
            return (
              <Ingredient 
                name={ing.name}
                init={false}
                create={false}
                checked={ing.checked}
                changed={() => this.handleIngChecked(ing.id)}
                mouseOver={() => this.handleIngHover(true, index)}
                mouseOut={() => this.handleIngHover(false, index)}
                hideDelete={!ing.hover}
                delete={() => this.handleIngDelete(index)}
                key={ing.id}
              />
            );
          })}
        </div>
      )
    }

    if (ingredientCreate == null && ingredientComponents == null) {
      ingredientCreate = (
        <Ingredient 
          name="Begin typing..."
          init={true}
          create={true}
          checked={false}
          mouseOver={null}
          mouseOut={null}
        />
      );
    }

    return (
      <div className={classes.App}>
        <h1>Shopping list</h1>
        <CreateIngredient 
          change={this.handleIngNameChange} 
          click={this.handleIngCreate}
          value={this.state.createIng} 
          pressed={this.handleCreateKeyPress}
        />
        <div className={classes.ingredientsList}>
          {ingredientCreate}
          {ingredientComponents}
        </div>
      </div>
    );
  }
}

export default App;