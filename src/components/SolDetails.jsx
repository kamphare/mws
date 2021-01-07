import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { DetailsTable } from './DetailsTable'
const key = process.env.REACT_APP_API_KEY;
const URL = `https://api.nasa.gov/insight_weather/?api_key=${key}&feedtype=json&ver=1.0`;

export function SolDetails() {
  const [sol, setSol] = useState({});
  let { id } = useParams();
  
  const getSol = async () => {
    try {
      const res = await fetch(URL);
      const sol = await res.json();
      setSol(sol[id]);
    }
    catch(e) {
      console.error(e)
    }
  }

  useEffect(() => {
    getSol();
  }, [])
  
  if (!sol['Season']) return null;
  const minTemp = sol['AT']['mn']
  const maxTemp = sol['AT']['mx']
  const avgTemp = sol['AT']['av']
  const tempSamples = sol['AT']['ct']
  const minWind = sol['HWS']['mn']
  const maxWind = sol['HWS']['mx']
  const avgWind = sol['HWS']['av']
  const windSamples = sol['AT']['ct']
  const firstUTC = sol['First_UTC']
  const LastUTC = sol['Last_UTC']

  return (
    <div>
      <h1>Sol: {id}</h1>
      <h2>Data collected between: {firstUTC} and {LastUTC}</h2>
      <DetailsTable sol={sol} min={minTemp} max={maxTemp} avg={avgTemp} unit={'C'} label={'Temperature'} samples={tempSamples}/>
      <DetailsTable min={minWind} max={maxWind} avg={avgWind} unit={'m/s'} label={'Wind'} samples={windSamples}/>

    </div>
  )
}