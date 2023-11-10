import React, { useState } from "react";
//import { useContext } from "react";
//import { UserContext } from "./Context/user";

function ReviewForm({arc, addReview, setBtn}){

    const [body, setBody] = useState("")
    const [errors, setErrors] = useState([])

    
   // const {revContext} = useContext(UserContext)
    
    function handleSubmit(e) {
        e.preventDefault();
        fetch("/reviews", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({
                body: body,  
                arcade_id: arc.id  
            }),                   
        })
        .then((res) => {
            if (res.ok){
                res.json().then((rev) => {
                    //revContext(rev)
                    addReview(rev)
                    console.log(rev)
                    setBody('')
                    setBtn(false)
                })
            } else {
                res.json().then((err) => {
                    setErrors([err.error])
                    console.log(err)
                    console.log(errors)
                })
            }
        })

    }

    return(
        <div>
            
            <form onSubmit={handleSubmit}>
                <input required type= "text" id= "review" value={body} onChange={(e) => setBody(e.target.value)} placeholder="Review"/>
                <button type="submit" className="button"> Add Review </button>
            </form>

            {errors}
        </div>
    )  
}

export default ReviewForm