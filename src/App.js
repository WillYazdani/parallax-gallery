import './App.css';
import { Link } from 'react-router-dom';
import {  motion, useAnimation } from "framer-motion";

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
        >
          <Link to='/1' className='card-link' />
        </motion.div>


        <motion.div
        className='card'
        whileHover={{ scale:0.95 }}
        whileTap={{ scale:0.8 }}
        >
          <Link to='/2' className='card-link' />
        </motion.div>


        <motion.div
        className='card'
        whileHover={{ scale:0.95 }}
        whileTap={{ scale:0.8 }}
        >
          <Link to='/3' className='card-link' />
        </motion.div>


        <motion.div
        className='card'
        whileHover={{ scale:0.95 }}
        whileTap={{ scale:0.8 }}
        >
          <Link to='/4' className='card-link' />
        </motion.div>


        <motion.div
        className='card'
        whileHover={{ scale:0.95 }}
        whileTap={{ scale:0.8 }}
        >
          <Link to='/5' className='card-link' />
        </motion.div>


        <motion.div
        className='card'
        whileHover={{ scale:0.95 }}
        whileTap={{ scale:0.8 }}
        >
          <Link to='/6' className='card-link' />
        </motion.div>


        <motion.div
        className='card'
        whileHover={{ scale:0.95 }}
        whileTap={{ scale:0.8 }}
        >
          <Link to='/7' className='card-link' />
        </motion.div>


        <motion.div
        className='card'
        whileHover={{ scale:0.95 }}
        whileTap={{ scale:0.8 }}
        >
          <Link to='/8' className='card-link' />
        </motion.div>


        <motion.div
        className='card'
        whileHover={{ scale:0.95 }}
        whileTap={{ scale:0.8 }}
        >
          <Link to='/9' className='card-link' />
        </motion.div>


        <motion.div
        className='card'
        whileHover={{ scale:0.95 }}
        whileTap={{ scale:0.8 }}
        >
          <Link to='/10' className='card-link' />
        </motion.div>


        <motion.div
        className='card'
        whileHover={{ scale:0.95 }}
        whileTap={{ scale:0.8 }}
        >
          <Link to='/11' className='card-link' />
        </motion.div>


        <motion.div
        className='card'
        whileHover={{ scale:0.95 }}
        whileTap={{ scale:0.8 }}
        >
          <Link to='/12' className='card-link' />
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
