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
    const [errorsList, setErrorsList] = useState([])
    
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
                    body: JSON.stringify(arcData),
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
                            setErrorsList(err.errors)
                            console.log(err)
                            console.log(errorsList)
                        })
                    }
                })
    
    
            
        }

        return(
            <div>
                <form onSubmit={handleArcSubmit}>
                    <h1> Add an Arcade!</h1>
                        <input type= "text" id= "name" value={arcName} onChange={(e) => setArcName(e.target.value)} placeholder="Arcade name"/>
                        <input type= "text" id="arcade_url" value={arcImgUrl} onChange={(e) => setArcImgUrl(e.target.value)} placeholder="URL for arcade"/>
                        <label> Number of Games</label>
                        <input type= "number" id="num_of_games" value={numOfGames} onChange={(e) => setNumOfGames(e.target.value)} placeholder="Number of games"/>
                    <button type="submit"> Add Arcade </button>
                </form>
    
                {errorsList ? errorsList.map((e) => (
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