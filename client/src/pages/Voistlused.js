import React from "react";
import "./Voistlused.scss";
import { useNavigate } from "react-router-dom";
import VVTable from "../components/VabariiklikudVoistlusedTabel";
import RVTable from "../components/RahvusvahelisedVoistlusedTabel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Voistlused = () => {
    const navigate = useNavigate();

    const V_events = [{ nimetus: "Võistlus", toimumise_aeg: "15.01 - 16.01.25", sihtruhm: "Sihtrühm", juhend: "/tegija" },
    { nimetus: "Võistlus", toimumise_aeg: "15.01 - 16.01.25", sihtruhm: "Sihtrühm", juhend: "Link" },
    { nimetus: "Võistlus", toimumise_aeg: "15.01 - 16.01.25", sihtruhm: "Sihtrühm", juhend: "Link" },
    ]

    const R_events = [{ nimetus: "Võistlus", toimumise_aeg: "15.01 - 16.01.25", voitjad: "Carmen,\n Aimar,\n ITA22", juhend: "/tegija" },
        { nimetus: "Võistlus", toimumise_aeg: "15.01 - 16.01.25", voitjad: "Aimar,\n Rasmus\n ITA22", juhend: "Link" },
        { nimetus: "Võistlus", toimumise_aeg: "15.01 - 16.01.25", voitjad: "Rasmus,\n Carmen,\n ITA22", juhend: "Link" },
    ]

    return (
        <div>

            <Navbar />
            
            <div className="custom-padding">
                <div className="voistluste-page d-flex flex-column justify-content-center text-center">

                    <div className="spacer"></div>

                    <h1 className="mb-4">Vabariiklikud ja rahvusvahelised võistlused</h1>

                    <div className="line mt-4 mb-5"></div>

                    <h2 className="mb-5">Vabariiklikud võistlused</h2>
                    <h4 className="text-start mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, 
                        mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. 
                        Nullam quis imperdiet augue. Vestibulum auctor ornare leo, 
                        non suscipit magna interdum eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, 
                        mattis ligula consectetur, ultrices mauris.
                    </h4>

                    <div className="spacer mb-3"></div>

                    <VVTable V_events={V_events} />
                    <div className='d-flex justify-content-center mt-3'>
                        <button onClick={() => navigate('/voistlused')}>Kuva rohkem</button>
                    </div>

                    <div className="spacer"></div>

                    <div className="line mb-5"></div>


                    <h2 className="mb-4 mt-5">Rahvusvahelised võistlused</h2>
                    <h4 className="text-start mb-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, 
                        mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. 
                        Nullam quis imperdiet augue. Vestibulum auctor ornare leo, 
                        non suscipit magna interdum eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, 
                        mattis ligula consectetur, ultrices mauris.
                    </h4>

                    <div className="spacer mb-3"></div>

                    <RVTable R_events={R_events} />
                    <div className='d-flex justify-content-center mt-3 mb-5'>
                        <button onClick={() => navigate('/voistlused')}>Kuva rohkem</button>
                    </div>
                </div>
            </div>

            <div className="spacer"></div>

            <Footer />

        </div>

    );
};

export default Voistlused;