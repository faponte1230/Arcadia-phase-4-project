import { useState } from "react";
import React from "react";
//import { useContext } from "react";
//import { UserContext } from "./Context/user";

function UpdateRevForm({rev, update, setBtn}){

    const [body, setBody] = useState(rev.body)
   // const {user} = useContext(UserContext)

   function handleSubmit(e){
    e.preventDefault();
    fetch(`/reviews/${rev.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
            body: body,
      }),
    })
      .then((r) => r.json())
      .then((data) => update(data))
      setBtn(false);
    } 
   
   
    return(
        <div>
            <form onSubmit={handleSubmit} >
                <input type='text' name='name' value={body} onChange={(e) => setBody(e.target.value)} placeholder='review' />
                <button type="submit"> Update </button>
            </form>
        </div>
    )
}

export default UpdateRevForm