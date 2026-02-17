import "./app.scss"
import Dock from "./components/Dock"
import Navbar from "./components/Navbar"
import Github from "./components/windows/Github"
import MacWindow from "./components/windows/MacWindow"
const App = () => {
  return (
    <main>
      <Navbar/>
      <Dock/>

      <Github/>
    </main>
  )
}

export default App