import React from 'react';
import MealCard from './MealCard.js';

class MealsContainer extends React.Component {

  //need to map over each meal and send it over to the meals card
  // let {meals} = this.props
// let arrayOfMeals = this.props.meals.map((meal) => {
//     return <MealCard key={meal.id} meal={meal}/>
//   })

render() {
  console.log(this.props)
  let arrayOfMeals = this.props.meals.map((meal) => {
    return <MealCard 
      key={meal.id} 
      meal={meal}
      user={this.props.user}
      user_bare={this.props.user_bare}
      token={this.props.token}
      addComment={this.props.addComment}
      deleteComment={this.props.deleteComment}
      />
  })

return (
    <div className="mealscont"> 
      <h2>Ramadan Meal Ideas</h2>
      <h3> From Our Home To Yours </h3>
      <h5> Ramadan Mubarak! </h5>
      <br/>
      {arrayOfMeals}
    </div>

  );
}
}
export default MealsContainer;
