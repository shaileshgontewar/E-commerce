import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Header from "./Component/Component/Header";
import Footer from "./Component/Component/Footer";
import Accesories from "./Component/Accesories";
import Macbook from "./Component/Macbook";
import Iphone from "./Component/Iphone";
import Ipad from "./Component/Ipad";
import Profile from "./Component/Profile";
import SingleProduct from "./Component/Main/SingleProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />}></Route>
          <Route path="/iphone" element={<Iphone />} />
          <Route path="/ipad" element={<Ipad />} />
          <Route path="/macbook" element={<Macbook />} />
          <Route path="/accesories" element={<Accesories />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
