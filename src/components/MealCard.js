import React from 'react';
import CommentsContainer from './CommentsContainer.js';


class MealCard extends React.Component {

  
render() {
  // console.log(this.props) 
 let {title, instructions, ingredients, image, user, comments} = this.props.meal
 let {bio, username} = user
//   let arrayOfComments = comments.map((comment) => {
//       return <CommentCard key={comment.id} comment={comment} />
//   })

//   the token is showing up as undefined here - maybe becaise nobody is logged in? - didnt add it to state dumbass. 
return (
    <div class="row"> 
      <div class="column">
        <header className="card">
        <img src={image} alt={title} width="200px" height="auto"
            className="card__image"
            // onClick={ this.handleClick }
          />
        </header>
        
        <div className="card mealcard">
            <p className="date">NEED to add created at here from props</p>
            <h2 className="mealcard-title">{this.props.title}</h2>
            <p className="body-content">Dish: {title}</p>
            <p className="body-content">Ingredients: {ingredients}</p>
            <p className="body-content">Instructions: {instructions}</p>
            <p className="body-content">By: {username}</p>
            <CommentsContainer 
              comments={this.props.meal.comments}
              user={this.props.user}
              user_bare={this.props.user_bare}
              token={this.props.token}
              meal={this.props.meal}
              addComment={this.props.addComment}
              deleteComment={this.props.deleteComment}
              />
        
        </div>
      </div>
   </div>

  );
}
}
export default MealCard;