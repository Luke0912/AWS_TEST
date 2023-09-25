
import './App.css';
import {
  Route,
  Routes,
} from "react-router-dom";
import Product from './product';
import Home from './home';



function App() {
  return (
    <>
    <div className="App">
    <Routes>
      <Route path="/product" element={<Product/>} />
      <Route path="/" element={<Home />} />
    </Routes>
    </div>
    <div>
      Hello
    </div>
    </>

  );
}

export default App;
