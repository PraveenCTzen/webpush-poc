import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs"

export const WebRoutes = () =>{

    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
                    
                <Route path="/About" element={<AboutUs/>} />
                   
                <Route path="/Contact" element={<ContactUs/>} />
            </Routes>
        </Router>
    )
}