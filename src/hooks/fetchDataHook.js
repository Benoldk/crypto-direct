import { useEffect, useState } from 'react'

export default function useFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch(url)
        .then(res => {
            if(!res.ok) throw new error('error fetching data.')
            setData(res.data);
            setError(null);
        })
        .catch(err => {
            setError(err)
        })
        .finally(
            setLoading(false)
        )
    }, [url]);

    return {data, loading, error};
}