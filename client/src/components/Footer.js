import React from "react";
import './Footer.css'
import logo from '../assets/vocologo4.png'

function Footer() {
    return(
        <div className="Footer">
            <img src={logo} className="logo"></img>
            <div className="info">
                <h1>Kontakt</h1>
                <h4>info@voco.ee</h4>
                <h4>7 361 810</h4>
            </div>
            <div>
                <h1>Voco</h1>
                <h4>Kopli 1</h4>
                <h4>Tartu 50115 Eesti</h4>
            </div>
            <div>
                <h1>Privaatsustingimused</h1>
                <h4>Andmekaitse</h4>
                <h4>Küpsised</h4>
            </div>
        </div>
    )
}
export default Footer