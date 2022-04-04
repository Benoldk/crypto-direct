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
    <div className='content'>
      {loading && <div>LOADING...</div>}
      {error && <div>{error}</div>}
      {!loading && !error &&
        <div className='info'>
          <img className='exchange-detail-logo' src={exchange.image} alt={exchange.name} />
          <div className='exchange-detail-name'>Name: {exchange.name}</div>
          <div className='exchange-detail-country'>Country: {exchange.country ? exchange.country : 'N/A'}</div>
          <div className='exchange-detail-est'>Year Established: {exchange.year_established}</div>
          <div className='exchange-detail-rank'>Trust Score: {exchange.trust_score_rank}</div>
          <div className='exchange-detail-desc'>{exchange.description &&
            <>
              <div>Description</div>
              <div>{exchange.description}</div>
            </>}
          </div>
          <div className='exchange-detail-socials'>
            {exchange.facebook_url &&
              <div>
                <a href={exchange.facebook_url}><div className='facebook-icon' /></a>
              </div>}

            {exchange.reddit_url &&
              <div>
                <a href={exchange.redit_url}><div className='reddit-icon' /></a>
              </div>}

            {exchange.telegram_url &&
              <div>
                <a href={exchange.telegram_url}><div className='telegram-icon' /></a>
              </div>}

            {exchange.slack_url &&
              <div>
                <a href={exchange.slack_url}><div className='slack-icon' /></a>
              </div>}

            {exchange.other_url_1 &&
              <div>
                <a href={exchange.other_url_1}><div className='other-url-icon' /></a>
              </div>}

            {exchange.other_url_2 &&
              <div>
                <a href={exchange.other_url_2}><div className='other-url-icon' /></a>
              </div>}

            {exchange.twitter_handle &&
              <div>
                <a href={exchange.twitter_handle}><div className='twitter-icon' /></a>
              </div>}
          </div>
        </div>}

      <Link to='/'>
        <button className='backBtn'>BACK</button>
      </Link>
    </div>
  )
}