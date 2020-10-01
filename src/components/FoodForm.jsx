import React, { Component } from 'react';
import Button from './Button';
import './FoodList.css'

class FoodForm extends Component {
  state = {
    name: '',
    calories: '',
    image: ''
  }

  handleOnChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.props.onSubmit(this.state)
  }

  render() {
    const isFormValid = Object.values(this.state).every((field) => field)

    return (
      <form onSubmit={this.handleSubmit}>

        <input 
          name="name" 
          placeholder="Food name" 
          onChange={this.handleOnChange} 

        />

        <input 
          type="number" 
          min={0} 
          name="calories" 
          placeholder="Calories" 
          onChange={this.handleOnChange} 
        />

        <input 
          name="image" 
          placeholder="Image url" 
          onChange={this.handleOnChange} 
        />

        <Button 
          disabled={!isFormValid}
        >
        Add food
        </Button>

      </form>
    );
  }
}

export default FoodForm;