import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import './style.css';
import { JourneyPicker } from '../../components/JourneyPicker';
import { JourneyDetail } from '../../components/JourneyDetail/index.jsx';
import { SeatPicker } from '../../components/SeatPicker/index.jsx';


export const HomePage = () => {
  const [journey, setJourney] = useState(null);
  const navigate = useNavigate();

  const handleJourneyChange = (journey) => {
    console.log('Cesta:', journey)
    setJourney(journey);
  };

  const handleBuy = async () => {
    console.log('Funguju!')
    
    const response = await fetch('https://apps.kodim.cz/daweb/leviexpress/api/reservation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'create',
        seat: journey.autoSeat,
        journeyId: journey.journeyId,
      }),
    })

    const data = await response.json()
    const reservation = data.results.reservationId;
    console.log('reservationId:', reservation);

    /*const data = await response.json()
    const reservation = data.results;
    console.log('reservationId:', reservation);*/
    
    navigate(`/reservation/${reservation}`);
    
  };
  
  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange}/>
      {journey && (
        <>
          <JourneyDetail journey={journey}/>
          <SeatPicker seats={journey.seats} journeyId={journey.journeyId} />
          <div className="controls container">
            <button className="btn btn--big" type="button" onClick={handleBuy}>
              Rezervovat
            </button>
          </div>
        </>
      )}
    </main>
  );
};
