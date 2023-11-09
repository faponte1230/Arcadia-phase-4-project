import {React, useState} from "react";
import Review from "./Review";
import ReviewForm from "./ReviewForm";

function ReviewContainer({arc, arc_reviews, addReview, del, update}){
   
    const [addReviewBtn, setAddReviewBtn] = useState(false)

    let review_list= arc_reviews.map((rev) => (
        <Review key={rev.id} rev={rev} update={update} del={del}/>
    ))
        //show review list
    return(

        <div>
            <button onClick={() =>setAddReviewBtn(!addReviewBtn)}> { addReviewBtn ? "Cancel": "Add a review"}</button>
            {addReviewBtn? <ReviewForm arc={arc} addReview={addReview} setBtn={setAddReviewBtn}/> : null}
        
            {review_list}
        </div>
    )
}

export default ReviewContainer