import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Login, Login2} from '../pages';


export const AuthRoutes = () => {

  const {status} = useSelector(state => state.auth )

  if(status === 'authenticated'){
    return <Login2/>
  }
  
  return (
    <Routes>
        <Route path="login" element={ <Login/> } />
        <Route path='/*' element={ <Navigate to="/auth/login" /> } />
    </Routes>
  )
}