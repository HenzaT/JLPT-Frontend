import { useState, useEffect } from 'react';
import { useKanji } from '../../contexts/KanjiContext';
import Card from '../../components/card/Card';
import LoadingElement from '../../components/loading-element/LoadingElement';
import { useKanjiRandom } from '../../contexts/KanjiRandomContext';
import axios from 'axios';

export default function Revise() {
  const { loading } = useKanji()
  const { kanji } = useKanjiRandom()
  const [ tenKanji, setTenKanji ] = useState<Object[]>();
  const [ isClicked, setIsClicked ] = useState<boolean>(false);

  const apiUrl = import.meta.env.VITE_API_URL as string | undefined;

  const callTenKanji = () => {
    useEffect(() => {
      axios
          .get(`${apiUrl}/get_ten?jlpt=5`)
          .then((response) => {
            setTenKanji(response.data)
          })
    }, [])
    // need error catching
    setIsClicked(true);
  }

  console.log(tenKanji)

  if (loading) return <LoadingElement />;

  const skipToNextKanji = () => {
    let skipped = [];
    skipped.push(kanji);
    console.log(skipped);

  }

  return (
    <section>
      <header className="revise-header">
        <h1>N5 Revision</h1>
        {isClicked ? (
          <>
            {tenKanji.map((kanji, id: number) => (
              <Card
                key={id}
                kanjiObj={kanji}
                isMainPage={false}
              />
            ))}
            <button onClick={skipToNextKanji} className="site-button skip">skip</button>
          </>
        ) : (
          <>
            <h2>Are you ready?</h2>
            <button onClick={callTenKanji} className="site-button">I'm ready!</button>
          </>
        )}
      </header>
    </section>
  )
}
