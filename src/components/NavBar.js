import React from 'react';
import {NavLink} from 'react-router-dom'

const NavBar = () => {
    return(
        <div class="navlist"> 
            <NavLink to="/mealscontainer"> Meals Container</NavLink> 
            <NavLink to="/login"> login </NavLink> 
            <NavLink to="/signup"> sign up </NavLink> 
            <NavLink to="/mymeals"> My Meals</NavLink> 
            <NavLink to="/mealform"> Meal Form</NavLink> 
        </div>

    //   <ul className="nav">
          
    //     <li>
    //       <NavLink to="/">Home</NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="/login">Login</NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="/register">Register</NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="/profile">Profile</NavLink>
    //     </li>
    //   </ul>
    )
  };
  
  export default NavBar;
    