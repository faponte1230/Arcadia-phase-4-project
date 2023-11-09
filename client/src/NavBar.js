import React, {useContext} from "react";
import {UserContext} from "./Context/user"
import { Link, useNavigate } from "react-router-dom"

function NavBar(){
    const {user,loggedIn,logout} = useContext(UserContext)
    const navigate = useNavigate()

    const logoutUser = () => {
        fetch('/logout', {
            method: 'DELETE',
            headers: {'Content-Type' : 'application/json'}
        })
        .then(()=> {
            navigate('/login')
            logout()
            
        })
    }
    if(loggedIn){
        return (
            <div>
                <h1>
                    Hello {user.username}   <br/>
                    <button onClick={logoutUser}> Logout </button>
                </h1>
                <br/>

                <Link to='/'>
                    <button className="button" > Home </button>
                </Link>

                <Link to='/arcades'>
                    <button className="button"> Arcades </button>
                </Link>

                <Link to='/reviews'>
                    <button className="button"> Reviews </button>
                </Link>

                <Link to='/addarcade'>
                    <button className="button"> Add Arcade </button>
                </Link>

            </div>
        )
    } else {
        return(
            <div>
                <Link to='/'>
                    <button className="button" > Home </button>
                </Link>

                <Link to='/signup'>
                    <button className="button" > Signup </button>
                </Link>
                
                <Link to='/login'>
                    <button className="button" > Login </button>
                </Link>

               
            </div>
        )
    }
}

export default NavBar