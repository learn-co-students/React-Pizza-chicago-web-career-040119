import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  constructor() {
    super()
    this.state = {
      pizzas: [],
      editFormPizza: {
        id: "",
        topping: "",
        size: "",
        vegetarian: ""
      }
    }
  }

  componentDidMount() {
    return fetch("http://localhost:3000/pizzas")
      .then(res => res.json())
      .then(pizzasData => this.setState({pizzas: pizzasData}))
  }

  editPizza = (event) => {
    let clickedEditPizza = this.state.pizzas.find(pizza => pizza.id === parseInt(event.target.name, 10))
    this.setState({
      editFormPizza: {
        id: clickedEditPizza.id,
        topping: clickedEditPizza.topping,
        size: clickedEditPizza.size,
        vegetarian: clickedEditPizza.vegetarian
      }
    })
  }

  onChangeHandlerTopping = (event) => {
    this.setState({
      editFormPizza: {
        id: this.state.editFormPizza.id,
        topping: event.target.value,
        size: this.state.editFormPizza.size,
        vegetarian: this.state.editFormPizza.vegetarian
      }
    })
  }

  onChangeHandlerSize = (event) => {
    this.setState({
      editFormPizza: {
        id: this.state.editFormPizza.id,
        topping: this.state.editFormPizza.topping,
        size: event.target.value,
        vegetarian: this.state.editFormPizza.vegetarian
      }
    })
  }

  onChangeHandlerVegetarian = (event) => {
    this.setState({
      editFormPizza: {
        id: this.state.editFormPizza.id,
        topping: this.state.editFormPizza.topping,
        size: this.state.editFormPizza.size,
        vegetarian: event.target.value === "true",
      }
    })
  }

  onSubmitHandler = (event) => {

    if (this.state.editFormPizza.id) {
      fetch(`http://localhost:3000/pizzas/${this.state.editFormPizza.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Accepts": "application/json"
        },
        body: JSON.stringify(this.state.editFormPizza)
      })
        .then(res => res.json())
        .then(data => this.setState({
          editFormPizza: {
            id: "",
            topping: "",
            size: "",
            vegetarian: ""
          }
        }))
    }

  }


  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizza={this.state.editFormPizza}
          onChangeHandlerTopping={this.onChangeHandlerTopping}
          onChangeHandlerSize={this.onChangeHandlerSize}
          onChangeHandlerVegetarian={this.onChangeHandlerVegetarian}
          onSubmitHandler={this.onSubmitHandler}
          />
        <PizzaList pizzas={this.state.pizzas} editPizza={this.editPizza} />
      </Fragment>
    );
  }
}

export default App;
