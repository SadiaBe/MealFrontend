import React from 'react';



class CommentCard extends React.Component {
 

  handleDelete = (event) => {
    let commentToDelete = this.props.comment
    this.props.deleteComment(commentToDelete)
  }
  
  handleLike = () =>{
    console.log("need to add like")
  }

  render() {
  //  console.log(this.props)
  return (
      <div> 
        <h4> Comment: {this.props.comment.comment} </h4>
        <button onClick={this.handleLike}> likes: {this.props.comment.like}</button>
        <button onClick={this.handleDelete}> delete </button>
      </div>
  
    );
  }
  }
  export default CommentCard;