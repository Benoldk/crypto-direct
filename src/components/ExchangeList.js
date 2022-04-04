import useFetch from '../hooks/fetchDataHook'
import Exchange from './Exchange'
import { v4 as uuid } from 'uuid'
import { URL, ENDPOINTS } from '../Common/Common';

export default function ExchangeList() {
    // use custom hook to fetch data on page load
    const { data: exchanges, loading, error } = useFetch(`${URL}${ENDPOINTS.EXCHANGES}`);
    return (
        <div>
            {/** Conditionally load elements **/}
            {loading && <div>LOADING...</div>}
            {error && <div>{error}</div>}
            {!loading && !error && exchanges.length ?
                exchanges
                    .slice(0, 10)
                    .map(exchange =>
                        <Exchange key={uuid()} exchange={exchange} />
                    )
                : null
            }
        </div>
    )
}