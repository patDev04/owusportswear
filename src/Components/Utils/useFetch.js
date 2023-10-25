import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setloading(true);

    axios
      .get(url)
      .then((res) => {
        setData(res.data);
        setloading(false);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setloading(false);
      });
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
