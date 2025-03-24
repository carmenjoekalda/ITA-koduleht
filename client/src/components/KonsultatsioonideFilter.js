import React from "react";

const KonsultatsioonideFilter = ({ setTeacher }) => {
    const handleChange = (e) => {
        setTeacher(e.target.value); 
    };

    return (
        <div className='dropdown-area mb-4'>
            <p className='m-0 w-25 ps-3'>Otsi...</p>
            <select onChange={handleChange} name='groups' id='groups' className='me-2 flex-grow-1'>
                <option value=''>Vali õpetaja</option>
                <option value='Mets, Ksenia'>Mets, Ksenia</option>
                <option value='Reet Kasepalu'>Reet Kasepalu</option>
                <option value='Aile Laats'>Aile Laats</option>
                <option value='Risto Korb'>Risto Korb</option>
                <option value='Margus Treumuth'>Margus Treumuth</option>
            </select>
        </div>
    );
};

export default KonsultatsioonideFilter;
