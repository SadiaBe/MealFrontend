import React from 'react';
import CommentCard from './CommentCard.js';
import CommentForm from './CommentForm.js';


class CommentsContainer extends React.Component {

  
  
  render() {
    // console.log(this.props)
    let comments = this.props.comments
    // console.log(comments)
    let arrayOfComments = this.props.comments.map((comment) => {
      return <CommentCard 
      key={comment.id} 
      comment={comment}
      deleteComment={this.props.deleteComment}
      />
    })


  
  return (
      <div> 
          <h2>Comments: </h2> 
        {arrayOfComments}
        <CommentForm
        user={this.props.user}
        user_bare={this.props.user_bare}
        token={this.props.token}
        meal={this.props.meal}
        addComment={this.props.addComment}/>
    
      </div>
  
    );
  }
  }
  export default CommentsContainer;