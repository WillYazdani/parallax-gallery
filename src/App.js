import './App.css';
import { Link } from 'react-router-dom';
import {  motion, useAnimation } from "framer-motion";
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



export default function App() {

  //parallax on hover

  const parallax = useAnimation();

  const handleMouseMove = e => {
    const {clientX, clientY} = e;
    const moveX = clientX - window.innerWidth / 2;
    const moveY = clientY - window.innerHeight / 2;
    const offsetFactor = 15
    parallax.start({
      x: moveX / offsetFactor,
      y: moveY / offsetFactor
    })
  };

  //return to original position on mouseleave

  const handleMouseLeave = () => {
    parallax.start({
      x: 0,
      y: 0
    })
  };

  return (
    <>


      <section className='animated-grid'>


        <motion.div
        className='card'
        whileHover={{ scale:0.95 }}
        whileTap={{ scale:0.8 }}
        onClick={() => { One() }}
        >
        </motion.div>


        <motion.div
        className='card'
        whileHover={{ scale:0.95 }}
        whileTap={{ scale:0.8 }}
        onClick={() => { Two() }}
        >
        </motion.div>


        <motion.div
        className='card'
        whileHover={{ scale:0.95 }}
        whileTap={{ scale:0.8 }}
        onClick={() => { Three() }}
        >
        </motion.div>


        <motion.div
        className='card'
        whileHover={{ scale:0.95 }}
        whileTap={{ scale:0.8 }}
        onClick={() => { Four() }}
        >
        </motion.div>


        <motion.div
        className='card'
        whileHover={{ scale:0.95 }}
        whileTap={{ scale:0.8 }}
        onClick={() => { Five() }}
        >
        </motion.div>


        <motion.div
        className='card'
        whileHover={{ scale:0.95 }}
        whileTap={{ scale:0.8 }}
        onClick={() => { Six() }}
        >
        </motion.div>


        <motion.div
        className='card'
        whileHover={{ scale:0.95 }}
        whileTap={{ scale:0.8 }}
        onClick={() => { Seven() }}
        >
        </motion.div>


        <motion.div
        className='card'
        whileHover={{ scale:0.95 }}
        whileTap={{ scale:0.8 }}
        onClick={() => { Eight() }}
        >
        </motion.div>


        <motion.div
        className='card'
        whileHover={{ scale:0.95 }}
        whileTap={{ scale:0.8 }}
        onClick={() => { Nine() }}
        >
        </motion.div>


        <motion.div
        className='card'
        whileHover={{ scale:0.95 }}
        whileTap={{ scale:0.8 }}
        onClick={() => { Ten() }}
        >
        </motion.div>


        <motion.div
        className='card'
        whileHover={{ scale:0.95 }}
        whileTap={{ scale:0.8 }}
        onClick={() => { Eleven() }}
        >
        </motion.div>


        <motion.div
        className='card'
        whileHover={{ scale:0.95 }}
        whileTap={{ scale:0.8 }}
        onClick={() => { Twelve() }}
        >
        </motion.div>


        <motion.div
        className='card'
        whileHover={{ scale:0.95 }}
        whileTap={{ scale:0.8 }}
        animate={parallax}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        >
          <h1>PARALLAX GALLERY</h1>
        </motion.div>


      </section>


    </>

  );
}
