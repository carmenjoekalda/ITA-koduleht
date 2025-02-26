import React from 'react';

const LessonTable = ({ schedule, days, periods, lesson_times, selected }) => {
    return (
        <div className='table-area'>
            <table>
                <thead>
                    <tr>
                        <th>Tund</th>
                        {days.map((day) => (
                            <th key={day}>{day}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {periods.map((period) => (
                        <tr key={period}>
                            <td>{period}</td>
                            {days.map((day) => {
                                const lesson = schedule.find((item) => item.day === day && period === item.times && item.group === selected);
                                return (
                                    <td key={day}>
                                        {lesson && (
                                            <div className='lesson'>
                                                <p>{lesson_times[lesson.times]}</p>
                                                <a>{lesson.subject}</a>
                                                <p>{lesson.room}</p>
                                                <p style={{ fontSize: '0.875rem' }}>{lesson.teacher}</p>
                                            </div>
                                        )}
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default LessonTable;