import { useNavigate } from "react-router";
import { WolverineComic } from "../comics/marvel-comics";


export const Wolverine = () => {
    const navigate = useNavigate();
    const onNavigateBack = () =>{
        navigate('/marvel') 
    }
  return (
  <>
  <div className = 'row mt-5'>
   <div className="col-4">
     <div className="fondo rounded rounded-5 pattern-diagonal-lines-lg ">
     <img className = "pic2 rounded rounded-5 animate__animated animate__bounceInLeft" src="https://i.ibb.co/mNsgrZg/marvel-wolverine.jpg" alt="marvel-wolverine" width = "100%" />
     </div>
   
      
   </div>

   <div className="col-8 ">
     <h1 className = 'animate__animated animate__bounceInDown'>Wolverine</h1>
     <ul className = 'list-group list-group-flush'>
       <li className = 'list-group-item'><b>Alter ego: </b>James Howlett</li>
       <li className = 'list-group-item'><b>Publisher: </b>Marvel Comics</li>
       <li className = 'list-group-item'><b>First appearance: </b>The Incredible Hulk #180</li>
     </ul>

     <h4 className = 'mt-3'>Characters:</h4>
     <p>James Howlett</p>
     <button className = 'btn btn-primary'
     onClick = {onNavigateBack}  
    >
       Back
     </button>
   </div>
    </div>

    <div className="row row-sm-start mt-5">
    <div className="col-12" >
    <WolverineComic/>
    </div>
    </div>
  </>
  )
}

export default Wolverine
