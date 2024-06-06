import Homepage from './Pages/Homepage'
import AboutPage from './Pages/AboutPage'
import Faq from './Pages/Faq'
import {BrowserRouter as Router, Routes , Route} from "react-router-dom"
import './cssStyles/App.css'





function App() {
 

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path='/about' element={<AboutPage />}/>
      <Route path='/faq' element={<Faq/>} />
    </Routes>
    </Router>
    
  )
}

export default App
