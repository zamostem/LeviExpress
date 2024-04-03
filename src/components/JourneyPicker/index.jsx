import React, { useEffect, useState } from 'react';
import CityOptions from '../CityOptions/index.jsx';
import DatesOptions from '../DatesOptions/index.jsx';
import './style.css';

export const JourneyPicker = ({ onJourneyChange }) => {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [date, setDate] = useState('');
  const [cities, setCities] = useState([]);
  const [dates, setDates] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch(`https://apps.kodim.cz/daweb/leviexpress/api/cities`)
          const data = await response.json();
          console.log(data.results)
          setCities(data.results)
    }
    loadData()
  }, []);

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch(`https://apps.kodim.cz/daweb/leviexpress/api/dates`)
          const data = await response.json();
          console.log(data.results)
          setDates(data.results)
    }
    loadData()
  }, []);

  /* verze II
  useEffect(() => {
    fetch('https://apps.kodim.cz/daweb/leviexpress/api/cities')
      .then(response => response.json())
      .then(data => setCities(data.results))
  }, []);
  */

  /* 2. Výběr města - 8.
  useEffect(() => {
    setCities([
      { name: 'Praha', code: 'CZ-PRG' },
      { name: 'Brno', code: 'CZ-BRQ' },
    ]);
  }, []);
  */

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Odkud:', fromCity);
    console.log('Kam:', toCity);
    console.log('Datum:', date);
  };
  
  return (
    <div className="journey-picker container">
      <h2 className="journey-picker__head">Kam chcete jet?</h2>
      <div className="journey-picker__body">
        <form className="journey-picker__form" onSubmit={handleSubmit}>
          <label>
            <div className="journey-picker__label">Odkud:</div>
            <select value={fromCity} onChange={(e) => setFromCity(e.target.value)}>
              <CityOptions cities={cities} />
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Kam:</div>
            <select value={toCity} onChange={(e) => setToCity(e.target.value)}>
              <CityOptions cities={cities} />
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Datum:</div>
            <select value={date} onChange={(e) => setDate(e.target.value)}>
              <DatesOptions dates={dates} />
            </select>
          </label>
          <div className="journey-picker__controls">
            <button 
              className="btn" 
              type="submit"
            > 
              Vyhledat spoj
            </button>
          </div>
        </form>
        <img className="journey-picker__map" src="/map.svg" />
      </div>
    </div>
  )
};
