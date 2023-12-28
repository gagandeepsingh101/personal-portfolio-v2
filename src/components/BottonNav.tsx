import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaCloud } from 'react-icons/fa';
import aboutIcon from '../assets/about.png';
import contactIcon from '../assets/contact.png';
import projectIcon from '../assets/project.png';
import windowLogo from '../assets/windowLogo.png';
import { useGetLatestTime } from '../hooks/useGetLatestTime';

// Animation properties for motion elements
const mainAnimation = {
    whileHover: { padding: '4px', borderRadius: '10px', backgroundColor: '#ffffff30' },
    transition: { duration: 0.3 },
    whileTap: { padding: '5px', borderRadius: '10px', backgroundColor: '#ffffff50' },
};

// Component for hoverable images
const HoverableImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
    <motion.img src={src} className='w-10 h-10' alt={alt} whileHover={mainAnimation.whileHover} transition={mainAnimation.transition} />
);

const BottomNav: React.FC = () => {
    const [latestTime, setLatestTime] = useState<null | { currentTime: string; date: string }>();
    const currentTime = useGetLatestTime;

    useEffect(() => {
        const intervalId = setInterval(() => {
            setLatestTime(currentTime());
        }, 1000);

        return () => clearInterval(intervalId);
    }, [currentTime]);

    return (
        <nav className='bg-[#00000030] flex justify-between w-full h-[7%] absolute bottom-0 backdrop-blur-md'>
            {/* Weather information */}
            <motion.div whileHover={mainAnimation.whileHover} transition={mainAnimation.transition} className='w-1/12 gap-4 h-full flex justify-center items-center'>
                <FaCloud color='#ffffff' size={30} />
                <p className='text-white text-sm flex flex-col justify-center h-full'>
                    <span>31<sup>o</sup> C</span>
                    <span>Overcast</span>
                </p>
            </motion.div>

            {/* Navigation icons */}
            <div className='w-10/12 h-full flex gap-6 pt-2 justify-center'>
                <HoverableImage src={windowLogo} alt='Window Logo' />
                <HoverableImage src={contactIcon} alt='Contact Icon' />
                <HoverableImage src={aboutIcon} alt='About Icon' />
                <HoverableImage src={projectIcon} alt='Project Icon' />
            </div>

            {/* Language and time information */}
            <motion.div whileHover={mainAnimation.whileHover} transition={mainAnimation.transition} className='w-1/12 text-[12px] h-full gap-5 flex text-white  items-center'>
                <p className='w-10 h-full flex justify-center items-center'>ENG</p>
                <p className='w-1/2 h-full flex flex-col justify-center items-end pr-2'>
                    <span>{latestTime?.currentTime}</span>
                    <span>{latestTime?.date}</span>
                </p>
            </motion.div>
        </nav>
    );
};

export default BottomNav;
