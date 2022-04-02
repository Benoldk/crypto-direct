import React from 'react'
import Exchange from './Exchange'

export default function ExchangeList({ exchanges }) {
    return (
        <div>
            {exchanges.length ?
                exchanges.map(exchange =>
                    <Exchange />
                )
                : null
            }
        </div>
    )
}