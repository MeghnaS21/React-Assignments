import { BrowserRouter, Routes, Route } from "react-router-dom";
import './Styling.css'
import Products from "./components/productsCart/Products";
import About from "./components/dashBoard/About";
import Profile from "./components/dashBoard/Home";
import Error from "./components/dashBoard/Error";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import MyCart from "./components/dashBoard/MyCart";
import Protected from "./components/Protected";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Profile />}>
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error />} />
            <Route path="/products" element={<Products />} />
            <Route path="/myCart" element={<MyCart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>

  );
}
// <Route path="/" element={<Protected Component={Profile}/>}>

export default App;
