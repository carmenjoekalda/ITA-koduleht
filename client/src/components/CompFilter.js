import React from "react";

const CompFilter = () => {
    return (
            <div className='filter d-flex align-items-center my-4'>
                <p className='m-0 ps-2'>Filtreeri</p>
                <select className='mx-1'>
                    <option value=''>Vali aasta</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
    )
}

export default CompFilter;