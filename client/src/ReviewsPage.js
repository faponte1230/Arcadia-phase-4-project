import React from "react";
import { useContext } from "react";
import { UserContext } from "./Context/user";

function ReviewsPage(){

   const {reviews, loggedIn} = useContext(UserContext)
    
   if (loggedIn){

    console.log(reviews)
    const showRevs = reviews.map(rev => <li key={rev.id}>Username {rev.username} said: {rev.body}<br/><br/></li>)
    return(
        <div>
                <h1>Total Reviews</h1>
            <ul>
                {showRevs}
            </ul>
        </div>
    )
    }else {
        return(
            <h1> You must be logged in to see reviews </h1>
        )
    }
}

export default ReviewsPage