import './tilt.css';
import { Link } from 'react-router-dom';
import {  motion } from "framer-motion";

export default function Ten () {
    console.log('Ten');
    return(
        <>
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            transition={{ duration: 0.2, delay: 0.15 }}
            style={{ pointerEvents: "auto" }}
            className="overlay"
            >
                <Link to ='/' />
            </motion.div>
            <img src={require('../assets/images/10.jpg')} alt='10' />
        </>
    )
};