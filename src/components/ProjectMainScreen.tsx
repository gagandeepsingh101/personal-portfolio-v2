import React, { useContext } from 'react'
import { MdOutlineClose } from 'react-icons/md'
import { AppContext } from '../App'
import project1 from '../assets/project1.jpeg'
import project2 from '../assets/project2.jpeg'
import project3 from '../assets/project3.jpeg'
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { TbView360 } from "react-icons/tb";

const SingleProjectItem: React.FC<{ projectImage: string, projectName: string, projectDescription: string, projectLiveLink: string, projectCodeLink: string }> = ({ projectImage, projectName, projectDescription, projectLiveLink, projectCodeLink }) => {
  return <div key={projectName} className='w-full h-fit py-3 lg:w-[47%]  md:h-[100%] md:p-3 md:mx-3 flex flex-col'>
    <img src={projectImage} className='w-full h-3/5 rounded-t-lg rounded-lg' alt="" />
    <div className='w-full h-1/5 flex justify-center text-white text-center font-bold'>
      <p className='w-full h-full flex text-white text-center font-bold'>
        <span className='text-md w-8/12 md:text-2xl h-full flex md:px-5 justify-center items-center '>{projectName}</span>
        <span className='w-4/12 h-full flex md:gap-4 justify-center items-center'>
          <LiaLaptopCodeSolid onClick={() => window.open(projectCodeLink)} className=" w-9 h-9 transition-all duration-200 ease-linear p-1 rounded-full hover:bg-black  hover:scale-125" />
          <TbView360 onClick={() => window.open(projectLiveLink)} className=" w-9 h-9 transition-all duration-200 ease-linear p-1 rounded-full hover:bg-black  hover:scale-125 " />
        </span>
      </p>
    </div>
    <p className='text-sm w-11/12 mx-auto h-1/5 text-justify text-white md:text-base '>{projectDescription}</p>
  </div>
}
const ProjectMainScreen: React.FC = () => {
  const { setShowProjectSection } = useContext(AppContext)
  return (
    <div className='w-[100%] h-[93%] flex justify-center items-center text-white bg-[#00000040] absolute top-0 left-0 '>
      <div className='w-[90%] h-[90%] rounded-lg bg-[#00000060] backdrop-blur-md'>
        <p className='w-full h-[5%] flex justify-end bg-[#00000012]'>
          <MdOutlineClose onClick={() => setShowProjectSection(false)} className='w-8 h-8 p-2 font-bold cursor-pointer hover:bg-red-600' />
        </p>
        <div className='w-full h-[95%] overflow-y-scroll scroll-smooth scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#ffffff5b] scrollbar-thumb-rounded-md'>
          <p className='w-11/12 h-[10%] mx-auto flex flex-col gap-3'>
            <span className='text-xl md:text-4xl font-bold w-full h-fit pb-4 border-b-2 border-[#ffffff5a]' >My Projects</span>
          </p>
          <div className='w-11/12 h-[90%] mx-auto flex flex-wrap gap-3'>
            <SingleProjectItem projectCodeLink='https://github.com/gagandeepsingh101/flashcard-generator' projectLiveLink='https://flashcard-generator-three.vercel.app/' projectImage={project1} projectName='Flashcard Generator' projectDescription='The Almabetter Flashcard Capstone Project is a frontend-focused endeavor designed to deliver an engaging and intuitive flashcard application. The primary goal of this project is to create a seamless user experience for studying and reinforcing knowledge through interactive digital flashcards.' />
            <SingleProjectItem projectCodeLink='https://github.com/gagandeepsingh101/dish-dazzle-food-app' projectLiveLink='https://food-ordering-app-gagandeepsingh101.vercel.app/' projectImage={project2} projectName='Dish Dazzle Food App' projectDescription='In this project i create simple food list showing app with swiggy like api using React JS , Tailwind CSS ,Formik,EmailJs, Redux , Redux Toolkit, and React Router. It contain functionaliy like shimmer ui loading, pagination, infinite scroll,add item to cart, remove item, search and filtering of data' />
            <SingleProjectItem projectLiveLink='https://gagandeepsingh101.github.io/Personal-Portfolio/#home' projectCodeLink='https://github.com/gagandeepsingh101/Personal-Portfolio' projectImage={project3} projectName='Personal Portfolio v1' projectDescription='This is my personal portfolio website which showcases my work, skills, and projects, and it is built using HTML, CSS, SCSS, JavaScript, AOS (Animate on Scroll), and jQuery. The website is designed to be responsive, user-friendly, and visually appealing, making it a perfect platform to display my web development and design abilities.' />
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProjectMainScreen

