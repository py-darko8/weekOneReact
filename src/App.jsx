import Navbar from "./Component/Navbar"
import Sidebar from "./Component/Sidebar"
import Hero from "./Component/Hero"
import myImage from "./assests/hero.png"
const App = () => {
  
  return (
    <div>
      <Navbar  logo = "React" img ={myImage}/>
      <Sidebar />
      <Hero />
    </div>
  )
}

export default App