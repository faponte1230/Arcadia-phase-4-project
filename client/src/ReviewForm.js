import React, { useState } from "react";


function ReviewForm({arc, addReview, setBtn}){

    const [body, setBody] = useState("")
    const [errors, setErrors] = useState([])

    
    // we added the setUser state right at the end of this project, it goes along with the code marked below in green, identified as #combonumber7fromMacDonals
    //const {user, setUser} = useContext(UserContext)
    
    function handleSubmit(e) {
        e.preventDefault();
        fetch("/reviews", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({
                body: body,   //<--- body is an the current review you are typing from the input
                arcade_id: arc.id   //< --- we want to send the cake_id to the backend too.
            }),                    // remember, to create a review in the backend you need cake_id, review, and user_id. user_id is already stored in sessions so no need to include it.
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
                    setErrors([err.error])
                    console.log(err)
                    console.log(errors)
                })
            }
        })

                 /*// this was added right at the end of this project, #combonumber7fromMacDonals
                    console.log(cake)
                        setUser({
                        ...user, cakes: [...user.cakes, cake]
                        })
            //////////////////////////////////////*
             } else {
                const errorList = data.errors.map((e) => (
                    <div key={e}>
                        <ul style={{color:"red"}} >{e}</ul>
                    {arc.id ? "" :  
                        <div>
                            <button  className="button"> Click here to SignIn and make a comment </button> 
                            <button  className="button"> Already have an account? Click here</button> 
                        </div>
                    }
                    </div>
                 ))
                 setErrors(errorList)
             }
        }) */
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