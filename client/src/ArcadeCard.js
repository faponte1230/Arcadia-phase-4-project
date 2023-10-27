import { React, useState} from "react";
import ReviewContainer from "./ReviewContainer";


function ArcadeCard({arc}){

    const [reviewBtn, setReviewBtn] = useState(false)

    return(
        <div className="card">
            <h2 className="t">Name: {arc.name}</h2>
            <img src={arc.img_url} alt={'Not Found'} className="arcadeimg" />
            <p className="t">Number of Games: {arc.num_of_games}</p>
            <button onClick={() =>setReviewBtn(!reviewBtn)}> { reviewBtn ? "Hide Reviews": "Add or Show Reviews"}</button>

            {reviewBtn? <ReviewContainer arc={arc} arc_reviews={arc.reviews} /> : null}
        </div>
    )
}

export default ArcadeCard