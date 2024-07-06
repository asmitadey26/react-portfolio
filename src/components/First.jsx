import React from 'react';
import profilePic from "../assets/AsmitaProfile.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: {x: -100, opacity: 0},
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const First = () => {
  return (
    <div name="home" className="h-screen w-full">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
        <div className="flex flex-col justify-center h-full">
          <motion.h2 
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-7xl font-bold text-white"
          >
            Hi, I am 
          </motion.h2>

          <motion.span 
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl sm:text-7xl font-bold tracking-tight text-transparent"
          >
            Asmita Dey
          </motion.span>

          <motion.p 
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="my-2 max-w-xl py-6 tracking-tighter font-medium text-lg"
          >
            I'm a passionate Information Technology graduate with a knack for solving complex problems and creating captivating digital experiences. I am dedicated to leveraging technology to solve real-world problems and have hands-on experience in full-stack development and web design. Explore my journey, delve into my projects, and discover my skills.
          </motion.p>

          <div>
            <motion.button
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </motion.button>
          </div>
        </div>

        {/* Conditional rendering for mobile view */}
        <div className="hidden md:flex">
          <motion.img 
            initial={{ x: 100, opacity: 0}}
            animate={{x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0}}
            src={profilePic}
            alt="my profile"
            className="ml-48 w-full h-full relative rounded-full max-w-[400px] max-h-[400px] object-cover object-center border-2 border-primary"
          />
        </div>
      </div>
    </div>
  );
};

export default First;
