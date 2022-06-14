
import Home from "./Pages/Home"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import UserData from "./Pages/Form";
import Overview from "./Pages/Controle";

function Navbar() {
  return (
    <div>

      <Router>
          <Routes>
            <Route path="/" element={[<Home />]}></Route>
            <Route path="/userdata" element={[<UserData />]}></Route>
            <Route path="/overview" element={[<Overview />]}></Route>
          </Routes>
      </Router>
    </div>
    
  )
}

export default Navbar