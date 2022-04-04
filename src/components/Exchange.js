import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Exchange.css'

export default function Exchange({ exchange }) {
  return (
    <Link className='exchange' to={`/exchange/${exchange.id}`} component='ExchangeDetail' >
      <div>
        <img className='exchange-logo' src={exchange.image} alt={exchange.name} />
        <div className='exchange-info'>
          <div className='exchange-name'>{exchange.name}</div>
          <div className='exchange-country'>{exchange.country ? exchange.country : 'N/A'}</div>
          <div className='exchange-url'>{exchange.url}</div>
          <div className='exchange-rank'>
            <div className='exchage-rank-number'>{exchange.trust_score_rank}</div>
            <div className='exchage-rank-title'>Trust Score Rank</div>
          </div>
        </div>
      </div>
    </Link>
  )
}