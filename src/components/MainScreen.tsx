import React, { useContext, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import toast from 'react-hot-toast';
import projectIcon from '../assets/project.png';
import zoomInLogo from '../assets/zoomIn.png';
import zoomOutLogo from '../assets/zoomOut.png';
import resumeLogo from '../assets/resume.png';
import githubLogo from '../assets/github.png';
import linkedInLogo from '../assets/linkedIn.png';
import StartMenuComponent from './StartMenuComponent';
import { AppContext } from '../App';
import ProjectMainScreen from './ProjectMainScreen';

const mainAnimation = {
  whileHover: { borderRadius: '10px', backgroundColor: '#ffffff50' },
  transition: { duration: 0.5 },
  whileTap: { borderRadius: '10px', backgroundColor: '#ffffff50' },
};

const DraggableDiv: React.FC<{
  constraintsRef: React.MutableRefObject<null>;
  iconImage: string;
  iconName: string;
  onClickFun?: React.MouseEventHandler<HTMLDivElement>;
}> = ({ constraintsRef, iconImage, iconName, onClickFun }) => {
  return (
    <motion.div
      className='w-fit h-fit text-white p-1 my-6 rounded-lg flex flex-col justify-center items-center'
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
        src={iconImage}
        className='w-12 h-12 md:w-16 md:h-16 p-2'
        alt=''
      />
      <p className='text-[12px] md:text-[14px]'>{iconName}</p>
    </motion.div>
  );
};

const MainScreen: React.FC<{ openStart: boolean, setOpenStart: React.Dispatch<React.SetStateAction<boolean>> }> = ({ openStart, setOpenStart }) => {
  const { showProjectSection, setShowProjectSection } =
    useContext(AppContext);
  const [zoomIn, setZoomIn] = useState<boolean>(false);
  const constraintsRef: React.MutableRefObject<null> = useRef(null);

  useEffect(() => {
    return () => {
      toast('👋 Thank you for visiting my portfolio!', {
        duration: 3000,
        className: ' text-white p-5 bg-[#00000020] backdrop-blur-lg',
      });
    };
  }, []);

  const handleFullscreenToggle = () => {
    const documentElement = document.documentElement;

    if (documentElement) {
      if (!zoomIn) {
        documentElement.requestFullscreen().then(() => setZoomIn(true));
      } else {
        document.exitFullscreen().then(() => setZoomIn(false));
      }
    } else {
      console.error('Document element is null or undefined');
    }
  };

  return (
    <AnimatePresence>
      <motion.div className='w-full h-[93%] m-2 relative ' ref={constraintsRef}>
        <DraggableDiv
          onClickFun={() => setShowProjectSection(!showProjectSection)}
          iconName='Projects'
          iconImage={projectIcon}
          constraintsRef={constraintsRef}
        />
        <DraggableDiv
          onClickFun={() => window.open('https://github.com/gagandeepsingh101', '_blank')}
          iconName='GitHub'
          iconImage={githubLogo}
          constraintsRef={constraintsRef}
        />
        <DraggableDiv
          onClickFun={() => window.open("https://www.linkedin.com/in/gagandeep-singh-a2a639247", "_blank")}
          iconName='LinkedIn'
          iconImage={linkedInLogo}
          constraintsRef={constraintsRef}
        />
        <DraggableDiv
          iconName='Resume'
          iconImage={resumeLogo}
          constraintsRef={constraintsRef}
        />
        <DraggableDiv
          onClickFun={handleFullscreenToggle}
          iconName={zoomIn ? 'Zoom Out' : 'Zoom In'}
          iconImage={zoomIn ? zoomOutLogo : zoomInLogo}
          constraintsRef={constraintsRef}
        />
        <StartMenuComponent openStart={openStart} setOpenStart={setOpenStart} />
      </motion.div>
      {showProjectSection && <ProjectMainScreen />}
    </AnimatePresence>
  );
};

export default MainScreen;
