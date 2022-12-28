import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../store/auth/thunks';

function BasicExample() {

 

  
  const dispatch = useDispatch();

  const {status} = useSelector(state => state.auth )

   if(status === 'disconnect'){
     return <Navigate to = '/auth/login'/>
   }


    const onLogout = () => {
dispatch(startLogout());


       
    } 

   
    
  return (

    <>
 

    <Navbar  className = "navBg rounded-bottom " variant = 'dark' expand="lg" >
   
      <Container >
      <Navbar.Brand className = "logo" as = {Link} to={"/inicio"}> Info-Heroes </Navbar.Brand>


    

        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse id="basic-navbar-nav justify-content-center">
          <Nav className="me-auto">
            <Nav.Link as = {Link} to = {"/marvel"}>Marvel</Nav.Link>
            <Nav.Link as = {Link} to = {"/DC"}>DC</Nav.Link>
          
            
          




<NavDropdown title={<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAUBJREFUSEvVlG1RQzEQRU8VAA4qgSoAHBQFgIOiAFAADhgc1AFFAUioA1oF7Vxmlwl5SfZNIT/Ir3aSt+fu3Y8Jnc+kc3zGAs6BO+DUBH0AD8AqEjgGcG/BS7EE0X31RAApfwW2wAJYAhvgGngCjoCLViYRQBacAZcWPFUqyDPwBkhI8UQAqZXK0rtj4NMyOukJkH2CHZRBd4u8yF5Y+e2/H035r4qstLu2qfuqTARKB03//2TQomFt3rfaVJ1xBcxNed4pqoVWhobvxWozgNUAskRDNB0pfw3clCwrAbxzFFtdI6+lVIrTo4xUE91r2nUGHZUD9NG7KQ8XWULzTlMms1RMDtBCU38390vFNh/KW1uEX89ygD9qDk8F4Nb+EJcDfLlpeeWeR/UuLr8csLMo0ZatwQbfHxooyub7/v8D9gzNRRmX6M9FAAAAAElFTkSuQmCC"/>} id="basic-nav-dropdown ">

<p disabled = {true} className = "" ><img className = "m-2" width = "30px" src={localStorage.getItem('profilePic')}/> {localStorage.getItem('name')}</p>
<NavDropdown.Item  onClick={ onLogout }><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAANZJREFUSEvFlcsRwjAMRF8qgA6ACqAD6ASojHQAJVAKdEAHMDuTMJ4Q/2Sc+JJDrH1aS7YaKq+msj6TAw7ABVgbnT2AM3Dv44cOtGFlFO/DpLHxAd6F4j+6QwezAnS2qk/K+iae40B71QQ3YBGhmAHS3QEtsA1AigDSXXZO9h6IF5Byvu4eOTmOBM0HCLWp2xA6omtX9DHXRTVQkdWu+vqWGaA2VeZyEFomQPWLltNhJgd/AbwSnoEY6OnOk+FbpCLq8lhngsRPoYETyy77/+QzOTvDWMAH32ogGWOPiQcAAAAASUVORK5CYII="/> Log out </NavDropdown.Item>
</NavDropdown>


          
         
         

          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default BasicExample;