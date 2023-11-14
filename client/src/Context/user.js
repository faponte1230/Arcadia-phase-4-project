import  React, {useEffect, useState } from 'react';

const UserContext = React.createContext();

function UserProvider( { children } ){
    const [ user, setUser] = useState({})
    const [loggedIn, setLoggedIn] = useState(false)
    const [arcades, setArcades] = useState([])

    useEffect(() => {
        fetch('/me')
        .then((r) => {
          if (r.ok){
            r.json().then((user) => {
                setUser(user)
                console.log(user)
                setLoggedIn(true)
                fetchArcs()
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
    const fetchArcs = () => {
        fetch("/arcades")
        .then((res) => res.json())
        .then((arcData) => {
            setArcades(arcData)
            console.log(arcData)
        })
    }

    /*
    const fetchReviews = () => {
        fetch('/reviews')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setReviews(data)
        })
    } */

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
    } 
    */
    /*const revContext = (data) =>{
        setReviews([...reviews, data])
    }*/

    const login = (user) => {
        setUser(user)
        fetchArcs()
        setLoggedIn(true)
    }
    
    const logout = () => {
        setUser({})
        setArcades([])
        setLoggedIn(false)
    }
    
    const signup = (user) => {
        setUser(user)
        fetchArcs()
        setLoggedIn(true)
    }
    return(
        <UserContext.Provider value={ {user, arcades, setArcades, login, logout, signup, loggedIn, setUser}}>
            {children}
        </UserContext.Provider>

    )

}

export { UserContext, UserProvider }