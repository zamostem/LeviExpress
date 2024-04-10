import React from 'react';
import "./style.css";
import { SeatRow } from '../SeatRow/index.jsx';

export const SeatPicker = ({ seats, journeyId }) => {
    console.log('Data pro sedadla:', seats);
    /*const testRow = [
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
      ];*/

    return (
        <div className="seat-picker container">
        <h2>Vyberte sedadlo</h2>
        <div className="seats">
            {/*<SeatRow row={testRow} />*/}
            {/*<Seat number={1} />
            <Seat number={17} />
            <Seat number={33} />*/}
            {seats.map((row, index) => (
                <SeatRow key={index} row={row} />
            ))}
        </div>
      </div>  
    );
  };