import React, { useEffect, useState } from "react";
import GroupSelector from "../components/GroupSearch";
import LessonSchedule from "../components/LessonTable";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Tunniplaan.scss";
import KonsultatsioonideFilter from "../components/KonsultatsioonideFilter";
import KonsultatsioonideTabel from "../components/KonsultatsioonideTabel";

const groupIds = {
  ITA21: "1583",
  ITA22: "1692",
  ITA23: "1844",
  ITA24: "1950",
  BA23: "1848",
  BA24: "1951",
  INSA24: "1963",
  IS23: "1848",
  IS24: "1953",
  ITS21: "1582",
  ITS22: "1691",
  ITS23: "1845",
  ITS24: "1949",
  UX24: "1952",
  VS23: "1843",
  VS24: "1954",
  RMo23: "1866",
  RMo24: "1957",
  SRo24: "1956",
  TSTt24: "1955",
};

const Tunniplaan = () => {
  const [schedule, setSchedule] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState("");
  const [weekOffset, setWeekOffset] = useState(0);
  const [days, setDays] = useState(["E", "T", "K", "N", "R"]);
  const [lessonTimes, setLessonTimes] = useState({});
  const [periods, setPeriods] = useState([]);
  const groups = [
    "ITA21",
    "ITA22",
    "ITA23",
    "ITA24",
    "BA23",
    "BA24",
    "INSA24",
    "IS23",
    "IS24",
    "ITS21",
    "ITS22",
    "ITS23",
    "ITS24",
    "UX24",
    "VS23",
    "VS24",
    "RMo23",
    "RMo24",
    "SRo24",
    "TSTt24",
  ];

  const getMondayOfWeek = () => {
    const today = new Date();
    today.setDate(today.getDate() + weekOffset * 7);
    const day = today.getDay(),
      diff = today.getDate() - day + (day === 0 ? -6 : 1);
    const monday = new Date(today.setDate(diff));
    return monday.toISOString().split("T")[0];
  };

  const fetchSchedule = async (group) => {
    if (!group) return;

    try {
      const weekDate = getMondayOfWeek();
      const groupId = groupIds[group];
      if (!groupId) {
        console.error("Group ID not found for", group);
        return;
      }
      const url = `https://siseveeb.voco.ee/veebilehe_andmed/tunniplaan?nadal=${weekDate}T00:00:00&grupp=${groupId}`;
      console.log(`Fetching data from: ${url}`);

      const response = await fetch(url);
      const data = await response.json();
      console.log("API Response:", data);

      if (data && data.tunnid) {
        setLessonTimes(data.ajad || {});
        setPeriods(
          Object.keys(data.ajad || {}).sort((a, b) => parseInt(a) - parseInt(b))
        );

        const formattedSchedule = formatSchedule(data.tunnid);
        setSchedule(formattedSchedule);
        console.log("Formatted Schedule:", formattedSchedule);
      } else {
        console.log("No valid schedule data received");
        setSchedule([]);
        setPeriods([]);
      }
    } catch (error) {
      console.error("Error fetching schedule:", error);
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
  const [teacher, setTeacher] = useState("");

  return (
    <div>
      <Navbar />
      <div className="spacer"></div>
      <div className="custom-padding">
        <div className="tunniplaan-page">
          <h1 className="mb-0">Tunniplaan</h1>
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
            <p>
              {!selectedGroup ? "Vali rühm :)" : "tundub et tunde pole, weeee"}
            </p>
          )}
        </div>
        <div className="konsultatsioonid">
          <h1 className="mt-5 mb-3">Konsultatsioonid</h1>
          <KonsultatsioonideFilter setTeacher={setTeacher} />
          <KonsultatsioonideTabel teacher={teacher} />
        </div>
        <div className="spacer"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Tunniplaan;
