import React, { useEffect, useState } from 'react';
import { CityOptions } from '../CityOptions/index.jsx';
import { DatesOptions } from '../DatesOptions/index.jsx';
import './style.css';

export const JourneyPicker = ({ onJourneyChange }) => {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [date, setDate] = useState('');
  const [cities, setCities] = useState([]);
  const [dates, setDates] = useState([]);


  useEffect(() => {
    const fetchCities = async () => {
      const response = await fetch(`https://apps.kodim.cz/daweb/leviexpress/api/cities`)
          const data = await response.json();
          console.log(data.results)
          setCities(data.results)
    }
    fetchCities()
  }, []);

  useEffect(() => {
    const fetchDates = async () => {
      const response = await fetch(`https://apps.kodim.cz/daweb/leviexpress/api/dates`)
          const data = await response.json();
          console.log(data.results)
          setDates(data.results)
    }
    fetchDates()
  }, []);

/* - zkouška
  useEffect(() => {
    fetch('https://apps.kodim.cz/daweb/leviexpress/api/cities')
      .then(response => response.json())
      .then(data => setCities(data.results))
  }, []);

  useEffect(() => {
    fetch('https://apps.kodim.cz/daweb/leviexpress/api/dates')
      .then(response => response.json())
      .then(data => setDates(data.results))
  }, []);
*/


  const handleSubmit = (event) => {
    event.preventDefault();
    
    fetch(`https://apps.kodim.cz/daweb/leviexpress/api/journey?fromCity=${fromCity}&toCity=${toCity}&date=${date}`)
      .then(response => response.json())
      .then(data => {
        console.log('API response:', data);
        onJourneyChange(data.results);
    })
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
              disabled={!fromCity || !toCity || !date}
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
