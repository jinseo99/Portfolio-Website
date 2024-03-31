import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects"
import Resume from "./components/Resume/Resume"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer"
import "./style.css";
const App = () => {

    return (
        <div className="">
            <NavBar/>
            <Home/>
            <About/>
            <Projects/>
            <Resume/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
