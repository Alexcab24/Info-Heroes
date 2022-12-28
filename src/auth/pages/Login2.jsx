import {useNavigate } from 'react-router-dom';


export const Login2 = () => {


const navigate = useNavigate();

const onLogin = () =>{
  navigate('/inicio')
}

  return (
  <>
<div className="fondo-login">
<div className="h1 pt-5 ">

<center><h1>Info-heroes</h1></center>


</div>

<center><h1 className = "pt-3">Welcome:</h1></center>




</div>




<section className="vh-100" >


  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="cuadrado animate__animated animate__rubberBand col-8 col-md-8 col-lg-6 col-xl-5">
        <div className="" >
          <div className=" p-5 text-center">
<img className = "usericon rounded rounded-5 mt-15px" src={localStorage.getItem('profilePic')} aling = "bottom" width = "100px" height = "100px" alt="" />



          </div>
          <div className="d-flex mb-5 justify-content-center align-items-center">
          
            <h1 className = "h1-name" >{localStorage.getItem('name')}</h1>
           
          <button  onClick = {onLogin} className = "btn btn-danger my-1"> Enter</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</section>
  </>
  )
}
