import { Routes, Route, Link } from "react-router-dom";
import AboutUs from './AboutUs/AboutUs';
// import ContactUs from './ContactUs/ContactUs';4
import Products from './Products/Products';
import Home from './/Home/Home';


const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    )
}

export default Main;