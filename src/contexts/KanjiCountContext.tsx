// get count of all kanji
import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const KanjiCountContext = createContext(null);

export function KanjiCountProvider({ children }: { children: React.ReactNode }) {
  const [counts, setCounts]     = useState<Record<number, number>>({});
  const [loading, setLoading] = useState<boolean>(true);

  const apiUrl = import.meta.env.VITE_API_URL as string | undefined;

  useEffect(() => {
    axios.get(`${apiUrl}/counts`)
      .then(response => setCounts(response.data))
      .finally(() => setLoading(false))
  }, [])

  return (
    <KanjiCountContext.Provider
      value={{
        counts,
        getCounts: (jlpt: number) => counts[jlpt],
        loading
      }}
    >
      {children}
    </KanjiCountContext.Provider>
  )
}

export function useKanjiCount() {
  const context = useContext(KanjiCountContext);
  return context;
}
