import React from 'react';
import { Link } from 'react-router-dom';

export default function Exchange({ exchange }) {
  return (
    <Link to={`/exchange/${exchange.id}`} component='ExchangeDetail' >
      <div className='exchange'>
        <img className='exchange-logo' src={exchange.image} alt={exchange.name} />
        <div className='exchange-name'>{exchange.name}</div>
        <div className='exchange-country'>{exchange.country ? exchange.country : 'N/A'}</div>
        <div className='exchange-url'>{exchange.url}</div>
        <div className='exchange-rank'>{exchange.trust_score_rank}</div>
      </div>
    </Link>
  )
}