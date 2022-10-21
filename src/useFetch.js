import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true);
    const [errorThrown, setErrorThrown] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
          fetch(url, { signal: abortCont.signal})
          .then(response => {
            if (!response.ok) {
              throw Error('could not fetch data for that resource');
            }
            return response.json();
          })
          .then(data => {
            setData(data);
            setIsLoading(false);
          })
          .catch(err => {
            if (err.name === 'AbortError') {
                return
            } else {
                setIsLoading(false);
                setErrorThrown(err.message);
            }
            
          })
        }, 1000);

        return () => abortCont.abort();

      }, [url]);

    return {data, isLoading, errorThrown};

}

export default useFetch;