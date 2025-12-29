import { useState, useEffect } from 'react';
import axios from 'axios';
import jlpt5 from '../../content/jlpt5.json';
import Card from '../../components/card/Card';

export default function Jlpt_5() {
  const [ kanji, setKanji ]     = useState([]);
  const [ loading, setLoading ] = useState<boolean>(true);
  const [ error, setError ]     = useState<null>(null);

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

  const randomKanji = Math.floor(Math.random() * kanji.length);
  const kanjiObj    = kanji[randomKanji];

  return (
    <section>
      <span className="top-text">
        <h1>{jlpt5.title}</h1>
        <h2>{kanjiObj.id} / {kanji.length}</h2>
      </span>
      {<Card
        level={"5"}
        kanjiObj={kanjiObj}
      />}
    </section>
  )
}
