import { motion } from 'framer-motion';
import React, { SetStateAction, useContext, useEffect, useState } from 'react';
import { FaCloud } from 'react-icons/fa';
import mailLogo from '../assets/mail.png';
import projectIcon from '../assets/project.png';
import windowLogo from '../assets/windowLogo.png';
import { useGetLatestTime } from '../hooks/useGetLatestTime';
import HoverableImage from './HoverableImage';
import { AppContext } from '../App';

// Animation properties for motion elements
const mainAnimation = {
    whileHover: { padding: '4px', borderRadius: '10px', backgroundColor: '#ffffff30' },
    transition: { duration: 0.3 },
    whileTap: { padding: '5px', borderRadius: '10px', backgroundColor: '#ffffff50' },
};

const BottomNav: React.FC<{ setOpenStart: React.Dispatch<SetStateAction<boolean>>, openStart: boolean }> = ({ setOpenStart, openStart }) => {
    const [latestTime, setLatestTime] = useState<null | { currentTime: string; date: string }>();
    const currentTime = useGetLatestTime;
    const {setShowProjectSection,showProjectSection}=useContext(AppContext)
    useEffect(() => {
        const intervalId = setInterval(() => {
            setLatestTime(currentTime());
        }, 1000);

        return () => {
            clearInterval(intervalId);

        };
    }, [currentTime]);

    return (
        <nav className='bg-[#00000030] z-50 flex justify-between w-full h-[7%] absolute bottom-0 backdrop-blur-md'>
            {/* Weather information */}
            <motion.div whileHover={mainAnimation.whileHover} transition={mainAnimation.transition} className='hidden md:w-2/12 lg:w-1/12 gap-4 h-full md:flex justify-center items-center'>
                <FaCloud color='#ffffff' className="w-6 h-6 lg:w-8 lg:h-8" />
                <p className='text-[12px] text-white lg:text-sm flex flex-col justify-center h-full'>
                    <span>31<sup>o</sup> C</span>
                    <span>Overcast</span>
                </p>
            </motion.div>

            {/* Navigation icons */}
            <div className='w-8/12 h-full flex gap-6 pt-2 justify-center'>
                <HoverableImage onClickFn={() => setOpenStart(!openStart)} src={windowLogo} alt='Window Icon' toolTipText='Start' typeIcon='bottomNav' />
                <HoverableImage onClickFn={() => setShowProjectSection(!showProjectSection)} src={projectIcon} alt='Project Icon' toolTipText='Projects' typeIcon='bottomNav' />
                <HoverableImage onClickFn={() => window.open('mailto:gagandeepsingh128548@gmai.com', '_blank')} src={mailLogo} alt='Mail Icon' toolTipText='Mail' typeIcon='bottomNav' />
            </div>

            {/* Language and time information */}
            <motion.div whileHover={mainAnimation.whileHover} transition={mainAnimation.transition} className='w-4/12 md:w-2/12 text-[10px] lg:w-1/12 lg:text-[12px] h-full lg:gap-5 flex text-white  lg:items-center'>
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
