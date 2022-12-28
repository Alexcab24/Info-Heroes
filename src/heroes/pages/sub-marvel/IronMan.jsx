import { useNavigate } from "react-router";
import { IronManComic } from "../comics/marvel-comics";


export const IronMan = () => {
    const navigate = useNavigate();
    const onNavigateBack = () =>{
        navigate('/marvel') 
    }
       
  return (
    <>
<div className = 'row mt-5'>
   <div className="col-4">
     <div className="fondo rounded rounded-5 pattern-diagonal-lines-lg ">
     <img className = "pic2 rounded rounded-5 animate__animated animate__bounceInLeft " src="https://i.ibb.co/0j3T84s/marvel-iron.jpg" alt="marvel-iron" width = "100%"/>
     </div>
   
      
   </div>

   <div className="col-8 ">
     <h1 className = 'animate__animated animate__bounceInDown'>Iron Man</h1>
     <ul className = 'list-group list-group-flush'>
       <li className = 'list-group-item'><b>Alter ego: </b>Tony Stark</li>
       <li className = 'list-group-item'><b>Publisher: </b>Marvel Comics</li>
       <li className = 'list-group-item'><b>First appearance: </b>Tales of Suspense #39</li>
     </ul>

     <h4 className = 'mt-3'>Characters:</h4>
     <p>Tony Stark</p>
     <button className = 'btn btn-primary'
     onClick = {onNavigateBack}  
    >
       Back
     </button>
   </div>
    </div>

    <div className="row row-sm-start mt-5">
    <div className="col-12" >
    <IronManComic/>
    </div>
    </div>


    </>
  )
}

export default IronMan
