import React, { useContext, useState} from "react";
import { UserContext } from "./Context/user";
import UpdateRevForm from "./UpdateRevForm";

function Review({rev, del, update}){

    const [updateRevBtn, setUpdateRevBtn] = useState(false)
    
    const {user,  setUser} = useContext(UserContext)

    function handleDelete(){
        fetch(`/reviews/${rev.id}`, {
            method: "DELETE" ,
        })
        del(rev)
        const updateUserRev = user.reviews.filter((r) => r.id !== rev.id)
        setUser({...user, reviews: updateUserRev})
        console.log(user)
    }
    
    //delete function here? or parent..
    return(
        <div className="container">
            <ul className="comment-author">
                {rev.username}
            </ul>
            <ul>
                {rev.body}
            </ul>
            {rev.user_id === user.id ? <button className="button"onClick={(e) => setUpdateRevBtn(!updateRevBtn)}> { updateRevBtn ? "Cancel": "Update review" }</button>
            : null}
            {updateRevBtn? <UpdateRevForm rev={rev} update={update} setBtn={setUpdateRevBtn}/> : null}
            <br/>
            {rev.user_id === user.id ? <button className="button"onClick={handleDelete}> Delete review </button>
            : null}
        
        </div>
    )
}

export default Review