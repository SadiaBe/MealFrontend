import React from 'react';


class UserCard extends React.Component {

  // need to get access to the user instance 
  // take out appropriate props to disply -use destructuring 
  // need to add a way to make an option to edit the bio and avatar - need to make this a controlled component? 

render() {
//   console.log(this.props.userInfo.user)
  let {username, bio, avatar, } = this.props.userInfo.user
  

return (
    <div> 
      <br/>
      <h2>Hello {username.toUpperCase()} here are all your meals </h2>
      <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" width="50" height="50"></img>
      <h3> User Bio:  {bio} </h3>
      
      
    </div>

  );
}
}
export default UserCard;
