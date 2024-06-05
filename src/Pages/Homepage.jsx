import "../cssStyles/homePage.css"
import { Link } from "react-router-dom"
import Cards from "../components/Cards"
import DataIcon from "../components/DataIcon"

export default function Homepage(){
    return (
      <>
     {/* Hero---Section */}
      <div className="heroSection">
        {/* nav---Bar */}
        <nav className="navBar">
            <figure>
           {/* <img src="" alt="" width="40px"/> */}
           LOGO
            </figure>
            {/*  */}
            <div className="navBar--links">
                <div className="HAF--links">
                  <Link>Home</Link>
                  <Link>About us</Link>
                  <Link>FAQ</Link>
                </div>
                {/*  */}
                <div className="links--login--signup">
                    <Link>Sign in</Link>
                    <Link>Sign up</Link>
                </div>
            </div>
        </nav>
        {/* Hero---Main */}
        <div className="heroMain">
         <h1>
          <span className="block">
          <span className="green">E</span>-Noma <span className="green">Elevate Your, Yield</span>
          </span>
          With Innovative Agricultural Structure
          </h1>
          {/*  */}
          <p><span className="block" >We offer a comprehensive suite of tools and technologies designed</span>
          <span className="block">to streamlineyour farming operations.Whether you are a seasoned</span>
          <span className="block">farmer or just starting , ensuring that every crop thrives</span>
          </p>
          {/*  */}
          <Link>
          <div className="getStarted">
            <h3 >Get Started Now</h3>
            <figure>
              <img src="GetStartedArrow.svg" alt="" />
            </figure>
          </div>
          </Link>
       
        </div>
      </div>
      {/* Hero section ends here */}

      {/* Cards section */}
      <div className="cards--Section">
      <Cards 
      img="tractorIcon.svg" 
      text="Agricultural           
          Equipment"
          /> 
      <Cards 
      img="labourersIcon.svg" 
      text="Farm Hands"
      /> 
      <Cards 
      img="landIcons.svg" 
      text=" Fertile Lands Available
            To Farmers"
      /> 
      </div>

      {/* DATA ICONS SECTION */}
      <div className="data--icons">
        {/*  */}
        <DataIcon img="achieveIcon.svg"  number='80+' text="Achievements"/>
        <DataIcon img="LabourIconDark.svg"  number='250+' text="Farmers"/>
        <DataIcon img="comunityIcon.svg"  number='100+' text="Community"/>
        <DataIcon img="tractorDark.svg"  number='310+' text="Farm Equipment"/>
      
         {/*  */}
      </div>
      
      {/* ourMission */}
      <div className="OurMissionSection">
       <div className="missionText">
        <h1 className="title">
         Our Mission
        </h1>
        <div className="">
          <h1>Unleash The Power Of
             Modern Farming</h1>
          <p>To empower farmers with state of the 
          art solutions that not only 
          boost productivity bit also contribute 
          to sustainable farm practice</p>
        </div>
       </div>
       <div className="missionSection--pics">
        <figure>
          <img src="manTilling-OurMission.jpg" alt="" />
        </figure>
        <figure>
          <img src="ourMission--manCarriesProduce.png" alt="" />
        </figure>
       </div>
      </div>

      </>
            
    )
}