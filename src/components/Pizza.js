import React from "react"

const Pizza = (props) => {
  return(
    <tr>
      <td>{props.pizzaData.topping}</td>
      <td>{props.pizzaData.size}</td>
      <td>{props.pizzaData.vegetarian ? "Vegetarian" : "Not Vegetarian"}</td>
      <td><button onClick={event => props.editPizza(event)} name={props.pizzaData.id} type="button" className="btn btn-primary">Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
