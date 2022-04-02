import React from 'react'

export default function Exchange({ exchange }) {
  return (
    <div>
      <img src={exchange.logo} alt={exchange.name} />
      <div>{exchange.name}</div>
      <div>{exchange.country}</div>
      <div>{exchange.url}</div>
      <div>{exchange.trust_score_rank}</div>
    </div>
  )
}