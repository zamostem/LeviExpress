import React from 'react';
import "./style.css";
import { Seat } from '../Seat/index.jsx';

export const SeatRow = ({ row, rowSelectedSeat }) => {
    return (
        <div className="seat-row">
            {row.map((seat) => (
                <Seat key={seat.number} number={seat.number} isOccupied={seat.isOccupied}  isSelected={rowSelectedSeat === seat.number} />
            ))}
        </div>
    );
  };