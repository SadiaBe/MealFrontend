import React from 'react';


class MyMealsCard extends React.Component {



  
render() {
  // console.log(this.props)
  let {title, instructions, ingredients, image, user, comments} = this.props.meal
return (
    <div class="row"> 
      <div class="column"> 
        <header>
        <img src={image} alt={title} width="200px" height="auto"
            className="card__image"
            // onClick={ this.handleClick }
          />
        </header>

        <div className="card">
            <p className="date">NEED to add created at here from props</p>
            <h2 className="mealcard-title">{this.props.title}</h2>
            <p className="body-content">Dish: {title}</p>
            <p className="body-content">Ingredients: {ingredients}</p>
            <p className="body-content">Instructions: {instructions}</p>
        </div>
      </div>
    </div>

  );
}
}
export default MyMealsCard;