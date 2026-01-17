// get all kanji
import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

type Kanji = {
  id: number,
  jlpt: number,
  kanji: string,
  heisig_en: string,
  kun_readings: string[],
  on_readings: string[],
  meanings: string[]
}

type KanjiContextType = {
  kanji: Kanji[],
  loading: boolean,
  error: string | null
}

const KanjiContext= createContext<KanjiContextType | null>(null);

export function KanjiProvider({ children }: { children: React.ReactNode }) {
  const [ kanji, setKanji ]   = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [ error, setError ]   = useState<null>(null);

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

  return (
    <KanjiContext.Provider
      value={{
        kanji,
        loading,
        error
      }}
    >
      {children}
    </KanjiContext.Provider>
  )
}

export function useKanji() {
  const context = useContext(KanjiContext);
  if (!context) {
    throw new Error('useKanji must be within KanjiProvider');
  }

  return context;
}
