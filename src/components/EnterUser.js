import React from 'react';


class EnterUser extends React.Component {

  state = {
    username: "",
    password: ""
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSubmit(this.state)
  }

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

//if i want the signup form to have more info i could create a turnary or make it it's own component 
//so far might keep this to be edited later in the UserCard component -- displayed in the MyMeals component 
    

render() {
  let {formName} = this.props
  let {username, password} = this.state
return (
    <div> 
      <br/>
      <form onSubmit={this.handleSubmit}>
        <h1>{formName}</h1>
        <label htmlFor="username">Username:</label>
        <input type="text" autoComplete="off" name="username" value={username} onChange={this.handleChange}/>
        <label htmlFor="password">Password:</label>
        <input type="password" autoComplete="off" name="password" value={password} onChange={this.handleChange}/>
        <input type="submit" value="Submit"/>
      </form>
   </div>

  );
}
}
export default EnterUser;
