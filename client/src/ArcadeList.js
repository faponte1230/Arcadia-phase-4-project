import React from "react";
import ArcadeCard from "./ArcadeCard";

function ArcadeList({arcades}){

    let displayArcadeCards= arcades.map( arc => {
        return(
           <ArcadeCard key={arc.id} arc={arc}/>
        )
    })

    return(
        <div>
            {displayArcadeCards}
        </div>
    )
}

export default ArcadeList