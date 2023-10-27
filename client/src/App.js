import { React, useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import NavBar from './NavBar';
import ArcadeList from './ArcadeList';



function App() {
  //set Arcade state
  const [arcades, setArcades] = useState([]);

  
  useEffect(() =>{
    fetch("/arcades")
    .then((res) => res.json())
    .then((arcData) => setArcades(arcData))
  }, [])

  return (
    <div className="home">
      <Header />
      <NavBar />
      <ArcadeList arcades={arcades}/>
    </div>
  );
}

export default App;
