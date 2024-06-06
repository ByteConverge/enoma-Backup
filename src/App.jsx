import {BrowserRouter , Routes , Route} from "react-router-dom"
import './cssStyles/App.css'
import Homepage from './Pages/Homepage'
import AboutPage from './Pages/AboutPage'
import Faq from './Pages/Faq'
import WelcomePage from "./Pages/WelcomePage"
import SignIn from './Pages/SignIn'
import SignUpLender from "./Pages/SignUpLender"
import SignUpClient from "./Pages/SignUpClient"





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
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
