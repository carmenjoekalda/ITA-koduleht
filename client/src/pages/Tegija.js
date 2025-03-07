import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Tegija.scss';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CompFilter from '../components/CompFilter';
import TegijaTable from '../components/TegijaTable';
import { useNavigate } from 'react-router-dom';


const Tegija = () => {
    const navigate = useNavigate();

    const events = [{ kuupaev: "16.01", aasta: '2021', aadress: "Kopli 1", klass: "A401", eriala: "Tarkvaraarendajad", kirjeldus: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.", voitjad: "Carmen,\n Aimar,\n Rasmus\n ITA22" },
    { kuupaev: "17.01", aasta: '2020', aadress: "Kopli 2", klass: "A402", eriala: "Tarkvaraarendajad", kirjeldus: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.", voitjad: "Carmen,\n Aimar,\n Rasmus\n ITA22" },
    { kuupaev: "18.01", aasta: '2019', aadress: "Kopli 3", klass: "A403", eriala: "Tarkvaraarendajad", kirjeldus: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.", voitjad: "Carmen,\n Aimar,\n Rasmus\n ITA22" },
    ]

    const [aasta, setAasta] = useState('');


    return (
        <div>
            <Navbar />

            <div className='spacer'></div>

            <div className='custom-padding'>
                <div className='tegija-page d-flex flex-column'>
                    <div className='d-flex flex-column align-items-center'>
                        <h1 className='mb-0'>Aasta tegija</h1>

                        <div className='spacer'></div>

                        <div class='description'>
                            <h4>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
                                Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.
                                Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
                                Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
                            </h4>
                            <h4>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
                                Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
                                Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
                                Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
                            </h4>
                            <h4>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
                                Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
                                Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
                            </h4>
                        </div>
                    </div>

                    <div className='spacer'></div>

                    <CompFilter setAasta={setAasta} />

                    <TegijaTable events={events} aasta={aasta}/>

                    <div className='d-flex justify-content-center'>
                        <button onClick={() => navigate('/voistlused')}>Kuva rohkem</button>
                    </div>
                </div>
            </div>


            <Footer />

        </div>
    )
}

export default Tegija;