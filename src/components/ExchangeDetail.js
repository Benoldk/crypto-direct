import React from 'react'
import { Link, useParams } from 'react-router-dom'
import useFetch from '../hooks/fetchDataHook'
import Exchange from './Exchange'

export default function ExchangeDetail() {
  const { id } = useParams();
  const { data: exchange, loading, error } = useFetch
  return (
    <div>
      {loading && <div>LOADING...</div>}
      {error && <div>{error}</div>}
      {!loading && !error &&
        <div>
          <img src={exchange.image} alt={exchange.name} />
          <div>{exchange.name}</div>
          <div>{exchange.country ? exchange.country : 'N/A'}</div>
          <div>{exchange.year_established}</div>
          <div>{exchange.trust_score_rank}</div>
        </div>}

      <Link to='/'>
        <button>BACK</button>
      </Link>
    </div>
  )
}