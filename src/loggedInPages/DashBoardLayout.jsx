import { Outlet , NavLink } from "react-router-dom"
import "../cssStyles/dashBoardStyles.css"
import Layout from "../components/Layout"
import homeIcon from "../assets/homeIcon.svg"
import profileform from "../assets/profile-circle-light.svg"
import security from "../assets/securityLight.svg"
import notify from "../assets/notification.svg"

export default function DashBoardLayout(){
    const activeStyles ={
       Background:"green"
     }
    return(
        <div className="dashBoardContainer">
            <div className="dashBoardLayout">
                <h1>username</h1>
             <div className="layoutWrap"> 
           <NavLink to="/dashboard">
           <Layout img={homeIcon}  text="Home"/>
            </NavLink > 

            <NavLink 
            to="dashBoardDetails"
            Style={({isActive})=> isActive? activeStyles : null} 
            >
           <Layout img={profileform}  text="Profile Details"/>
            </NavLink> 

            <NavLink 
            to="dashBoardNotification"
            Style={({isActive})=> isActive? activeStyles : null} 
            >
           <Layout img={notify}  text="Notifications"/>
            </NavLink>  

            <NavLink 
            to="dashBoardSecurity"
            style={({isActive})=> isActive? activeStyles : null} 
           
            >
           <Layout img={security}  text="Security settings"/>
            </NavLink> 
           </div> 

            </div>
            <Outlet />

        </div>
    )
}