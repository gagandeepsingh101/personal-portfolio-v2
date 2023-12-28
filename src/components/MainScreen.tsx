import { motion } from 'framer-motion'
import React from 'react'
import projectIcon from '../assets/project.png';

const mainAnimation = {
    whileHover: { padding: '4px', borderRadius: '10px', backgroundColor: '#ffffff30' },
    transition: { duration: 0.3 },
    whileTap: { padding: '5px', borderRadius: '10px', backgroundColor: '#ffffff50' },
};
const HoverableImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
    <motion.img src={src} className='w-10 h-10' alt={alt} whileHover={mainAnimation.whileHover} transition={mainAnimation.transition} />
);
const MainScreen: React.FC = () => {
    const constraintsRef = React.useRef(null)
    return (
        <motion.div className='w-full h-[93%] m-8' ref={constraintsRef}>
            <motion.div
                className='w-fit h-fit text-white bg-black rounded-lg flex flex-col justify-center items-center'
                dragConstraints={constraintsRef}
                drag
            >
                <HoverableImage src={projectIcon} alt='Project Icon'></HoverableImage>
                <p>Projects</p>
            </motion.div>
        </motion.div>
    )
}

export default MainScreen
