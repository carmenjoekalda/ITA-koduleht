import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import '../App.scss'
function HomePage() {
    return (
        <body>
            <div>
                <Navbar/>
                <div className="min-vh-100"></div> 
                <Footer/>
            </div>
        </body>
    )
}
export default HomePage