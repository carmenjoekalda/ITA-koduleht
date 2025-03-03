import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Tegija.scss';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const Tegija = () => {
    return (
        <div>
            <Navbar />

            <div className='spacer'></div>

            <div className='custom-padding'>
                <div className='tegija-page d-flex flex-column'>
                    <div className='d-flex flex-column align-items-center'>
                        <h1 className='m-0 mt-5'>Aasta tegija</h1>

                        <div className='spacer'></div>

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

                    <div className='spacer'></div>

                    <div className='mb-4'>
                        <div className='filter d-flex align-items-center my-3'>
                            <p className='m-0 ps-2'>Filtreeri</p>
                            <select className='mx-1'>
                                <option value=''>Vali aasta</option>
                                <option value='2021'>2021</option>
                                <option value='2020'>2020</option>
                                <option value='2019'>2019</option>
                            </select>
                        </div>

                        <div className='table'>

                        </div>
                    </div>

                    <div className='spacer'></div>

                </div>

            </div>




        </div>
    )
}

export default Tegija;