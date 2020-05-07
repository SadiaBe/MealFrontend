import React from 'react';


class MealForm extends React.Component {

  state = {
    title: "",
    image: "",
    ingredients: "",
    instructions: "",
    user: this.props.user
    // vote: []
}
handleChange = (event) => {
  console.log(event.target.value)
    let {name, value} = event.target
    this.setState({
      [name]: value 
    })
    // this.setState({
    //   title: event.target.title,
    //   image: event.target.image,
      // ingredients: "", 
      // instructions: "",
      // user: {},
      // vote: [],
      // comments: []
    // });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log( event, "submitted meal form")
    this.setState({
    title: "",
    image: "",
    ingredients: "",
    instructions: ""
    })

    fetch("http://localhost:3000/meals", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "Authorization": `{Bearer ${this.props.token}`
      },
      body: JSON.stringify(this.state)
    })
    .then(r => r.json())
    .then((mealObj) => {
      console.log(mealObj);
      if (mealObj.id) {
        this.props.addMeal(mealObj) //change addOneSnack to addOneMeal after making the function in app
      } else {
        console.log("Must be logged in to add meal");
      }
    })

  }


  render() {
    // console.log(this.props)
    return (


      <div className="card" >
        <br/>
      <form className="mealform" onSubmit={this.handleSubmit}>
        <label className="mealform">
          Title:
          <textarea name="title" required value={this.state.title} onChange={this.handleChange} />
        </label>
        <br/>
        <label>
          Ingredients:
          <textarea name="ingredients" required value={this.state.ingredients} onChange={this.handleChange} />
        </label>
        <br/>
        <label>
          Instructions:
          <textarea name="instructions" required value={this.state.instructions} onChange={this.handleChange} />
        </label>
        <br/>
        <label>
          Image:
          <textarea name="image" required value={this.state.image} onChange={this.handleChange} />
        </label>
        <br/>
        <input type="submit" value="ADD A MEAL" />
       </form>
       </div>




      // <form onSubmit={this.handleSubmit}>
      //   <h1>Add a New Meal</h1>

      //   <label htmlFor="title">Title:</label>
      //   <input type="text" autoComplete="off" name="title" value={this.state.title} onChange={this.handleChange}/>
      //   <label htmlFor="image">Add Image:</label>
      //   <input type="text" autoComplete="off" name="image" value={this.state.image} onChange={this.handleChange} accept="image/*" true />

      //    <input type="submit" value="Submit"/>
      // </form>

      // <form onSubmit={this.handleSubmit}>
      //   <label>
      //     Title:
      //     <input value={this.state.title} onChange={this.handleChange} />
      //   </label>
      //   <br/>
      //   <label>
      //     Image URL:
      //     <input type="text" value={this.state.image} onChange={this.handleChange} accept="image/*" required />
      //   </label>
      //   <br/>
      //   <label>
      //     Igredients:
      //     <input type="text" value={this.state.ingredients} onChange={this.handleChange} />
      //   </label>
      //   <br/>
      //   <label>
      //     Instructions:
      //     <input type="text" value={this.state.instructions} onChange={this.handleChange} />
      //   </label>
      //   <br/>
      //   <input type="submit" value="Submit" />
      // </form>
    )}
}
export default MealForm;