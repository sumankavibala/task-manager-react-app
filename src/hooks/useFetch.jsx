import { useEffect, useState } from "react"

const useFetch = (url, options={}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(()=> {
    let isMounted = true; //avoid state updates if unmounted

    const fetchData = async() => {
      setLoading(true);
      try{
        const res = await fetch(url, options);
        if(!res.ok) throw new Error(`Error: ${res.status}`);
        const json = await res.json();
        if(isMounted) setError(json);
      } catch (err) {
        if(isMounted) setError(err.message)
      } finally {
        if(isMounted) setLoading(false);
      }
    };

    fetchData();

    return ()=> {
      isMounted = false;
    }
  }, [url, options]);

  return {data, loading, error};
};

export default useFetch;