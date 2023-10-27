import React from "react";

function Review({arc, rev}){

    return(
        <div className="container">
            <ul className="comment-author">
                {rev.username}
            </ul>
            <ul>
                {rev.body}
            </ul>

            <p>add CRUD</p>
        </div>
    )
}

export default Review