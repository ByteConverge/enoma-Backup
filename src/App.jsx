import {BrowserRouter , Routes , Route} from "react-router-dom"
import './cssStyles/App.css'
import Homepage from './Pages/Homepage'
import AboutPage from './Pages/AboutPage'
import Faq from './Pages/Faq'
import WelcomePage from "./Pages/WelcomePage"
import SignIn from './Pages/SignIn'






function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path='/about' element={<AboutPage />}/>
      <Route path='/faq' element={<Faq/>} />
      <Route path='/signIn' element={<SignIn />}/>
      <Route path="/welcomePage" element={<WelcomePage />} />
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
