import React from 'react';

const GroupSearch = ({ setGroup }) => {
    const handleChange = (e) => {
        console.log(e.target.value);
        setGroup(e.target.value);
    }

    return (
        <div className='mb-5'>
            <label htmlFor='groups'>Vali tunniplaan:</label>
            <div className='dropdown-area'>
                <p className='m-0'>Otsi...</p>
                <select onChange={handleChange} name='groups' id='groups' className='ps-3 me-2 flex-grow-1'>
                    <option value=''>Vali rühm</option>
                    <option value='ITA22'>ITA22</option>
                    <option value='ITS22'>ITS22</option>
                    <option value='ITA24'>ITA24</option>
                </select>
            </div>
        </div>
    );
}

export default GroupSearch;