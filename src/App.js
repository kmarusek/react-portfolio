import { Route, Routes } from 'react-router-dom';
import './App.scss';
import './assets/fonts/helvetica-neu.ttf';
import Home from './components/Home';
import About from './components/About';
import Layout from './components/Layout';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
    </>
  )
}

export default App;
