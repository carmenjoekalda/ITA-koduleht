const LessonSchedule = ({ schedule, days, periods, lesson_times, selectedGroup, weekOffset }) => {
    const getWeekDates = (offset) => {
        const today = new Date();
        const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay() + 1 + offset * 7));
        return days.map((_, index) => {
            const date = new Date(startOfWeek);
            date.setDate(startOfWeek.getDate() + index);
            return date.toISOString().split('T')[0]; 
        });
    };

    const weekDates = getWeekDates(weekOffset);

    return (
        <div className='table-area'>
            <table>
                <thead>
                    <tr>
                        <th>Tund</th>
                        {weekDates.map((date, index) => (
                            <th key={date}>{days[index]} ({date})</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {periods.map((period) => (
                        <tr key={period}>
                            <td>{period}</td>
                            {weekDates.map((date, index) => {
                                const lesson = schedule.find(
                                    (item) =>
                                        item.date === date &&
                                        item.day === days[index] &&
                                        period === item.times &&
                                        item.group === selectedGroup
                                );

                                return (
                                    <td key={date}>
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
};

export default LessonSchedule;
