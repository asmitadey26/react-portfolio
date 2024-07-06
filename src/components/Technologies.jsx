import { RiReactjsLine } from "react-icons/ri";
import { AiOutlineHtml5} from "react-icons/ai"; 
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BsFiletypeSql } from "react-icons/bs";
import { FaFigma } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
initial: {y: -10},
  animate: {
  y: [10, -10],
  transition: {
  duration: duration,
  ease: "linear",
  repeat: Infinity,
  repeatType: "reverse",
  },
},
  });


const Technologies = () => {
  return (
    <div className="">
        <motion.h1 
        whileInView={{ opacity: 1, y: 0}} 
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5}}
        className="my-20 font-bold text-center text-4xl">Skills</motion.h1>

    <motion.div
    whileInView={{ opacity: 1, x: 0}} 
    initial={{ opacity: 0, x: -100}}
    transition={{ duration: 1.5}}
     className="flex flex-wrap items-center justify-center gap-4">
    
    <motion.div
    variants={iconVariants (2.5)}
    initial="initial"
    animate="animate"
     className="rounded-2xl border-4 border-neutral-800 p-4">
                <AiOutlineHtml5 className="text-7xl text-red-400 "/>
                </motion.div>

                <motion.div 
                variants={iconVariants (3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <IoLogoJavascript  className="text-7xl text-yellow-400" />
                </motion.div>

                <motion.div variants={iconVariants (5)}
    initial="initial"
    animate="animate" className="rounded-2xl border-4 ☐ border-neutral-800 p-4">
             <RiReactjsLine className="text-7xl text-cyan-400" />
             </motion.div>
            
                <motion.div
                variants={iconVariants (2)}
                initial="initial"
                animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaCss3Alt className="text-7xl text-blue-500" />
                </motion.div>
                
                <motion.div
                variants={iconVariants (6)}
                initial="initial"
                animate="animate"
                 className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaBootstrap className="text-7xl text-purple-400" />
                </motion.div>

                <motion.div 
                variants={iconVariants (2.5)}
                initial="initial"
                animate="animate"className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiTailwindCssFill className="text-7xl text-cyan-400" />
                </ motion.div>

                <motion.div
                variants={iconVariants (7)}
                initial="initial"
                animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <BsFiletypeSql  className="text-7xl text-orange-400" />
                </motion.div>

                <motion.div 
                variants={iconVariants (3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaJava className="text-7xl text-sky-600" />
                </motion.div>

                <motion.div 
                variants={iconVariants (2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandCpp className="text-7xl text-green-500" />
                </motion.div>

                <motion.div 
                variants={iconVariants (7.5)}
                initial="initial"
                animate="animate"className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaFigma className="text-7xl text-white-500" />
                </motion.div>

                </motion.div>
                </div>
               
  );
};

export default Technologies;