import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

class App extends Component {

  constructor() {
    super()
    this.state = {
      pizzas: [],
      editPizza: ''
    }
  }
// fetch to api to get all pizzas and store it into pizzas array
  componentDidMount() {
    fetch('http://localhost:3000/pizzas')
      .then(resp => resp.json())
      .then(pizzas => {
        this.setState({
          pizzas: pizzas
        })
      })
  }

  populateForm = (pizza) => {
    this.setState({
      editPizza: pizza
    })
  }

// change the topping value to whatever the input is
  changeTopping = (topping) => {
    const newPizza = [...this.state.editPizza, topping]
    this.setState({
      editPizza: newPizza
    })
  }

// change the size to whatever the change is in size
  changeSize = (size) => {
    const newPizza = [...this.state.editPizza]
    newPizza.size = size

    this.setState({
      editPizza: newPizza
    })
  }

// change vegetarian boolean in the data based on th input
  changeVegetarian = (veggie) => {
    const newPizza = {...this.state.editPizza}
    newPizza.vegetarian = veggie === "true"

    this.setState({
      editPizza: newPizza
    })
  }

  updatePizzas = () => {
    if (this.state.editPizza.id) {
      fetch(`http://localhost:3000/pizzas/${this.state.editPizza.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Accepts": "application/json"
        },
        body: JSON.stringify(this.state.editPizza)
      })
      .then(resp =>
        this.setState({
          editPizza: {}
        }))
    }
  }

  render() {
    return (
      <Fragment>
        <Header/>

        <PizzaForm
          pizza={this.state.editPizza}
          changeTopping={this.changeTopping}
          changeSize={this.changeSize}
          changeVegetarian={this.changeVegetarian}
          updatePizzas={this.updatePizzas}/>

        <PizzaList
        pizzas={this.state.pizzas}
        populateForm={this.populateForm} />
      </Fragment>
    );
  }
}

export default App;
