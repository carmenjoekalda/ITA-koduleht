import React from "react";
import NavigationBar from "./Navbar";
import Footer from "./Footer";
import kontakt from "../assets/kontakt.png";

function Kontakt() {
    return(
        <>
            <NavigationBar/>
            <img src={kontakt}></img>
            <Footer/>
        </>
    )
}
export default Kontakt