import {useState} from 'react';

//utility: wait for ms
const sleep = (ms : number) => new Promise((resolve)=> setTimeout(resolve, ms));

function useApi(baseUrl: string) {
  const [loading, setLoading] = useState(false);
  const[error, setError] = useState(null);

  const request = async(endpoint : string, method='GET', body=null, retries=3) => {
    setLoading(true);
    setError(null);

    let attempt = 0;
    let delay = 500; //initial backoff delay in ms

    while(attempt < retries) {
      try {
        const res = await fetch(`${baseUrl}${endpoint}`, {
          method,
          headers: {'Content-Type': 'application/json'},
          body: body ? JSON.stringify(body) : null,
          credentials: 'include', //send cookies (auth + refresh tokens)
        });

        //If unauthorized, try refresh tokenflow
        if(res.status === 401) {
          const refreshed = await fetch(`${baseUrl}/auth/refresh`, {
            method: 'POST',
            credentials: "include", //send refresh token cookie
          });

          if(!refreshed.ok) {
            throw new Error('Authenticaton failed. Please login again');
          }

          //Retry original request after refresh
          continue;
        }

        if(!res.ok) throw new Error(`Error: ${res.status}`);
        const data = await res.json();
        setLoading(false);
        return data;
      } catch (error : any) {
        attempt++;
        if(attempt >= retries) {
          setError(error.message);
          setLoading(false);
          throw error;
        }
        //exponential backoff
        await sleep(delay);
        delay *= 2;
      }
    }
  }

  return {request, loading, error};
}

export default useApi;