const LessonSchedule = ({
  schedule,
  days,
  periods,
  lessonTimes,
  selectedGroup,
}) => {
  console.log("Schedule Received:", schedule);
  console.log("Selected Group:", selectedGroup);
  console.log("Lesson Times:", lessonTimes);
  console.log("Periods:", periods);
  console.log("Days:", days);

  return (
    <div className="table-area">
      <table>
        <thead>
          <tr>
            <th>Tund</th>
            {days?.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {periods?.map((period) => (
            <tr key={period}>
              <td>{lessonTimes[period]}</td>
              {days?.map((day) => {
                const lesson = schedule.find(
                  (item) =>
                    item.day === day &&
                    period.toString() === item.times &&
                    (item.group === selectedGroup || item.group === "")
                );
                return (
                  <td key={day}>
                    {lesson ? (
                      <div
                        className="lesson px-3"
                        style={{ textAlign: "left" }}
                      >
                        <a
                          style={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: "2",
                          }}
                        >
                          {lesson.subject}
                        </a>{" "}
                        <p>{lesson.room}</p>
                        <p style={{ fontSize: "0.875rem" }}>{lesson.teacher}</p>
                      </div>
                    ) : (
                      <p></p>
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
