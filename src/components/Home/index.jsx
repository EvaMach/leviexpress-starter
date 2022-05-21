import React, { useState } from 'react';
import { JourneyPicker } from '../JourneyPicker';
import { JourneyDetail } from '../JourneyDetail';
import { SelectedSeat } from '../SelectedSeat';

export const Home = () => {
  const [journey, setJourney] = useState(null);
  console.log(journey);
  return (
    <main>
      <JourneyPicker onJourneyChange={setJourney} />
      {journey === null ? null : (
        <>
          <JourneyDetail journey={journey} />
          <SelectedSeat number={journey.autoSeat} />
        </>
      )}
    </main>
  );
};
