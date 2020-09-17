import React from 'react';
import MyMeals from './components/MyMeals.js';
import MealsContainer from './components/MealsContainer.js';
import EnterUser from './components/EnterUser.js';
import MealForm from './components/MealForm.js';
import NavBar from './components/NavBar.js';
import './App.css';
import {Route, Switch, Link, NavLink} from 'react-router-dom';
import { withRouter } from 'react-router';

class App extends React.Component {

  state = {
    user: {
        id: 0,
        username: "",
        bio:"",
        avatar:"",
        meals: [],
        votes: [],
        comments: []
      },
    user_bare: {
        id: 0,
        username: "",
        bio:"",
        avatar:"",
    },
    meals: [
      // {
      // id: 1,
      // title: "",
      // ingredients: "",
      // instructions: "",
      // image: "",
      // votes: [],
      // comments: []
      // }
    ],
    token: ""
  } 


    componentDidMount() {
        
        if (localStorage.token) {
          fetch("http://localhost:3000/persist", {
           headers: {
              "Authorization": `bearer ${localStorage.token}`
              }
              })
              .then(resp => resp.json())
              // .then(this.handleResp)
              .then((data) => {
                if (data.token) {
                  localStorage.setItem("token", data.token)
                  this.setState({
                    user: data.user,
                    token: data.token
                  }, () => {
                    this.props.history.push("/mymeals")
                  })
                }
              })
        
        }
          fetch("http://localhost:3000/meals")
              .then(resp => resp.json())
              .then(meals => {
                 this.setState({
                     meals: meals
                  })
                })
    }


    // if i want the user info to show up without a page refresh: 
    // how to do multiple fetches and an if statment within the CDM?
    
    // componentDidMount() {
    //   if (localStorage.token) {
    //     fetch("http://localhost:3000/persist", {
    //       headers: {
    //         "Authorization": `bearer ${localStorage.token}`
    //       }
    //     })
    //     .then(r => r.json())
    //     .then(this.handleResp)
    //   }
    // }


  handleResp = (resp) => {
    if (!resp.error) {
      localStorage.setItem("token", resp.token)
      this.setState({
        user: resp.user,
        token: resp.token
      }, () => {
        this.props.history.push("/mealscontainer")
      })

    }


    // if (resp.user) {
    //   localStorage.token = resp.token
    //   this.setState({
    //     user: resp.user,
    //     user_bare: resp.user,
    //     token: resp.token
    //   }, () => {
    //     // console.log(this.props)
    //     this.props.history.push("/mymeals")
    //   })
    // } 
    else {
      alert(resp.error)
    }
  }


  // deleteComment = (comment) => {
  //   console.log(comment) 
  //   this.setState({
  //     // ...this.state.meals, comment:comment
  //     meals: [...this.state.meals, comment:comment]
  //   })
  //   }


  addComment = (commentObj) => {
    this.setState({
      user: {
        ...this.state.user,
        comments: [...this.state.user.comments, commentObj]
      }
    })
  }
  // addComment = (commentObj) => {
  //   this.setState({
  //     meals: {
  //       ...this.state.meals,
  //       comments: [...this.state.meals.comments, commentObj]
  //     }
  //   })
  // }

  addMeal = (mealObj) => {
    this.setState({
      user: {
        ...this.state.user,
        meals: [...this.state.user.meals, mealObj]
      },
       meals: [...this.state.meals, mealObj]
    })
  }


  handleLoginSubmit = (userInfo) => {
    console.log("Login form has been submitted")

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
    .then(resp => resp.json())
    .then(this.handleResp)
  }


  handleRegisterSubmit = (userInfo) => {
    console.log("Register form has been submitted")
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        username: userInfo.username,
        password: userInfo.password
      })
    })
    .then(r => r.json())
    .then(this.handleResp)
  }

  renderForm = (routerProps) => {
    if(routerProps.location.pathname === "/login"){
      return <EnterUser formName="Login Form" handleSubmit={this.handleLoginSubmit}/>
    } else if (routerProps.location.pathname === "/signup") {
      return <EnterUser formName="Sign Up Form" handleSubmit={this.handleRegisterSubmit}/>
    }
  }

  renderMyMeals = (routerProps) => {
    return <MyMeals
      user={this.state.user}
      token={this.state.token}
    />
  }

  renderAllMeals = (routerProps) => {
    return <MealsContainer
      user={this.state.user}
      token={this.state.token}
      meals={this.state.meals} 
      user_bare={this.state.user_bare}
      addComment={this.addComment}
      deleteComment={this.deleteComment}
      
    />
  }

  renderMealForm = (routerProps) => {
    return <MealForm
      user={this.state.user}
      token={this.state.token}
      meals={this.state.meals}
      addMeal={this.addMeal}
      
    />
  }


    render() {
      // console.log(this.state.token)
      return (
        <div class="navbar"> 
        <h1 className="heading"> Khandaker Family Meal App </h1>

        
        <div>
          <NavBar/>
        </div>
        <br/>
            <Switch>
                {/* <Route path="/enteruser" component={EnterUser}/> */}
                <Route path="/mealscontainer" render={this.renderAllMeals}/>
                <Route path="/login" render={ this.renderForm } />
                <Route path="/signup" render={ this.renderForm } />
                <Route path="/mymeals" render={ this.renderMyMeals} />
                <Route path="/mealform" render={ this.renderMealForm} />
            </Switch>
        </div> 
      );
    }
    }
    export default withRouter(App);

