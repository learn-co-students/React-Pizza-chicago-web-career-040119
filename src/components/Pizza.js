import React from "react"

const Pizza = (props) => {
  return(
    <tr>
      <td>{props.pizza.topping}</td>
      <td>{props.pizza.size}</td>
      <td>{props.pizza.vegetarian ? "Vegetarian" : "Non vegetarian"}</td>
      <td><button onClick={() => props.populateForm(props.pizzaData)} type="button" className="btn btn-primary">Edit Pizza</button></td>
    </tr>
  )
}


export default Pizza
