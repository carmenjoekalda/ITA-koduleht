import React from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Tunnustus.scss';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import tunnustus from "../assets/tunnustus suur.png";

const Tunnustus = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Navbar />
            <div className="custom-padding">
                <div className="spacer"></div>
                <div className="tunnustus-page">
                    <div className="d-flex flex-row justify-content-between align-items-center mb-5">
                        <button className="p-0" onClick={() => navigate('/tunnustused')}>Mine tagasi</button>
                        <h1>Sündmuse pealkiri</h1>
                        <h4>06.12.2024</h4>
                    </div>
                    <div>
                        <h3 className="m-0">
                            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.  
                            Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. 
                            <br />
                            <br />
                             Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, 
                            at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, 
                            vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.
                        </h3>
                        <img src={tunnustus} alt="tunnustus" className="my-5" />
                        <div className="d-flex flex-row justify-content-between px-3 mb-5">
                            <p style={{ color: 'rgba(111, 111, 111, 0.96)', fontFamily: 'Montserrat', fontSize: '1.5625rem', fontWeight: '300', lineHeight: 'normal' }}>Foto kohta infot</p>
                            <p style={{ color: 'rgba(111, 111, 111, 0.96)', fontFamily: 'Montserrat', fontSize: '1.5625rem', fontWeight: '300', lineHeight: 'normal' }}>Foto Avaldaja</p>
                        </div>
                        <h3 className="m-0">
                            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. 
                            Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. 
                            Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, 
                            at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales.
                            <br />
                            <br />
                             Aliquam sem ipsum, vehicula ac tortor vel, egestas ullamcorper dui. Curabitur at risus sodales, tristique est id, 
                            euismod justo. Mauris nec leo non libero sodales lobortis. Quisque a neque pretium, dictum tellus vitae, euismod neque. 
                            Aenean lacinia, nisl id vehicula condimentum, enim massa tempor nibh, vitae volutpat sapien metus aliquet nisl. Etiam dui eros, 
                            tincidunt tristique blandit id, gravida vitae augue. Proin imperdiet mi nec justo convallis gravida. Pellentesque habitant morbi 
                            tristique senectus et netus et malesuada fames ac turpis egestas. Mauris consectetur nibh in mattis commodo.
                        </h3>
                        <div className="spacer"></div>
                        <h4 className="text-center" >Uudis avaldati 06.12.2024</h4>
                        <div className="spacer"></div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Tunnustus;