import useFetch from '../hooks/fetchDataHook'
import Exchange from './Exchange'
import { v4 as uuid } from 'uuid'

export default function ExchangeList() {
    const API_ENDPOINT = 'https://www.coingecko.com/en/api';
    const { data: exchanges, loading, error } = useFetch(API_ENDPOINT);

    return (
        <div>
            {loading && <div>LOADING...</div>}
            {error && <div>{error}</div>}
            {!loading && !error && exchanges.length ?
                exchanges.map(exchange =>
                    <Exchange key={uuid()} exchange={exchange} />
                )
                : null
            }
        </div>
    )
}