import React from 'react';
import "./style.css";
import { SeatRow } from '../SeatRow/index.jsx';

export const SeatPicker = ({ seats, journeyId, selectedSeat, onSeatSelected }) => {
    console.log('Seats:', seats);

    return (
        <div className="seat-picker container">
        <h2>Vyberte sedadlo</h2>
        <div className="seats">
            {seats.map((row, index) => (
                <SeatRow key={index} row={row} rowSelectedSeat={selectedSeat} onSeatSelected={onSeatSelected}/>
            ))}
        </div>
      </div>  
    );
  };