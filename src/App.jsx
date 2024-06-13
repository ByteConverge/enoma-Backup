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
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
