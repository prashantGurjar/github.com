import logo from './logo.svg';
// import './App.css';
import Header from './partials/Header';
import Home from './Pages/Home';
import './assets/css/style.css';
import About from './Pages/About';
import Footer from './partials/Footer';



import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Routes>
          <Route path="/Footer" element={<Footer />}></Route>
        </Routes>
        <Routes>
            <Route path="/About" element={<About />}></Route>
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
