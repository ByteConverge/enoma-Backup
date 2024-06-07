import Homepage from './Pages/Homepage'
import {BrowserRouter , Routes , Route} from "react-router-dom"
import './App.css'
import "./Pages/SignupPage.css" 
import SignupPage from './Pages/SignupPage'
import LenderSignUp from './Pages/LenderSignUp'



function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path="/Signup" element={<SignupPage/>}/>
      <Route path="/lenderSignup" element={<LenderSignUp/>}/>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
