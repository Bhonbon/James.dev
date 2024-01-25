import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./components/About"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Blogs from "./components/Blogs"
import Terms from "./components/Terms"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Routes>
            <Route path="/blogs" element={<Blogs/>}/>
            <Route path="/terms" element={<Terms/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App