import React, { useState, useEffect } from "react";

const KonsultatsioonideFilter = ({ setTeacher }) => {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await fetch(
          "https://siseveeb.voco.ee/veebilehe_andmed/konsultatsioonid?hoone=KPL&aasta=2024"
        );
        const data = await response.json();

        const validTeachers = [
          ...new Set(
            data.konsultatsioonid
              .filter((item) => {
                const currentDate = new Date();

                const isValidDate =
                  item.kuupaevad &&
                  item.kuupaevad.length > 0 &&
                  item.kuupaevad.some(
                    (dateStr) => new Date(dateStr) > currentDate
                  );
                return (
                  isValidDate && item.opetaja && item.opetaja.trim() !== ""
                );
              })
              .map((item) => item.opetaja)
          ),
        ];

        setTeachers(validTeachers);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchTeachers();
  }, []);

  const handleChange = (e) => {
    setTeacher(e.target.value);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="dropdown-area mb-4">
      <p className="m-0 w-25 ps-3">Otsi...</p>
      <select
        onChange={handleChange}
        name="groups"
        id="groups"
        className="me-2 flex-grow-1"
      >
        <option value="">Vali õpetaja</option>
        {teachers.map((teacher) => (
          <option key={teacher} value={teacher}>
            {teacher}
          </option>
        ))}
      </select>
    </div>
  );
};

export default KonsultatsioonideFilter;
