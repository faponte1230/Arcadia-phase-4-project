import React, { useContext } from "react";
import { UserContext } from "./Context/user";




function Home(){
    const { user, loggedIn} = useContext(UserContext)

    if (loggedIn) {
        
        const userArr = user.arcades
        console.log(userArr)
    
        const showArcadeArr = userArr.map(e => <li key={e.id}>{e.name}</li>)
        //console.log(showRevs)

        
        return( 
            <div>
                <h2> Welcome {user.username}! </h2>
                <p> Click on the Arcades button above to navigate and view current arcades! </p>
                <br/>
                <br/>
                <h3>Your Reviewed Arcades:
                    <br/>
                    <br/>
                   <ul>{showArcadeArr}</ul>
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

