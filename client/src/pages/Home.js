import React from "react";
import './Home.css'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function HomePage() {
    return (
        <>
        <div>
            <Navbar/>
            <div className="spacer">

            </div>
            <Footer/>
        </div>
        </>
    )
}
export default HomePage