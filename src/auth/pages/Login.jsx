import {useDispatch} from 'react-redux'
import {startGoogleSingIn} from '../../store/auth/thunks';
export const Login = () => {
  

// // sig in with google------------------------------------------------------------

const dispatch = useDispatch();

const onGoogleSigIn = () =>{

  dispatch(startGoogleSingIn());
  
}

return (
<>

<div className="fondo-login">
 
<div className="h1 pt-5 ">

<center><h1>Info-heroes</h1></center>
</div>




</div>



<section className="vh-100" >

  
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="cuadrado animate__animated animate__rubberBand col-8 col-md-8 col-lg-6 col-xl-5">
        <div className="" >
          <div className=" p-5 text-center">
<img className = "usericon mt-15px" src="https://cdn-icons-png.flaticon.com/512/1377/1377075.png" aling = "bottom" width = "100px" height = "100px" alt="" />



          </div>
          <div className="d-flex mb-5 justify-content-center align-items-center">
          <button  onClick = {onGoogleSigIn} className = "btn btn-danger  my-1"> Log in with Google</button>
          </div>
        </div>
      </div>
    </div>
  </div>
 
</section>
</>
  )
}
