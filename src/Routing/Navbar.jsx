import React from 'react'
import './css/navbar.css'
import {NavLink} from "react-router-dom"

function Navbar(){
    return(
        <>


        <header>
        <h1 class="logo">Kartik</h1>
        <nav>
          <ul class="nav_links">

           <NavLink  exact to={'/'}> <li><a>Home</a></li> </NavLink>

           <NavLink  exact to={'/about'}>  <li><a>About</a></li> </NavLink>
     
            <NavLink   to={'/user/kartik/verma'}>    <li><a>User</a></li> </NavLink> {/*"/kartik/verma" is by defalut parameter passed because in " Routes WHICH IS IN APP PAGE WE HAVE ALREADY PASS TWO DYNAMIIC PARAMETER " */} 
         
          </ul>
        </nav>
        <NavLink exact to={'/contact'} >
        <a class="cta"><button>Contact</button></a>
        </NavLink>
      </header>
        </>
    )
}

export default Navbar;