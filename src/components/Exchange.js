import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

export default function Exchange({ exchange }) {
  return (
    <Link to={`/exchange/${exchange.id}`} component='ExchangeDetail' >
      <div>
        <img src={exchange.image} alt={exchange.name} />
        <div>{exchange.name}</div>
        <div>{exchange.country ? exchange.country : 'N/A'}</div>
        <div>{exchange.url}</div>
        <div>{exchange.trust_score_rank}</div>
      </div>
    </Link>
  )
}