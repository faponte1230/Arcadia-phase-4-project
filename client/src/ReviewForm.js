import React, { useState } from "react";
//qimport { useContext } from "react";
//import { UserContext } from "./Context/user";

function ReviewForm({arc, addReview, setBtn}){

    const [body, setBody] = useState("")
    const [ errorsList, setErrorsList ] = useState([])

    
    //const { user, setUser } = useContext(UserContext)
    
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
                    
                    addReview(rev)
                    
                    console.log(rev)
                    setBody('')
                    setBtn(false)
                })
            } else {
                res.json().then((err) => {
                    setErrorsList(err.error)
                    console.log(err)
                    console.log(errorsList)
                })
            }
        })

    }

    return(
        <div>
            
            <form onSubmit={handleSubmit}>
                <input type= "text" id= "review" value={body} onChange={(e) => setBody(e.target.value)} placeholder="Review"/>
                <button type="submit" className="button"> Add Review </button>
            </form>

            {errorsList ? errorsList.map((e) => (
                        <ul key={e} style={{color: "red"}}>{e}</ul>))
                      : null}
        </div>
    )  
}

export default ReviewForm

//make error handle