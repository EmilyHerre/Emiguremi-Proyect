import { useEffect, useState } from 'react';

export const useFetch = <T,>(url: string) => {

    const [data, setData] = useState<T[]>();

    const [error, setError] = useState<string>();

    const [loading, setLoading] = useState<boolean>();


    const fetchApi = async () => {
        try {

            setLoading(true);

            const response = await fetch(url)
            const newData = await response.json()
            setData(newData);

            setLoading(false);

        } catch (error) {

            setLoading(false)
            setError('Ha ocurrido un error');
            console.error(error);

        }

    }
    useEffect(() => {
        fetchApi()

    }, [])


    return { data, error, loading };


}
