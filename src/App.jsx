
import AvailableTractors from "./Pages/AvailableTractors";
import "./cssStyles/AvailableTractor.css"
import {BrowserRouter , Routes , Route} from "react-router-dom"
import './cssStyles/App.css'
import Homepage from './Pages/Homepage'
import AboutPage from './Pages/AboutPage'
import Faq from './Pages/Faq'
import WelcomePage from "./Pages/WelcomePage"
import SignIn from './Pages/SignIn'
import SignUpLender from "./Pages/SignUpLender"
import SignUpClient from "./Pages/SignUpClient"
import ClientLoggedInHome from "./loggedInPages/ClientLoggedInHome"
import ClientLoggedInAbout from "./loggedInPages/ClientLoggedInAbout"
import ClientLoggedInFaq from "./loggedInPages/ClientLoggedInFaq"
import VendorLoggedHome from "./loggedInPages/VendorLoggedHome"
import VendorLoggedInAbout from "./loggedInPages/vendorLoggedAbout"
import VendorLoggedInFaq from "./loggedInPages/VendorLoggedFaq"
import DashBoardLayout  from "./loggedInPages/DashBoardLayout";
import DashBoardHome from "./loggedInPages/DashBoardHome";
import DashBoardDetails from "./loggedInPages/DashBoardDetails";
import DashBoardNotification from "./loggedInPages/DashBoardNotification";
import DashBoardSecurity from "./loggedInPages/DashBoardSecurity";






function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path='/about' element={<AboutPage />}/>
      <Route path='/faq' element={<Faq/>} />
      <Route path='/signIn' element={<SignIn />}/>
      <Route path="/welcomePage" element={<WelcomePage />} />
      <Route path="/signUpLender" element={<SignUpLender />}/>
      <Route path="signUpClient" element={<SignUpClient />}/>
      <Route path="clientLoggedInHome" element={<ClientLoggedInHome />}/>
      <Route path="clientLoggedInAbout" element={<ClientLoggedInAbout/>}/>
      <Route path="clientLoggedInFaq" element={<ClientLoggedInFaq />} />
      <Route  path="lenderLoggedInHome" element={<VendorLoggedHome />}  />
      <Route   path="lenderLoggedInAbout" element={<VendorLoggedInAbout />}/>
      <Route   path="lenderLoggedInFaq" element={<VendorLoggedInFaq />}/>
     <Route path="/availableTractor" element={<AvailableTractors />} />

     <Route path="/dashboard" element={<DashBoardLayout />} >
     <Route  index  element={<DashBoardHome />}/>
     <Route  path="dashBoardDetails"  element={<DashBoardDetails/>}/>
     <Route  path="dashBoardNotification"  element={<DashBoardNotification />}/>
     <Route  path="dashBoardSecurity"  element={<DashBoardSecurity />}/>
     </Route>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
