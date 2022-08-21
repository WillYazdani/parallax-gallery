import './tilt.css';
import { Link } from 'react-router-dom';
import {  motion } from "framer-motion";

export default function One () {
    console.log('One');
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
            <img src={require('../assets/images/1.jpg')} alt='1' />
        </>
    )
}