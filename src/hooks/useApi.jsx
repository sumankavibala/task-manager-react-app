import { useState } from "react";


export const useApi = (baseUrl) => {
  const[loading, setLoading] = useState(false);
  const[error, setError] = useState(null);

  const request = async(endpoint, method='GET', body=null) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`${baseUrl}${endpoint}`,{
        method, 
        headers: {'Content-Type': 'application/json'},
        body: body ? JSON.stringify(body) : null,
      })
      if(!res.ok) throw new Error(`Error: ${res.status}`);
      return await res.json();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return {request, loading, error}
};