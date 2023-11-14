import { useState } from "react";
import React from "react";
import { useContext } from "react";
import { UserContext } from "./Context/user";

function UpdateRevForm({rev, update, setBtn}){

  const [ errorsList, setErrorsList ] = useState([])  
  const [body, setBody] = useState(rev.body)
  const {user, setUser} = useContext(UserContext)

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
      .then((res) => {
        if (res.ok) {
          res.json().then((data) => {
            update(data)
            setBtn(false)
            const updatedUserRev = user.reviews.map(rev => {
              if (rev.id === data.id){
                return data
              }else{
                return rev
              }
            })
            
            setUser({...user, reviews: updatedUserRev})
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
            <form onSubmit={handleSubmit} >
                <input type='text' name='name' value={body} onChange={(e) => setBody(e.target.value)} placeholder='review' />
                <button type="submit"> Update </button>
            </form>
            {errorsList ? errorsList.map((e) => (
                        <ul key={e} style={{color: "red"}}>{e}</ul>))
                      : null}
        </div>
    )
}

export default UpdateRevForm