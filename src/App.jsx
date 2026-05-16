import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Project from "./components/Project"
import Testimonails from "./components/Testimonails"


function App() {

  return (
    <div className="w-full overflow-hidden">
      <Header/>
      <About/>
      <Project/>
      <Testimonails/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
