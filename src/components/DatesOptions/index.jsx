import React from 'react';

export const DatesOptions = ({ dates }) => {
  return (
    <>
      <option value="">Vyberte</option>
      {dates.map(date => (
        <option key={date.dateBasic} value={date.dateBasic}>{date.dateCs}</option>
      ))}
    </>
  );
};
