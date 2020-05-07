import React from 'react';
import MyMealsCard from "./MyMealsCard.js";
import UserCard from "./UserCard.js";



class MyMeals extends React.Component {

  
render() {
  // console.log(this.props) 
  // the token is showing up as undefined here - maybe becaise nobody is logged on - fixed it
  let userMeals = this.props.user.meals
  let arrayOfMyMeals = this.props.user.meals.map((meal) => {
    return <MyMealsCard key={meal.id} meal={meal}/>
  })

  return (
    <div >
      <UserCard userInfo={this.props}/>  
      <div class='card'> {arrayOfMyMeals} </div>  
    </div>

    );
  }
}
export default MyMeals;
