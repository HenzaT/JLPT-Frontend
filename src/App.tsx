import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useScreenSize } from './responsive-breakpoints/responsive';

import Home from './pages/home/Home';
import Nav from './components/nav/Nav';
import JlptN5 from './pages/jlptN5/JlptN5';

import '/src/styles/App.scss';

export default function App() {
  const { isMobileScreen, isBiggerThanMobile } = useScreenSize();

  return (
    <BrowserRouter>
      {/* {isBiggerThanMobile && <Nav />} */}
      <div className="main-pages">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/N5" element={<JlptN5 />}/>
        </Routes>
      </div>
      {/* {isMobileScreen && <Nav />} */}
    </BrowserRouter>
  )
}
