import { React } from 'react';
import './App.css';
import ArcadeForm from './ArcadeForm';
import Header from './Header';
import NavBar from './NavBar';
import Home from './Home'
//import { UserProvider } from './Context/user' 
import { Route, Routes } from 'react-router-dom'
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import ArcadeList from './ArcadeList';
import { useContext } from 'react';
import { UserContext } from './Context/user';

function App() {
  //set Arcade state
//  const [arcades, setArcades] = useState([]);
  const { arcades, setArcades} = useContext(UserContext)

 
  
  //Add Arcade
  function addArc(newArc){
    setArcades([...arcades, newArc])
  }

  //Add Review
  function addReview(newReview){
    const arcUpdate = arcades.map((arc) => { 
     if(arc.id === newReview.arcade_id) {
        return ({ ...arc, reviews: [...arc.reviews, newReview] })
        } else {
        return arc
        }
      }
    )
    setArcades(arcUpdate)
    //setUser({...user, arcades:[ ...user.reviews, newReview]}) 
  
  }

  //Update Review
  function updateReview(updatedReview){
    const arcadeReviews = arcades.find(arc => arc.id === updatedReview.arcade_id).reviews

    const updatedArcReviews = arcadeReviews.map((rev) => {
      if(rev.id === updatedReview.id){
        return updatedReview
      }else{
        return rev;
      }
    });

    const updatedArcades = arcades.map((arc) => {
      if(arc.id === updatedReview.arcade_id){
        return {...arc, reviews:updatedArcReviews}
        }else{
        return arc;
      }
    })
    setArcades(updatedArcades)
    
  }

  //Delete Review
  function deleteReview(deletedReview){
    
    const arcReviewList = arcades.find(arc => arc.id === deletedReview.arcade_id).reviews
    
    const updatedReviews= arcReviewList.filter((arc) => arc.id !== deletedReview.id)
  
    const updatedArcs = arcades.map((arc) => {
      if(arc.id === deletedReview.arcade_id){
           return {...arc, reviews: updatedReviews}
          }else{
          return arc;
      }
     }
    )
    setArcades(updatedArcs)
  }

  return (
    <div className="home">
      
     
        <Header />
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path='/signup' element={<SignupForm />} />
          <Route exact path='/login' element={<LoginForm />} />
          <Route exact path='/arcades' element={<ArcadeList  arcades={arcades} addArc={addArc} addReview={addReview} del={deleteReview} update={updateReview} />} />
          <Route exact path='/addarcade' element={<ArcadeForm addArc={addArc}/>}/>
        </Routes>
    
      

    </div>
  );
}

export default App;