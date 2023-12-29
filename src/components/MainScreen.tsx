import { AnimatePresence, motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import projectIcon from '../assets/project.png';
import zoomInLogo from '../assets/zoomIn.png';
import zoomOutLogo from '../assets/zoomOut.png';
import resumeLogo from '../assets/resume.png';
import githubLogo from '../assets/github.png';
import linkedinLogo from '../assets/linkedIn.png';
import StartMenuComponent from './StartMenuComponent';

const mainAnimation = {
  whileHover: { borderRadius: '10px', backgroundColor: '#ffffff50' },
  transition: { duration: 0.5 },
  whileTap: { borderRadius: '10px', backgroundColor: '#ffffff50' },
};

const DraggableDiv: React.FC<{ constraintsRef: React.MutableRefObject<null>; iconImage: string, iconName: string, onClickFun?: React.MouseEventHandler<HTMLDivElement> }> = ({ constraintsRef, iconImage, iconName, onClickFun }) => {
  return (

    <motion.div
      className='w-fit h-fit text-white p-1 my-2 rounded-lg flex flex-col justify-center items-center'
      dragConstraints={constraintsRef}
      whileHover={mainAnimation.whileHover}
      transition={mainAnimation.transition}
      whileDrag={mainAnimation.whileTap}
      whileTap={mainAnimation.whileTap}
      dragMomentum={false}
      drag={true}
      onClick={onClickFun}
    >
      <motion.img
        src={iconImage} className='w-16 h-16 p-2' alt="" />
      <p>{iconName}</p>
    </motion.div>
  );
};
const MainScreen: React.FC<{ openStart: boolean }> = ({ openStart }) => {
  const [zoomIn, setZoomIn] = useState<boolean>(false);
  const constraintsRef: React.MutableRefObject<null> = useRef(null);
  console.log(openStart);
  return (
    <AnimatePresence>
      <motion.div className='w-full h-[93%] m-2 relative' ref={constraintsRef}>
      <DraggableDiv iconName='Projects' iconImage={projectIcon} constraintsRef={constraintsRef}></DraggableDiv>
      <DraggableDiv iconName='GitHub' iconImage={githubLogo} constraintsRef={constraintsRef}></DraggableDiv>
      <DraggableDiv iconName='LinkedIn' iconImage={linkedinLogo} constraintsRef={constraintsRef}></DraggableDiv>
      <DraggableDiv iconName='Resume' iconImage={resumeLogo} constraintsRef={constraintsRef}></DraggableDiv>
      {<StartMenuComponent openStart={openStart}  />}
      {!zoomIn ?
        <DraggableDiv onClickFun={() => document.documentElement.requestFullscreen().then(() => setZoomIn(true))} iconName='Zoom In' iconImage={zoomInLogo} constraintsRef={constraintsRef} /> :
        <DraggableDiv onClickFun={() => document.exitFullscreen().then(() => setZoomIn(false))} iconName='Zoom Out' iconImage={zoomOutLogo} constraintsRef={constraintsRef} />}
    </motion.div>
    </AnimatePresence>
  )
}
export default MainScreen