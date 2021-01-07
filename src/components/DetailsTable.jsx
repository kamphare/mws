import { React } from 'react';

export function DetailsTable({ min, max, avg, unit, label, samples}) {
  
  if (!min) return null;

  function round(num, unit) {
    if (num === "N/A") {
      return num;
    } 
    return toString(num) + unit
  }

  return (
      <div className="details">
        <h2>{label}</h2>
        <p>Average: {round(min)}</p>
        <p>Max: {round(max)}</p>
        <p>Min: {round(avg)}</p>
        <p>Data combined from {samples} collected samples.</p>
      </div>
  )
}