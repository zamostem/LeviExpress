import React, { useState } from 'react';
import { JourneyPicker } from '../../components/JourneyPicker';

export const HomePage = () => {
  const [journey, setJourney] = useState(null);

  const handleJourneyChange = (journey) => {
    console.log('Cesta:', journey)
    setJourney(journey);
  };

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange}/>
      {journey && (
        <p>Nalezeno spojení s id {journey.journeyId}</p>
      )}
    </main>
  );
};
