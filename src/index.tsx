import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home/index.tsx';
import Recursos from './pages/Recursos/index.tsx';
import Sobre from './pages/Sobre/index.tsx';
import Contato from './pages/Contato/index.tsx';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/recursos' element={<Recursos />}></Route>
        <Route path='/sobre' element={<Sobre />}></Route>
        <Route path='/contato' element={<Contato />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
