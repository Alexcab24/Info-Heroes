import { useNavigate } from 'react-router';
import { FlashComics } from '../comics/DC';

export const Flash = () => {
  const navigate = useNavigate();
  const onNavigateBack = () =>{
      navigate('/dc') 
  }
  return (
  <>
<div className = 'row mt-5'>
   <div className="col-4">
     <div className="rounded rounded-5 pattern-diagonal-lines-lg">

     <img className = "pic2 rounded rounded-5 animate__animated animate__bounceInLeft" src="https://i.ibb.co/QKWZWby/dc-flash.jpg" alt="dc-flash" width = "100%" />
     </div>
  
      
   </div>

   <div className="col-8 ">
     <h1 className = 'animate__animated animate__bounceInDown'>Flash</h1>
     <ul className = 'list-group list-group-flush'>
       <li className = 'list-group-item'><b>Alter ego: </b>Jay Garrick</li>
       <li className = 'list-group-item'><b>Publisher: </b>DC Comics</li>
       <li className = 'list-group-item'><b>First appearance: </b>Flash Comics #1</li>
     </ul>

     <h4 className = 'mt-3'>Characters:</h4>
     <p>Jay Garrick, Barry Allen, Wally West, Bart Allen</p>
     <button className = 'btn btn-primary'
     onClick = {onNavigateBack}  
    >
       Back
     </button>
   </div>
    </div>

    <div className="row row-sm-start mt-5">
    <div className="col-12" >
     
      <FlashComics/>
      
   
    </div>
    </div>
    

  
  </>
  )
}

export default Flash
