import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import GroupSearch from '../components/GroupSearch';
import LessonTable from '../components/LessonTable';
import KonsultatsioonideFilter from '../components/KonsultatsioonideFilter';
import KonsultatsioonideTabel from '../components/KonsultatsioonideTabel';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Tunniplaan.scss';


const Tunniplaan = () => {
  const schedule = [
    { day: "Esmaspäev", times: "1.t", subject: "Märgendkeeled", room: "A310", teacher: "Maret Vaabel", group: "ITA22" },
    { day: "Teisipäev", times: "4.t", subject: "Inglise Keel", room: "A321", teacher: "Reet Kasepalu", group: "ITA22" },
    { day: "Kolmapäev", times: "5.t", subject: "Eesti Keel", room: "A312", teacher: "Aile Laats", group: "ITS22" },
    { day: "Neljapäev", times: "3.t", subject: "Matemaatika", room: "A409", teacher: "Risto Korb", group: "ITS22" },
    { day: "Reede", times: "2.t", subject: "Php", room: "A407", teacher: "Margus Treumuth", group: "ITA24" },
  ];

  const days = ["Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede"];
  const periods = ["1.t", "2.t", "3.t", "4.t", "5.t", "6.t", "7.t"];
  const lesson_times = { "1.t": "8.30 - 10.00", "2.t": "10.10 - 11.45", "3.t": "12.30 - 14.00", "4.t": "14.10 - 15.40", "5.t": "15.45 - 17.15" };

  const [group, setGroup] = useState('');

  const ajad = [{ teacher: "Maret Vaabel", date: '15.03.2025', time: 'Kokkuleppel', room: "A407" },
    { teacher: "Reet Kasepalu", date: '16.03.2025', time: 'Kokkuleppel', room: "A408" },
    { teacher: "Aile Laats", date: '17.03.2025', time: 'Kokkuleppel', room: "A302" },
    { teacher: "Risto Korb", date: '18.03.2025', time: 'Kokkuleppel', room: "A215" },
    { teacher: "Margus Treumuth", date: '19.03.2025', time: 'Kokkuleppel', room: "A416" }
  ];

  const [teacher, setTeacher] = useState('');

  return (
    <div>
      <Navbar />
      <div className='spacer'></div>
      <div className='custom-padding'>
        <div className='tunniplaan-page'>
          <h1 className='mb-5'>Tunniplaan</h1>
          <GroupSearch setGroup={setGroup} />

          <LessonTable schedule={schedule} days={days} periods={periods} lesson_times={lesson_times} selected={group} />
          <div className='spacer'></div>
          <div className='line'></div>
          <div className='konsultatsioonid'>
            <h1 className='mt-5 mb-3'>Konsultatsioonid</h1>
            <KonsultatsioonideFilter setTeacher={setTeacher} />
            <KonsultatsioonideTabel ajad={ajad} teacher={teacher} />
          </div>
        </div>
        <div className='spacer'></div>
      </div>
      <Footer />
    </div>

  );
};

export default Tunniplaan;