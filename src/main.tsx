import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '/src/styles/index.scss'
import App from './App.tsx'
import { KanjiProvider } from './contexts/KanjiContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <KanjiProvider>
      <App />
    </KanjiProvider>
  </StrictMode>,
)
