import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './blocks/Header/Header';
import { Contacts } from './pages/Contacts/Contacts';
import { Benefits } from './pages/Benefits/Benefits';
import { Order } from './pages/Order/Order';
import { About } from './pages/About/About';
import './App.css'

export const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/order" element={<Order />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Router>
  )
}
