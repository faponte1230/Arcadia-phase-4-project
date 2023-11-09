import React from "react";
import ArcadeCard from "./ArcadeCard";
import { useContext } from "react";
import { UserContext } from "./Context/user";

function ArcadeList({arcades, addReview, update, del}){
    
    let displayArcadeCards= arcades.map( arc => {
        return(
           <ArcadeCard key={arc.id} arc={arc} del={del} addReview={addReview} update={update}/>
        )
    })

    const {loggedIn} = useContext(UserContext)
    if (!loggedIn) {
        return( 
            <div>
                <h1> please login or signup to use features</h1>
            </div>  
        );
    } else {  
        return(
            <div>
                {displayArcadeCards}
            </div>
            )
    }    

    
}

export default ArcadeList