import React, { useState } from 'react';
import { JourneyPicker } from '../JourneyPicker';
import { JourneyDetail } from '../JourneyDetail';

export const Home = () => {
  const [journey, setJourney] = useState(null);
  console.log(journey);
  return (
    <main>
      <JourneyPicker onJourneyChange={setJourney} />
      {journey === null ? null : <JourneyDetail journey={journey} />}
    </main>
  );
};
