import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '/src/styles/index.scss'
import App from './App.tsx'
import { KanjiProvider } from './contexts/KanjiContext.tsx';
import { KanjiCountProvider } from './contexts/KanjiCountContext.tsx';
import { KanjiRandomProvider } from './contexts/KanjiRandomContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <KanjiProvider>
      <KanjiCountProvider>
        <KanjiRandomProvider>
          <App />
        </KanjiRandomProvider>
      </KanjiCountProvider>
    </KanjiProvider>
  </StrictMode>,
)
