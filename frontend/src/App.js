
import Menu from "./Menu";
import Porosite from "./Porosite";
import ShtoPorosi from './ShtoPorosi'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App">
      <Menu />
      <Routes>
        <Route exact path="/Porosite" element={<Porosite />} />
        <Route exact path="/porosite/shto" element={<ShtoPorosi />} />
      </Routes>
      <img width="100%" src="https://static.vecteezy.com/system/resources/previews/002/711/839/non_2x/express-delivery-service-by-truck-checking-delivery-service-app-on-mobile-phone-vector.jpg
"></img>
    </div>
    </Router>

  );
}

export default App;
