import { useNavigate } from "react-router";
import { BatmanComic } from "../comics/DC/BatmanComic";


export const Batman = () => {
    const navigate = useNavigate();
    const onNavigateBack = () =>{
        navigate('/dc') 
    }
  return (
    <>
<div className = 'row mt-5'>
   <div className="col-4">
     <div className=" rounded rounded-5 pattern-diagonal-lines-lg">
     <img className = "pic2 rounded rounded-5 animate__animated animate__bounceInLeft" src="https://i.ibb.co/52JRdxx/dc-batman.jpg" alt="dc-batman" width = "100%" />
     </div>
  
      
   </div>

   <div className="col-8 ">
     <h1 className = 'animate__animated animate__bounceInDown'>Batman</h1>
     <ul className = 'list-group list-group-flush'>
       <li className = 'list-group-item'><b>Alter ego: </b>Bruce Wayne</li>
       <li className = 'list-group-item'><b>Publisher: </b>DC Comics</li>
       <li className = 'list-group-item'><b>First appearance: </b>Detective Comics #27</li>
     </ul>

     <h4 className = 'mt-3'>Characters:</h4>
     <p>Bruce Wayne</p>
     <button className = 'btn btn-primary'
     onClick = {onNavigateBack}  
    >
       Back
     </button>
   </div>
    </div>

    <div className="row row-sm-start mt-5">
    <div className="col-12" >
   <BatmanComic/>
    </div>
    </div>
    </>
  )
}

export default Batman
