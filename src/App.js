import { Route, Routes } from 'react-router-dom';
import './App.scss';
import './assets/fonts/helvetica-neu.ttf';
import Home from './components/Home/home';
import About from './components/About/about';
import Layout from './components/Layout';
import Contact from './components/Contact/contact';
import Portfolio from './components/Portfolio/portfolio';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
    </>
  )
}

export default App;
