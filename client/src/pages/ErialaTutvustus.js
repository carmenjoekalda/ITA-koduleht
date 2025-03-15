import React from "react";
import { useParams } from "react-router-dom";
import ErialaData from "../assets/ErialaData";
import NavigationBar from "../components/Navbar";
import Footer from "../components/Footer";
import './ErialaTutvustus.css'
function ErialaTutvustus() {
  const { id } = useParams();
  const eriala = ErialaData[id];
  if (!eriala) {
    return <h1>sorry, eriala pole :(</h1>;
  }
  return (
    <div>
        <NavigationBar/>
        <div className="custom-padding">

            <div style={{height: "208px"}}>

            </div>
            <h1 style={{marginBottom: "37px"}}>
                {eriala.title}
            </h1>
            {/*erialapilt/vajalikud materjalid */}
            <div className="d-flex" style={{height: "25rem",background: "#EEE", borderRadius: "10px", overflow: "hidden" ,marginBottom: "8rem"}}>
                <div className="bg-dark" style={{width: "40%"}}>

                </div>
                <div className="flex-grow-1 d-flex flex-column align-items-center">
                    <div className="vajalikud-materjalid-top"/>
                    <div className=" flex-grow-1">
                        <h1 className="mt-5">Vajalikud materjalid</h1>
                        <button className="vajalikud-materjalid-btn mb-3">
                            Õppekava PDF
                        </button>
                        <button className="vajalikud-materjalid-btn">
                            Rakenduskava PDF
                        </button>
                    </div>  
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
export default ErialaTutvustus;
