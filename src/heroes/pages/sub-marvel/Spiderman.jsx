import React from 'react'
import {useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { SpidermanComic } from '../comics/marvel-comics';

export const Spiderman = () => {


    const navigate = useNavigate();
const onNavigateBack = () =>{
    navigate('/marvel') 
}
   
  return (
  <>

<div className = 'row mt-5'>

   <div className="col-4">
  
 <div className="fondo rounded rounded-5  pattern-diagonal-lines-lg ">
 <img className = "pic2 rounded rounded-5 animate__animated animate__bounceInLeft  "   src="https://i.ibb.co/NF26CsG/marvel-spider.jpg" alt="marvel-spider" width = "100%" />
 </div>
   
  
     
      
   
   
   </div>

   <div className="col-8 ">
   
     <h1 className = 'animate__animated animate__bounceInDown'>Spider Man</h1>
     <ul className = 'list-group list-group-flush'>
       <li className = 'list-group-item'><b>Alter ego: </b>Peter Parker</li>
       <li className = 'list-group-item'><b>Publisher: </b>Marvel Comics</li>
       <li className = 'list-group-item'><b>First appearance: </b>Amazing Fantasy #15</li>
     </ul>

     <h4 className = 'mt-3'>Characters:</h4>
     <p>Peter Parker</p>
     <button className = 'btn btn-primary'
     onClick = {onNavigateBack}  
    >
       Back
     </button>
   
   </div>
   
    
   
    </div>
    
    <div className="row row-sm-start mt-5">
    <div className="col-12" >
    <SpidermanComic/>
    
    </div>
    </div>
    
   

  </>
  )
}

export default Spiderman
