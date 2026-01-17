import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useScreenSize } from './responsive-breakpoints/responsive';

import Home from './pages/home/Home';
// import Nav from './components/nav/Nav';
import JlptN5 from './pages/jlptN5/JlptN5';
import Revise from './pages/revise/Revise';
import Login from './pages/user/Login';
import Signup from './pages/user/Signup';

import MainNav from './components/main-nav/MainNav';

import '/src/styles/App.scss';

export default function App() {
  // const { isMobileScreen, isBiggerThanMobile } = useScreenSize();

  return (
    <BrowserRouter>
      {/* {isBiggerThanMobile && <Nav />} */}
      <MainNav />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/n5" element={<JlptN5 />}/>
        <Route path="/n5/revise" element={<Revise />}/>
      </Routes>
      {/* {isMobileScreen && <Nav />} */}
    </BrowserRouter>
  )
}
