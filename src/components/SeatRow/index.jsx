import React from 'react';
import { Seat } from '../Seat/index.jsx';

export const SeatRow = ({ row, rowSelectedSeat, onSeatSelected }) => {
    return (
        <div className="seat-row">
            {row.map((seat) => (
                <Seat key={seat.number} number={seat.number} isOccupied={seat.isOccupied}  isSelected={rowSelectedSeat === seat.number} 
                onSelect={onSeatSelected}
                />
            ))}
        </div>
    );
  };