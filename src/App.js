import './App.css';
import {  motion, useAnimation } from "framer-motion";


function App() {

  //parallax on hover

  const parallax = useAnimation();
  // const parallax1 = useAnimation();
  // const parallax2 = useAnimation();
  // const parallax3 = useAnimation();
  // const parallax4 = useAnimation();
  // const parallax5 = useAnimation();
  // const parallax6 = useAnimation();
  // const parallax7 = useAnimation();
  // const parallax8 = useAnimation();
  // const parallax9 = useAnimation();
  // const parallax10 = useAnimation();
  // const parallax11 = useAnimation();
  // const parallax12 = useAnimation();

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
      <section className='animated-grid'>


        <motion.div
        className='card'
        whileHover={{ scale:0.95 }}
        whileTap={{ scale:0.8 }}
        >
          <h1>1</h1>
        </motion.div>


        <motion.div
        className='card'
        whileHover={{ scale:0.95 }}
        whileTap={{ scale:0.8 }}
        >
          <h1>2</h1>
        </motion.div>


        <motion.div
        className='card'
        whileHover={{ scale:0.95 }}
        whileTap={{ scale:0.8 }}
        >
          <h1>3</h1>
        </motion.div>


        <motion.div
        className='card'
        whileHover={{ scale:0.95 }}
        whileTap={{ scale:0.8 }}
        >
          <h1>4</h1>
        </motion.div>


        <motion.div
        className='card'
        whileHover={{ scale:0.95 }}
        whileTap={{ scale:0.8 }}
        >
          <h1>5</h1>
        </motion.div>


        <motion.div
        className='card'
        whileHover={{ scale:0.95 }}
        whileTap={{ scale:0.8 }}
        >
          <h1>6</h1>
        </motion.div>


        <motion.div
        className='card'
        whileHover={{ scale:0.95 }}
        whileTap={{ scale:0.8 }}
        >
          <h1>7</h1>
        </motion.div>


        <motion.div
        className='card'
        whileHover={{ scale:0.95 }}
        whileTap={{ scale:0.8 }}
        >
          <h1>8</h1>
        </motion.div>


        <motion.div
        className='card'
        whileHover={{ scale:0.95 }}
        whileTap={{ scale:0.8 }}
        >
          <h1>9</h1>
        </motion.div>


        <motion.div
        className='card'
        whileHover={{ scale:0.95 }}
        whileTap={{ scale:0.8 }}
        >
          <h1>10</h1>
        </motion.div>


        <motion.div
        className='card'
        whileHover={{ scale:0.95 }}
        whileTap={{ scale:0.8 }}
        >
          <h1>11</h1>
        </motion.div>


        <motion.div
        className='card'
        whileHover={{ scale:0.95 }}
        whileTap={{ scale:0.8 }}
        >
          <h1>12</h1>
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
  );
};

export default App;
