import { Navigate, Route, Routes } from "react-router"
import { DC, Marvel, Inicio } from "../pages"
import NavbarComp from "../../ui/components/NavbarComp"
import Footer from '../../ui/components/Footer'
import {Spiderman, CaptainAmerica, IronMan, Thor, Hulk, Wolverine, Daredevil, Hawkeye, Cyclop, SilverSurfer} from "../pages/sub-marvel"
import { Batman, Flash, GreenArrow, MartianManhunter, RobinNightWing, Superman, WonderWoman } from "../pages/sub-dc"


export const HeroesRoutes = () => {
  return (
    <>

<NavbarComp/>
<div className = "container">
<Routes>


            <Route path="inicio" element={<Inicio />} />
            <Route path="marvel" element={<Marvel />} />
            <Route path="dc" element={<DC />} />
           
            {/* ----------------SUPERHEROES-Marvel------------------------ */}
            <Route path = "spider-man" element = {<Spiderman/>}/>
            <Route path = "captain-america" element = {<CaptainAmerica/>}/>
            <Route path = "iron-man" element ={<IronMan/>}/>
            <Route path = "thor" element ={<Thor/>}/>
            <Route path = "hulk" element ={<Hulk/>}/>
            <Route path = "wolverine" element ={<Wolverine/>}/>
            <Route path = "daredevil" element ={<Daredevil/>}/>
            <Route path = "hawkeye" element ={<Hawkeye/>}/>
            <Route path = "cyclop" element ={<Cyclop/>}/>
            <Route path = "silver-surfer" element ={<SilverSurfer/>}/>
             {/* ----------------SUPERHEROES-DC------------------------ */}
             <Route path = "batman" element ={<Batman/>}/>
             <Route path = "superman" element ={<Superman/>}/>
             <Route path = "flash" element ={<Flash/>}/>
             <Route path = "green-arrow" element ={<GreenArrow/>}/>
             <Route path = "wonder-woman" element ={<WonderWoman/>}/>
             <Route path = "martian-manhunter" element ={<MartianManhunter/>}/>
             <Route path = "robin-nightwing" element ={<RobinNightWing/>}/>
             
            
            <Route path="/*" element={<Navigate to = "/auth/login" />} />
</Routes>

</div>
<br />
<br />
<br />
<br />

<br/>
<Footer/>
    </>
  )
}
