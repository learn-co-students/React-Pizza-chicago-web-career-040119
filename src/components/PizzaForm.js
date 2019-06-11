import React from "react"

const PizzaForm = (props) => {
  return(
      <div  className="form-row">
        <div className="col-5">
            <input onChange={event => props.onChangeHandlerTopping(event)} type="text" className="form-control" placeholder="Pizza Topping" name="topping" value={props.pizza.topping}/>
        </div>
        <div className="col">
          <select onChange={event => props.onChangeHandlerSize(event)} value={props.pizza.size} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input onChange={event => props.onChangeHandlerVegetarian(event)} className="form-check-input" type="radio" value={true} checked={props.pizza.vegetarian}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input onChange={event => props.onChangeHandlerVegetarian(event)} className="form-check-input" type="radio" value={false} checked={!props.pizza.vegetarian}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={event => props.onSubmitHandler(event)} >Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
