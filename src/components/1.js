import './tilt.css';
import { Link } from 'react-router-dom';
import {  motion, useAnimation } from "framer-motion";

export default function One () {
    console.log('One');
    return(
        <div>
            <Link to='/'>
                <motion.button
                className='home-btn'>
                    HOME
                </motion.button>
            </Link>
        </div>
    )
}