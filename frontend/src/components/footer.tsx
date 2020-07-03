import * as React from 'react'
import { motion } from 'framer-motion'

const footerVariant = {
    initial: {
        y: '50vh'
    },
    animate: {
        y: 0,
        transition: {
            delay: 0.3,
            duration: 1
        }
    }
}

export const Footer = () => 
<motion.footer 
    variants={footerVariant} 
    initial='initial' 
    animate='animate' 
    className='mainFooter'
>
</motion.footer>