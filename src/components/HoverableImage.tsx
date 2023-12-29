import { motion } from 'framer-motion';
import React from 'react'
import { Tooltip } from 'react-tooltip';

// Animation properties for motion elements
const mainAnimation = {
    whileHover: { padding: '4px', borderRadius: '10px', backgroundColor: '#ffffff30' },
    transition: { duration: 0.3 },
    whileTap: { padding: '5px', borderRadius: '10px', backgroundColor: '#ffffff50' },
};

// Component for hoverable images
const HoverableImage: React.FC<{ src: string; alt: string, toolTipText: string, onClickFn?: React.MouseEventHandler<HTMLImageElement>, typeIcon: string }> = ({ src, alt, toolTipText, onClickFn, typeIcon }) => (
    <>
        {<Tooltip id={toolTipText} style={{ backgroundColor: '#00000080', backdropFilter: 'blur(10px)' }} />}
        <motion.img onClick={onClickFn} data-tooltip-id={toolTipText} data-tooltip-content={toolTipText}
            src={src} className={typeIcon === 'bottomNav' ? 'w-10 h-10' : 'w-[55px] h-[55px]'} alt={alt} whileHover={mainAnimation.whileHover} transition={mainAnimation.transition} />
    </>
);


export default HoverableImage;
