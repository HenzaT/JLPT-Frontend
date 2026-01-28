import { useState, useEffect, useContext, createContext } from 'react';
import axios from 'axios';

const KanjiRandomContext = createContext<KanjiContextType | null>(null);

export function KanjiRandomProvider({ children }: { children: React.ReactNode }) {
  const [ kanji, setKanji ]   = useState([]);
  // const [loading, setLoading] = useState<boolean>(true);
  const [ error, setError ]   = useState<null>(null);

  const apiUrl = import.meta.env.VITE_API_URL as string | undefined;

  // const fetchRandomKanji = () => {
  useEffect(() => {
    axios
        .get(`${apiUrl}/random?jlpt=5`)
        .then((response) => {
          setKanji(response.data)
          // setLoading(false)
        })
        .catch((err) => {
          setError(err.message)
          // setLoading(false)
        })
  }, [])
  // }

  const fetchRandomKanji = () => {
    useEffect(() => {
      axios
          .get(`${apiUrl}/random?jlpt=5`)
          .then((response) => {
            setKanji(response.data)
            // setLoading(false)
          })
          .catch((err) => {
            setError(err.message)
            // setLoading(false)
          })
    }, [])
  }

  return (
    <KanjiRandomContext.Provider
      value={{
        kanji,
        // loading,
        fetchRandomKanji,
        error
      }}
    >
      {children}
    </KanjiRandomContext.Provider>
  )
}

export function useKanjiRandom() {
    const context = useContext(KanjiRandomContext);
    if (!context) {
      throw new Error('useKanjiRandom must be within KanjiRandomProvider');
    }

    return context;
}
