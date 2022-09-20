import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import Login from "./components/Login/Login";
import "./App.css";
import SignUp from "./components/SignUp/SignUp";
import Protected from "./common/Protected";

function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/" element={<Protected Component={Home}/>} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/movie/:imdbID" element={<MovieDetail/>} />
            <Route path="*" element={<PageNotFound/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
