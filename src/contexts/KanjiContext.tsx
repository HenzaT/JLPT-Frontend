// get count of all kanji

import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const KanjiContext = createContext(null);

export function KanjiProvider({ children }: { children: React.ReactNode }) {
  const [counts, setCounts]     = useState<Record<number, number>>({});
  const [loading, setLoading] = useState<boolean>(true);

  const apiUrl = import.meta.env.VITE_API_URL as string | undefined;

  useEffect(() => {
    axios.get(`${apiUrl}/counts`)
      .then(response => setCounts(response.data))
      .finally(() => setLoading(false))
  }, [])

  return (
    <KanjiContext.Provider
      value={{
        counts,
        getCounts: (jlpt: number) => counts[jlpt],
        loading
      }}
    >
      {children}
    </KanjiContext.Provider>
  )
}

export function useKanji() {
  const context = useContext(KanjiContext);
  return context;
}
