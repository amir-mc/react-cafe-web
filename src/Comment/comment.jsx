import useAxios from "../../useAxios"
import CategoryList from "../category"
import { Helmet } from 'react-helmet';
import './com.css'
import { useEffect, useState } from "react";

const Commenets=()=>{
  // coment.map(Comment=>(
    const [coment, ,loding]=useAxios({
        url:'/Comments'
    })

const [CurrentIndex,setCurrentIndex]=useState(0)


// Automatic slide every 3 seconds
useEffect(() => {
  const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1));
  }, 3000); // Change comment every 3 seconds

  // Clean up the interval when the component unmounts
  return () => clearInterval(interval);
}, []);

// Function to go to the next comment
const nextComment = () => {
  setCurrentIndex((prevIndex) => (prevIndex + 1) );
};

// Function to go to the previous comment
const prevComment = () => {
  setCurrentIndex((prevIndex) => (prevIndex - 1 ) );
};

return (
<>




<div className="slider-container">
      <div className="slider-content">
  {
      coment.map(Comment=>(
    <>
<div className="comment">
              <p>{Comment.name}</p>
          </div>
    
    </>
   ))
  }        
      </div>

      
      <div className="controls">
          <button onClick={prevComment}>&#10094;</button>
          <button onClick={nextComment}>&#10095;</button>
      </div>
  </div>
   

</>

)

}

   

export default Commenets
