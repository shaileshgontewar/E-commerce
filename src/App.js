import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Header from "./Component/Component/Header";
import Footer from "./Component/Component/Footer";
import Store from "./Component/Store";
import Accesories from "./Component/Accesories";
import Macbook from "./Component/Macbook";
import Iphone from "./Component/Iphone";
import Ipad from "./Component/Ipad";
import Information from "./Component/Main/information";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/information/:id" element={<Information />}></Route>
          <Route path="/store" element={<Store />} />
          <Route path="/iphone" element={<Iphone />} />
          <Route path="/ipad" element={<Ipad />} />
          <Route path="/macbook" element={<Macbook />} />
          <Route path="/accesories" element={<Accesories />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
