import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useFetch from '../hooks/fetchDataHook';
import { URL, ENDPOINTS } from '../Common/Common';

export default function ExchangeDetail() {
  // id from route
  const { id } = useParams();

  // gather data from api
  const { data: exchange, loading, error } = useFetch(`${URL}${ENDPOINTS.EXCHANGES}/${id}`)

  return (
    <div>
      {loading && <div>LOADING...</div>}
      {error && <div>{error}</div>}
      {!loading && !error &&
        <div>
          <img  className='exchange-detail-logo' src={exchange.image} alt={exchange.name} />
          <div className='exchange-detail-name'>{exchange.name}</div>
          <div className='exchange-detail-country'>{exchange.country ? exchange.country : 'N/A'}</div>
          <div className='exchange-detail-est'>{exchange.year_established}</div>
          <div className='exchange-detail-rank'>{exchange.trust_score_rank}</div>
          <div className='exchange-detail-desc'>{exchange.description &&
            <div>{exchange.description}</div>}</div>
          <div className='exchange-detail-socials'>Social Media:
            {exchange.facebook_url &&
              <div>
                <Link to={exchange.facebook_url}>{exchange.facebook_url}</Link>
              </div>}

            {exchange.redit_url &&
              <div>
                <Link to={exchange.redit_url}>{exchange.redit_url}</Link>
              </div>}

            {exchange.telegram_url &&
              <div>
                <Link to={exchange.telegram_url}>{exchange.telegram_url}</Link>
              </div>}

            {exchange.slack_url &&
              <div>
                <Link to={exchange.slack_url}>{exchange.slack_url}</Link>
              </div>}

            {exchange.other_url_1 &&
              <div>
                <Link to={exchange.other_url_1}>{exchange.other_url_1}</Link>
              </div>}

            {exchange.other_url_2 &&
              <div>
                <Link to={exchange.other_url_2}>{exchange.other_url_2}</Link>
              </div>}

            {exchange.twitter_handle &&
              <div>
                <Link to={exchange.twitter_handle}>{exchange.twitter_handle}</Link>
              </div>}
          </div>
        </div>}

      <Link to='/'>
        <button>BACK</button>
      </Link>
    </div>
  )
}