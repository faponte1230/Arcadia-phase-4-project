import  React, {useEffect, useState } from 'react';

const UserContext = React.createContext();

function UserProvider( { children } ){
    const [ user, setUser] = useState({})
    const [loggedIn, setLoggedIn] = useState(false)
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('/me')
        .then((r) => {
          if (r.ok){
            r.json().then((user) => {
                setUser(user)
                setLoggedIn(true)
                fetchReviews()
            })
          }
          else {
            r.json().then((r) => {
                setLoggedIn(false)
                console.log(r)
            })
          }
        })
      }, [])
/*    useEffect(() => {
        fetch('/me')
        .then(res => res.json())
        .then(data => {
            setUser(data)
            if (data.error){
                setLoggedIn(false)
            } else {
                setLoggedIn(true)
                
            }
        })
    }, []) */
           
    const fetchReviews = () => {
        fetch('/reviews')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setReviews(data)
        })
    } 

    /*const addReview = (newReview) => {
        fetch('/reviews',{
            method: "POST",
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(newReview)
        })
        .then( res => res.json())
        .then(data => {
            setReviews([...reviews, data])
        })
    } */

    const login = (user) => {
        setUser(user)
        fetchReviews()
        setLoggedIn(true)
    }
    
    const logout = () => {
        setUser({})
        setReviews([])
        setLoggedIn(false)
    }
    
    const signup = (user) => {
        setUser(user)
        fetchReviews()
        setLoggedIn(true)
    }
    return(
        <UserContext.Provider value={ {user, reviews, login, logout, signup, loggedIn, setUser}}>
            {children}
        </UserContext.Provider>

    )

}

export { UserContext, UserProvider }