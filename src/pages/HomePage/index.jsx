import React, { useState } from 'react';
import { JourneyPicker } from '../../components/JourneyPicker';
import { JourneyDetail } from '../../components/JourneyDetail/index.jsx';
import { SelectedSeat } from '../../components/SelectedSeat/index.jsx';

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
        <JourneyDetail journey={journey}/>
      )}
      {journey && (
      <SelectedSeat number={journey.autoSeat} />
      )}
    </main>
  );
};
