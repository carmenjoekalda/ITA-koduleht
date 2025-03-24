import React, { useEffect, useState } from 'react';
import GroupSelector from '../components/GroupSearch';
import LessonSchedule from '../components/LessonTable';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Tunniplaan.scss';

const groupIds = {
    ITA22: '1692',
    ITS22: '1691',
    ITA24: '1950',
};

const Tunniplaan = () => {
    const [schedule, setSchedule] = useState([]);
    const [selectedGroup, setSelectedGroup] = useState('');
    const [weekOffset, setWeekOffset] = useState(0);
    const [days, setDays] = useState(['E', 'T', 'K', 'N', 'R']);
    const [lessonTimes, setLessonTimes] = useState({});
    const [periods, setPeriods] = useState([]);
    const groups = ['ITA22', 'ITS22', 'ITA24'];

    const getMondayOfWeek = () => {
        const today = new Date();
        today.setDate(today.getDate() + (weekOffset * 7));
        const day = today.getDay(),
            diff = today.getDate() - day + (day === 0 ? -6 : 1);
        const monday = new Date(today.setDate(diff));
        return monday.toISOString().split('T')[0]; 
    };

    const fetchSchedule = async (group) => {
        if (!group) return;

        try {
            const weekDate = getMondayOfWeek();
            const groupId = groupIds[group];
            if (!groupId) {
                console.error('Group ID not found for', group);
                return;
            }
            const url = `https://siseveeb.voco.ee/veebilehe_andmed/tunniplaan?nadal=${weekDate}T00:00:00&grupp=${groupId}`;
            console.log(`Fetching data from: ${url}`);
            
            const response = await fetch(url);
            const data = await response.json();
            console.log('API Response:', data);

            if (data && data.tunnid) {
                setLessonTimes(data.ajad || {}); 
                setPeriods(Object.keys(data.ajad || {}).sort((a, b) => parseInt(a) - parseInt(b)));
                
                const formattedSchedule = formatSchedule(data.tunnid);
                setSchedule(formattedSchedule);
                console.log('Formatted Schedule:', formattedSchedule);
            } else {
                console.log('No valid schedule data received');
                setSchedule([]);
                setPeriods([]);
            }
        } catch (error) {
            console.error('Error fetching schedule:', error);
            setSchedule([]);
            setPeriods([]);
        }
    };

    const formatSchedule = (tunnid) => {
        const formatted = [];
        Object.keys(tunnid).forEach((date) => {
            const lessonsForDay = tunnid[date];
            const dayIndex = new Date(date).getDay() - 1;
            if (dayIndex < 0 || dayIndex > 4) return;
            
            lessonsForDay.forEach((lesson) => {
                formatted.push({
                    day: days[dayIndex],
                    times: lesson.tund.toString(),
                    start: lesson.algus,
                    end: lesson.lopp,
                    subject: lesson.aine,
                    group: lesson.grupp || selectedGroup,
                    teacher: lesson.opetaja,
                    room: lesson.ruum,
                });
            });
        });
        return formatted;
    };

    const handleGroupChange = (event) => {
        const group = event.target.value;
        setSelectedGroup(group);
        console.log(`Selected Group: ${group}`);
    };

    useEffect(() => {
        fetchSchedule(selectedGroup);
    }, [selectedGroup, weekOffset]);

    return (
        <div>
            <Navbar />
            <div className="spacer"></div>
            <div className="custom-padding">
                <div className="tunniplaan-page">
                    <h1 className="mb-5">Tunniplaan</h1>
                    <GroupSelector
                        selectedGroup={selectedGroup}
                        onGroupChange={handleGroupChange}
                        weekOffset={weekOffset}
                        setWeekOffset={setWeekOffset}
                        groups={groups}
                    />
                    
                    {periods.length > 0 && schedule.length > 0 ? (
                        <LessonSchedule
                            schedule={schedule}
                            days={days}
                            periods={periods}
                            lessonTimes={lessonTimes}
                            selectedGroup={selectedGroup}
                        />
                    ) : (
                        <p>No schedule data available. {selectedGroup ? `Please check if there are lessons for ${selectedGroup} for the selected week.` : 'Please select a group.'}</p>
                    )}
                </div>
                <div className="spacer"></div>
                <Footer />
            </div>
        </div>
    );
};

export default Tunniplaan;
