import '/src/styles/App.scss';
import Home from './pages/home/Home';
import Nav from './components/nav/Nav';
import Jlpt_5 from './pages/jlpt_5/Jlpt_5';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

export default function App() {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 425px)" });
  const isBiggerThanMobile = useMediaQuery({ query: "(min-width: 426px)" });

  return (
    <BrowserRouter>
      {isBiggerThanMobile && <Nav />}
      <div className="main-pages">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/jlpt5" element={<Jlpt_5 />}/>
        </Routes>
      </div>
      {isMobileScreen && <Nav />}
    </BrowserRouter>
  )
}
