import React from 'react';


class CommentForm extends React.Component {

state = {
    value: ""
    // userid: this.props.user.id 
}
handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitted comment form")

    fetch("http://localhost:3000/comments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "Authorization": `Bearer ${this.props.token}`
      },
      body: JSON.stringify({
        comment: this.state.value,
        like: 0,
        user: this.props.user_bare,
        meal: this.props.meal.id
      })
    })
    .then(r => r.json())
    .then((commentObj) => {
      console.log(commentObj);
      if (commentObj.id) {
        this.props.addComment(commentObj) 
      } else {
        console.log("Must be logged in to comment");
      }
    })

  }

render() {
  // console.log(this.props.user)
return (
    <div> 
        <form onSubmit={this.handleSubmit}>
        <label>
          Comment:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>

    </div>

  );
}
}
export default CommentForm;


