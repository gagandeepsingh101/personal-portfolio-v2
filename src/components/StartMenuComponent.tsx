import React, { useContext, useState } from 'react';
import { IoIosArrowUp } from "react-icons/io";
import githubLogo from '../assets/github.png';
import linkedinLogo from '../assets/linkedIn.png';
import projectIcon from '../assets/project.png';
import resumeLogo from '../assets/resume.png';
import HoverableImage from './HoverableImage';
import personPng from "/logo.png";
import { IoShareOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { Tooltip } from 'react-tooltip';
import { AppContext } from '../App';
const StartMenuComponent: React.FC<{ openStart: boolean, setOpenStart: React.Dispatch<React.SetStateAction<boolean>> }> = ({ openStart ,setOpenStart}) => {
  const [showMoreInfo, setShowMoreInfo] = useState<boolean>(false);
  const { setShowProjectSection, showProjectSection } = useContext(AppContext);
  return (
    <div
      className={'w-[98%] -left-1 z-20  md:w-1/2 bg-[#00000030] rounded-3xl text-white backdrop-blur-lg absolute bottom-8  transition-all duration-500 ease-in-out md:left-1/4 lg:left-1/3 lg:w-1/4 '
        + (showMoreInfo ? ' h-1/2 lg:h-[45%] ' : 'h-1/5 ') + (openStart ? 'opacity-100 translate-y-0' : 'opacity-0  translate-y-[150%] ')}>
      <div className={'w-full p-2 flex flex-col overflow-hidden ' + (showMoreInfo ? 'h-4/5' : 'h-1/2')}>
        <div className={'w-full ' + showMoreInfo ? ' flex justify-between md:px-10  h-1/4' : ' flex justify-between  h-full'}>
          <HoverableImage onClickFn={() => { window.open("https://www.linkedin.com/in/gagandeepsingh101", "_blank") }} src={linkedinLogo} alt='LinkedIn Icon' toolTipText='LinkedIn' typeIcon="startMenuIcon" />
          <HoverableImage onClickFn={() => { window.open("https://github.com/gagandeepsingh101", "_blank") }} src={githubLogo} alt='GitHub Icon' toolTipText='GitHub' typeIcon="startMenuIcon" />
          <HoverableImage onClickFn={()=>window.open("https://drive.google.com/file/d/1UwICjElQd1zrQ6fC8wb24n8AfChBCOGo/view?usp=sharing","_blank")} src={resumeLogo} alt='Resume Icon' toolTipText='Resume' typeIcon="startMenuIcon" />
          <HoverableImage onClickFn={() => {
            setShowProjectSection(!showProjectSection);
            setOpenStart(!openStart);
          }} src={projectIcon} alt='Project Icon' toolTipText='Projects' typeIcon="startMenuIcon" />
        </div>
        {showMoreInfo && <div className={'w-full flex flex-col gap-2 transition-all duration-500 ease-in-out  ' + (showMoreInfo ? 'h-3/4' : 'h-0')}>
          <hr className='w-full border-[#80808064] border' />

          <p className='w-full h-[10%] text-[14px] md:gap-2 flex justify-between items-center md:px-2'>
            <span className='w-fit h-fit ' >Email</span>
            <span className='w-fit h-fit '>gagandeepSingh128548@gmail.com</span>
            <Tooltip id="email" style={{ backgroundColor: '#00000080', backdropFilter: 'blur(10px)', borderRadius: '10px' }} >Send me email</Tooltip>
            <MdOutlineEmail onClick={() => window.open('mailto:gagandeepSingh128548@gmail.com')} data-tooltip-id="email" data-tooltip-place="right" className='w-5 h-5 hover:text-blue-300' />
          </p>
          <hr className='w-full h-fit border-[#80808064] border' />
          <p className='w-full h-[90%] text-[14px] flex justify-between items-center px-2'>
            <span className='w-4/12' >Skill</span>
            <span className='w-8/12'>
              Javascript, ReactJS ,<br />
              TypeScript, NodeJS, <br />
              MongoDB, NextJS, <br />
              HTML, CSS,Git,GitHub, <br />
              Framer Motion ,Formik, <br />
              react-testing library, jest
            </span>
          </p>
        </div>}
      </div>

      <button onClick={() => setShowMoreInfo(!showMoreInfo)} type='button' className={'w-full flex gap-1 bg-[#00000050] rounded-b-3xl' + (showMoreInfo ? ' h-1/5' : ' h-1/2')}>
        <div className='w-2/12 h-full p-2 flex justify-center items-center'><img src={personPng} className='w-8 h-8' alt="Person Image" /></div>
        <p className='w-6/12 h-full flex flex-col text-left justify-center text-[13px]'><span>Gagandeep Singh</span>
          <span>FrontEnd Developer</span>
        </p>
        <div className='w-4/12 h-full flex gap-3 justify-center items-center'>
          {showMoreInfo === true && (<>
            <Tooltip id="share" style={{ backgroundColor: '#00000080', backdropFilter: 'blur(10px)', borderRadius: '10px' }}>Share my portfolio</Tooltip>
            <IoShareOutline
              onClick={() => {
                navigator.share({
                  title: 'Gagandeep Singh',
                  text: 'Check out my portfolio',
                  url: 'https://personal-portfolio-v2-edlxynvro-gagandeepsingh101.vercel.app/'
                })
              }}
              data-tooltip-id="share" className="w-6 h-6 hover:bg-[#00000050] focus:outline-none rounded-lg" />
          </>)}
          <IoIosArrowUp className={"w-6 h-6 " + (showMoreInfo ? 'rotate-180' : '')} />
        </div>
      </button>
    </div>
  )
}

export default StartMenuComponent
