import { React, useState, useEffect } from 'react';
import { Sol } from './Sol'
const key = process.env.REACT_APP_API_KEY;
const URL = `https://api.nasa.gov/insight_weather/?api_key=${key}&feedtype=json&ver=1.0`;

export function SolsList() {
  const [sols, setSols] = useState({});

  const getSols = async () => {
    const res = await fetch(URL);
    const sols = await res.json();
    setSols(sols);
    console.log(sols);

  }

  useEffect(() => {
    getSols();
  }, [])
  
  if (!sols['sol_keys']) return null;
  
  return (
    <div className="grid--content">
      <div className="content__header">
        <h1>Latest Weather at Elysium Planitia</h1>
        <h2>InSight is taking daily weather measurements (temperature, wind, pressure) on the surface of Mars at Elysium Planitia, a flat, smooth plain near Mars’ equator.</h2>
        <div className="warning">Note: the data often changes and might be complete</div>
      </div>
      <div className="content__body grid--cards">
      {
        sols['sol_keys'].map((key) => {
          return <Sol key={key} id={key} sol={sols[key]}/>
        })
      }
    </div>
    </div>
    
  )
}