import {React, useState} from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./Context/user";


function ArcadeForm({ addArc }){
    const {loggedIn} = useContext(UserContext)
    const [arcName, setArcName] = useState("")
    const [arcImgUrl, setArcImgUrl] = useState("")
    const [numOfGames, setNumOfGames] = useState(0)
   
    const navigate = useNavigate()
    const [errors, setErrors] = useState([])
    
    if (loggedIn) {
        

        
        function handleArcSubmit(e){
            e.preventDefault()
                const arcData = {
                name: arcName,
                img_url: arcImgUrl,
                num_of_games: numOfGames
                };
                fetch("/arcades", {
                     method: "POST",
                     headers: {
                        "Content-Type": "application/json"
                        },
                     body: JSON.stringify(arcData)
                 })
                 .then((res) => {
                    if (res.ok){
                        res.json().then((data) => {
                            addArc(data)
                            console.log(data)
                            navigate('/arcades')
                        })
                    } else {
                        res.json().then((err) => {
                            setErrors([err.errors])
                            console.log(err)
                            console.log(errors)
                        })
                    }
                })
    
    
            
        }

        return(
            <div>
                <form onSubmit={handleArcSubmit}>
                    <h1> Add an Arcade!</h1>
                        <input required type= "text" id= "name" value={arcName} onChange={(e) => setArcName(e.target.value)} placeholder="Arcade name"/>
                        <input required type= "text" id="arcade_url" value={arcImgUrl} onChange={(e) => setArcImgUrl(e.target.value)} placeholder="URL for arcade"/>
                        <input required type= "number" id="num_of_games" value={numOfGames} onChange={(e) => setNumOfGames(e.target.value)} placeholder="Number of games"/>
                    <button type="submit"> Add Arcade </button>
                </form>
    
                {errors ? errors.map((e) => (
                            <ul key={e} style={{color: "red"}}>{e}</ul>))
                          : null}
            </div>
        )
    } else {
        return (
            <div>
                <h1> please login or signup to use features</h1>
            </div> 
        )
    }

}

export default ArcadeForm