import React from 'react';
import { Link } from 'react-router-dom'

export function Sol({ sol, id }) {
  
  if (!sol['AT']) return null;
  const avgTemp = sol['AT']['av']
  const avgWind = sol['HWS']['av']
  const firstUTC = sol['First_UTC']
  const season = sol['Season']
  
  return (
      <Link to={`/details/${id}`}>
        <div className="card grid--card">
          <div className="card__heading">
            <div className="heading__desc dark">sol:</div>
            <h2 className="orange">{id}</h2>
          </div>
          <div className="card__sub-heading yellow">
            {firstUTC}
          </div>
          <div className="card__content grid--card-details">
            <div className="card__content-description">Avg. Temperature:</div>
            <div className="card__content-detail highlight yellow">{avgTemp}</div>
            <div className="card__content-description">Average Wind:</div>
            <div className="card__content-detail highlight yellow">{avgWind}</div>
          </div>
          <div className="card__footer">
            <h4 className="orange">{season}</h4>
          </div>
        </div>
      </Link>
  )
}