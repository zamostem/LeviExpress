import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './style.css';

export const ReservationPage = () => {
  const [reservation, setReservation] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch(`https://apps.kodim.cz/daweb/leviexpress/api/reservation?id=${id}`);

      if (!response.ok) {
        return <p>Něco se pokazilo...</p>
      }

      const data = await response.json();
      console.log('Data získaná z endpointu:', data);
      setReservation(data.results)
    };
    loadData();
  }, [])
  

  return (
    <div className="reservation container">
      <h2>Vaše e-jízdenka č. {id}</h2>
      <div className="reservation__body">
        <div className="reservation__headings">
          <p>Datum cesty:</p>
          <p>Odjezd:</p>
          <p>Příjezd:</p>
          <p>Sedadlo:</p>
        </div>
        <div className="reservation__info">
          {reservation && (
            <>
              <p>{reservation.date}</p>
              <p>{reservation.fromCity.name}, {reservation.fromCity.time}</p>
              <p>{reservation.toCity.name}, {reservation.toCity.time}</p>
              <p>{reservation.seatNumber}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};