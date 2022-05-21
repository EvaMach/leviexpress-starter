import React from 'react';
import './style.css';
import { Seat } from '../Seat';

export const SeatPicker = () => {
  return (
    <div className="seat-picker container">
      <h2>Vyberte sedadlo</h2>
      <div className="seats">
        <Seat number={23} />
        <Seat number={4} />
        <Seat number={14} />
        <Seat number={39} />
      </div>
    </div>
  );
};
