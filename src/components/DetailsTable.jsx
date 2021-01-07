import { React } from 'react';

export function DetailsTable({ min, max, avg, unit, label, samples}) {
  
  console.log(min)
  if (!min) return null;
  const minRounded = min.toFixed(1);
  const maxRounded = max.toFixed(1);
  const avgRounded = avg.toFixed(1);


  return (
      <div className="details">
        <h2>{label}</h2>
        <p>Average: {minRounded}{unit}</p>
        <p>Max: {maxRounded}{unit}</p>
        <p>Min: {avgRounded}{unit}</p>
        <p>Data combined from {samples} collected samples.</p>
      </div>
  )
}