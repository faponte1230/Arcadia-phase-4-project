import React, {useContext, useState} from "react";
import {UserContext} from './Context/user'
import { useNavigate } from "react-router-dom";


function LoginForm(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorsList, setErrorsList] = useState([])   

    const { login } = useContext(UserContext)
    const navigate  = useNavigate()

/*    const errorDisplay = errorsList ? errorsList.map((err) => {
        <div key={err}>
           <ul style={{color: "red"}}>{err}</ul>
        </div>
        }) : null*/
    
    function handleSubmit(e){
        e.preventDefault()
        fetch('/login',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then((res) => {
            if (res.ok){
                res.json().then((user) => {
                    login(user)
                    console.log(user)
                    navigate('/')
                })
            } else {
                res.json().then((err) => {
                    setErrorsList([err.error])
                    console.log(err)
                    console.log(errorsList)
                })
            }
        }) 
    }
    
    return(
        <>
            <div>
                <h1> Login </h1>
                <form onSubmit={handleSubmit}>
                    
                    <input type='text' id="username" value={username} onChange={(e)=> setUsername(e.target.value)} placeholder="username"/>
                    <input type="password" id="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="password"/>
                    <button type="submit"> Login </button>
                </form>
            </div>
            <div>
            {errorsList ? <p style={{color: "red"}} > {errorsList} </p> : null}
            </div>
        </>
    )
}

export default LoginForm