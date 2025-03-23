import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import GroupSelector from '../components/GroupSearch';
import LessonSchedule from '../components/LessonTable';
import KonsultatsioonideFilter from '../components/KonsultatsioonideFilter';
import KonsultatsioonideTabel from '../components/KonsultatsioonideTabel';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Tunniplaan.scss';

const Tunniplaan = () => {
    const schedule = [
        { date: '2025-03-24', day: 'E', times: '2.t', group: 'ITA22', subject: 'Mata woo', room: '101', teacher: 'RiSTO!!' },
        { date: '2025-03-25', day: 'Tuesday', times: '10:00', group: 'ITA22', subject: 'oi ei testimine', room: '102', teacher: 'KARL' },
    ];

    const days = ['E', 'T', 'K', 'N', 'R']; 
    const periods = ['1.t', '2.t', '3.t', '4.5', '5.t', '6.t', '7.t']; 

    const [selectedGroup, setSelectedGroup] = useState(''); 
    const [weekOffset, setWeekOffset] = useState(0);
    const [teacher, setTeacher] = useState(''); 
    const handleGroupChange = (event) => {
        setSelectedGroup(event.target.value);
    };

    return (
        <div>
            <Navbar />
            <div className='spacer'></div>
            <div className='custom-padding'>
                <div className='tunniplaan-page'>
                    <h1 className='mb-5'>Tunniplaan</h1>
                    <GroupSelector 
                        selectedGroup={selectedGroup}
                        onGroupChange={handleGroupChange}
                        weekOffset={weekOffset}
                        setWeekOffset={setWeekOffset}
                    />

                    <LessonSchedule 
                        schedule={schedule} 
                        days={days} 
                        periods={periods} 
                        selectedGroup={selectedGroup} 
                        weekOffset={weekOffset} 
                    />

                    <div className='spacer'></div>
                    <div className='line'></div>
                    <div className='konsultatsioonid'>
                        <h1 className='mt-5 mb-3'>Konsultatsioonid</h1>
                        <KonsultatsioonideFilter setTeacher={setTeacher} />
                        <KonsultatsioonideTabel ajad={[]} teacher={teacher} />
                    </div>
                </div>
                <div className='spacer'></div>
            </div>
            <Footer />
        </div>
    );
};

export default Tunniplaan;
