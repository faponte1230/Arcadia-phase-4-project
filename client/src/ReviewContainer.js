import React, { useState } from "react";
import Review from "./Review";
import ReviewForm from "./ReviewForm";

function ReviewContainer({arc, arc_reviews}){
   
    let review_list= arc_reviews.map((rev) => (
        <Review key={rev.id} rev={rev} />
    ))
        //show review list
    return(

        <div>
            <ReviewForm arc={arc} />
            {review_list}
        </div>
    )
}

export default ReviewContainer