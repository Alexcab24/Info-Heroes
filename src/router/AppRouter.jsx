import { useSelector } from "react-redux";
import {Route, Routes } from "react-router"
import { Progress } from "../auth/pages";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { HeroesRoutes} from '../heroes';




export const AppRouter = () => {
 
 
  const {status} = useSelector(state => state.auth )

  if(status === 'checking'){
    return <Progress/>
  }

  return (


        <Routes>
            <Route path="/auth/*" element={<AuthRoutes />} />
            <Route path="/*" element={<HeroesRoutes/>} />
        </Routes>


  )
}
