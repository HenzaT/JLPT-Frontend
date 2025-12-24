import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Jlpt_5() {
  const [ kanji, setKanji ] = useState([]);
  const [ loading, setLoading ] = useState<boolean>(true);
  const [ error, setError ] = useState(null);

  const apiUrl = import.meta.env.VITE_API_URL as string | undefined;

  useEffect(() => {
    axios
        .get(`${apiUrl}?jlpt=5`)
        .then((response) => {
          setKanji(response.data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <h1>JLPT 5</h1>
      {kanji.map((k, i) => (
        <p key={i}>{k.kanji}</p>
      ))}
    </>
  )
}
