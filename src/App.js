
import Home from "./Home"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from './Header';
import UserData from "./UserData";
import Overview from "./Overview";






function Navbar() {
  return (
    
    
    <div>

    <Router>
        <Routes>
          <Route path="/" element={[<Header />,<Home />]}></Route>
          <Route path="/userdata" element={[<Header />,<UserData />]}></Route>
          <Route path="/overview" element={[<Header />,<Overview />]}></Route>
         
        </Routes>
     </Router>
    </div>
    
  )
}

export default Navbar