import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import One from './components/1.js'
import Two from './components/2.js'
import Three from './components/3.js'
import Four from './components/4.js'
import Five from './components/5.js'
import Six from './components/6.js'
import Seven from './components/7.js'
import Eight from './components/8.js'
import Nine from './components/9.js'
import Ten from './components/10.js'
import Eleven from './components/11.js'
import Twelve from './components/12.js'

const root = ReactDOM.createRoot
(document.getElementById('root')
);

root.render(

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/1" element={<One />} />
      <Route path="/2" element={<Two />} />
      <Route path="/3" element={<Three />} />
      <Route path="/4" element={<Four />} />
      <Route path="/5" element={<Five />} />
      <Route path="/6" element={<Six />} />
      <Route path="/7" element={<Seven />} />
      <Route path="/8" element={<Eight />} />
      <Route path="/9" element={<Nine />} />
      <Route path="/10" element={<Ten />} />
      <Route path="/11" element={<Eleven />} />
      <Route path="/12" element={<Twelve />} />
    </Routes>
  </BrowserRouter>
  
);

reportWebVitals();
