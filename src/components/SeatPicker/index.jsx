import React from 'react';
import './style.css';
import { SeatRow } from '../SeatRow';

const testRow = [
  {
    number: 33,
    isOccupied: false,
  },
  {
    number: 29,
    isOccupied: true,
  },
  {
    number: 25,
    isOccupied: false,
  },
];

export const SeatPicker = ({
  seats,
  journeyId,
  selectedSeat,
  onSeatSelected,
}) => {
  return (
    <div className="seat-picker container">
      <h2>Vyberte sedadlo</h2>
      <div className="seats">
        {seats.map((seat, thisValue) => (
          <SeatRow
            key={thisValue}
            row={seat}
            rowSelectedSeat={selectedSeat}
            onSeatSelected={onSeatSelected}
          />
        ))}
      </div>
    </div>
  );
};
