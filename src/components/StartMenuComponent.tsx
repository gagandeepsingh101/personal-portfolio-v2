import React, { useState } from 'react';
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
const StartMenuComponent: React.FC<{ openStart: boolean }> = ({ openStart }) => {
  const [showMoreInfo, setShowMoreInfo] = useState<boolean>(false);
  return (
    <div
      className={'w-1/4 bg-[#00000030] rounded-3xl text-white backdrop-blur-lg absolute bottom-3 left-1/3 transition-all duration-500 ease-in-out '
        + (showMoreInfo ? 'h-[45%] ' : 'h-1/5 ') + (openStart ? 'opacity-100 translate-y-0' : 'opacity-0  translate-y-[150%] ')}>
      <div className={'w-full p-2 flex flex-col overflow-hidden ' + (showMoreInfo ? 'h-4/5' : 'h-1/2')}>
        <div className={'w-full ' + showMoreInfo ? ' flex justify-between px-10  h-1/4' : ' flex justify-between  h-full'}>
          <HoverableImage src={linkedinLogo} alt='LinkedIn Icon' toolTipText='LinkedIn' typeIcon="startMenuIcon" />
          <HoverableImage src={githubLogo} alt='GitHub Icon' toolTipText='GitHub' typeIcon="startMenuIcon" />
          <HoverableImage src={resumeLogo} alt='Resume Icon' toolTipText='Resume' typeIcon="startMenuIcon" />
          <HoverableImage src={projectIcon} alt='Project Icon' toolTipText='Projects' typeIcon="startMenuIcon" />
        </div>
        {showMoreInfo && <div className={'w-full flex flex-col gap-2 transition-all duration-500 ease-in-out  ' + (showMoreInfo ? 'h-3/4' : 'h-0')}>
          <hr className='w-full border-[#80808064] border' />

          <p className='w-full h-[10%] text-[14px] flex justify-between items-center px-2'>
            <span className='w-fit h-fit' >Email</span>
            <span className='w-fit h-fit'>gagandeepSingh128548@gmail.com</span>
            <Tooltip id="email" style={{ backgroundColor: '#00000080', backdropFilter: 'blur(10px)', borderRadius: '10px' }} >Send me email</Tooltip>
            <MdOutlineEmail data-tooltip-id="email" data-tooltip-place="right" className='w-5 h-5 hover:text-blue-300' />
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
                console.log("hello");
              }}
              data-tooltip-id="share" className="w-6 h-6 hover:bg-[#00000050] focus:outline-none rounded-lg" />
          </>)}
          <IoIosArrowUp className={"w-6 h-6 "+(showMoreInfo ? 'rotate-180' : '')} />
        </div>
      </button>
    </div>
  )
}

export default StartMenuComponent
