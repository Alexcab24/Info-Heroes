import { useNavigate } from "react-router";
import { MartianManhunterComics } from "../comics/DC";


export const MartianManhunter = () => {
  const navigate = useNavigate();
  const onNavigateBack = () =>{
      navigate('/dc') 
  }
  return (
    <>
<div className = 'row mt-5'>
   <div className="col-4">
 <div className="rounded rounded-5 pattern-diagonal-lines-lg">

 <img className = "pic2 rounded rounded-5 animate__animated animate__bounceInLeft" src="https://i.ibb.co/w6QrJJ9/dc-martian.jpg" alt="dc-martian" width = "100%" />
 </div>
   
      
   </div>

   <div className="col-8 ">
     <h1 className = 'animate__animated animate__bounceInDown'>Martian Manhunter</h1>
     <ul className = 'list-group list-group-flush'>
       <li className = 'list-group-item'><b>Alter ego: </b>J'onn J'onzz</li>
       <li className = 'list-group-item'><b>Publisher: </b>DC Comics</li>
       <li className = 'list-group-item'><b>First appearance: </b>Detective Comics #225</li>
     </ul>

     <h4 className = 'mt-3'>Characters:</h4>
     <p>Martian Manhunter</p>
     <button className = 'btn btn-primary'
     onClick = {onNavigateBack}  
    >
       Back
     </button>
   </div>
    </div>
    <div className="row row-sm-start mt-5">
    <div className="col-12" >
   <MartianManhunterComics/>
    </div>
    </div>

    </>
  )
}

export default MartianManhunter
