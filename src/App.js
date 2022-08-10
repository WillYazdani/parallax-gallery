import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useState} from 'react';

function App() {

  //parallax on mouse movement
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  
  const onMouseMove = (e) => {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
      </Routes>
      <section className='animated-grid'>
        <div className='card'>A</div>
        <div className='card'>B</div>
        <div className='card'>C</div>
        <div className='card'>D</div>
        <div className='card'>E</div>
        <div className='card'>F</div>
        <div className='card'>G</div>
        <div className='card'>H</div>
        <div className='card'>I</div>
        <div className='card'>J</div>
        <div className='card'>K</div>
        <div className='card'>L</div>
        <div className='card'>PARALLAX GALLERY</div>
      </section>
    </BrowserRouter>
  );
}

export default App;
