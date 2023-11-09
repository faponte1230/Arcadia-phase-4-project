import React, { useContext } from "react";
import { UserContext } from "./Context/user";




function Home(){
    const { user, loggedIn} = useContext(UserContext)

    if (loggedIn) {
        
        const revArr = user.reviews
        console.log(revArr)
    
        const showRevs = revArr.map(e => <li key={e.id}>{e.body}</li>)
        //console.log(showRevs)

        
        return( 
            <div>
                <h2> Welcome {user.username}! </h2>
                <p> Click on the Arcades button to navigate and view current arcades! </p>
                <br/>
                <br/>
                <h3>Your Reviews:
                    <br/>
                    <br/>
                   {showRevs}
                </h3>
               
            </div>
        );
        } else { 
             return(
                <div>
                    <h1> Welcome to Arcadia!</h1>
                    <p> please login or signup to use features</p>
                    
                    
                </div>
            )
        }
}

export default Home

